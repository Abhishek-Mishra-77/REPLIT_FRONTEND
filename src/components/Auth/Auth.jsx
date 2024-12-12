import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import OtpVerification from "./OtpVerification";
import { useDispatch } from "react-redux";
import { loginHandler } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { onCreateUserHandler, onSignInHandler, onSendOtpToEmailHandler, onVerifyOtpHandler } from "../../Api/auth";
import { toast } from "react-toastify";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "User",
    role: "Operator",
    email: "",
    password: "",
  });
  const [userId, setUserId] = useState("")
  const [loading, setIdLoading] = useState(false)
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [showPassword, setShowPassoword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* ------------------------------------------------------------------------- */
  /*                             LOGIN HANDLER                                 */
  /* ------------------------------------------------------------------------- */
  const onLoginHandler = async (e) => {
    e.preventDefault();

    if (!userDetails.email || !userDetails.password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      const response = await onSignInHandler(userDetails);
      dispatch(loginHandler({ user: response.user, token: response.token }));
      navigate("/");
      toast.success(response.message);
    } catch (error) {
      console.log(error);
    }
  };

  /* ------------------------------------------------------------------------- */
  /*                             SIGNUP HANDLER                                */
  /* ------------------------------------------------------------------------- */
  const onRegisterHandler = async (e) => {
    e.preventDefault();

    const newUser = { ...userDetails, name: "Abhishek Mishra", role: "admin" };

    if (!newUser.email || !newUser.password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      const response = await onCreateUserHandler(newUser);
      setIsLogin(true);
      toast.success(response.message || "User created successfully");
      setUserDetails((prev) => ({ ...prev, email: "", password: "" }));
    } catch (error) {
      toast.error(error.response.data.message || error.message);
    }
  };

  /* ------------------------------------------------------------------------- */
  /*                             SENDING OTP                                   */
  /* ------------------------------------------------------------------------- */
  const SendOtpHandler = async (email) => {
    if (!email) {
      toast.error("Please enter email");
      return;
    }
    setIdLoading(true)
    try {
      const response = await onSendOtpToEmailHandler(email);
      setUserId(response?.userId)
      toast.success(response?.message);
    }
    catch (error) {
      toast.error(error.message);
    }
    finally {
      setIdLoading(false)
    }
  }

  /* ------------------------------------------------------------------------- */
  /*                             VERIFYING OTP                                 */
  /* ------------------------------------------------------------------------- */
  const VerifyOtpHandler = async (e) => {
    e.preventDefault();
    const otp = e.target.otp.value
    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }
    try {
      const response = await onVerifyOtpHandler(otp, userId);
      dispatch(loginHandler({ user: response.user, token: response.token }));
      navigate("/");
      setIsOtpSent(false)
      setUserId("")
      setIsForgot(false)
      toast.success(response.message);
    }
    catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      {isLogin ? (
        <SignIn
          onLoginHandler={onLoginHandler}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          setIsForgot={setIsForgot}
          setIsLogin={setIsLogin}
          showPassword={showPassword}
          setShowPassoword={setShowPassoword}
        />
      ) : (
        <SignUp
          onRegisterHandler={onRegisterHandler}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          setIsLogin={setIsLogin}
          showPassword={showPassword}
          setShowPassoword={setShowPassoword}
        />
      )}

      {isForgot &&
        <OtpVerification
          setIsForgot={setIsForgot}
          SendOtpHandler={SendOtpHandler}
          setIsOtpSent={setIsOtpSent}
          isOtpSent={isOtpSent}
          loading={loading}
          VerifyOtpHandler={VerifyOtpHandler}
        />}
    </>
  );
};

export default Auth;
