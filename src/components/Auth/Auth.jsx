import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import OtpVerification from "./OtpVerification";
import { useDispatch } from "react-redux";
import { loginHandler } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { onCreateUserHandler, onSignInHandler } from "../../Api/auth";
import { toast } from "react-toastify";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "Abhishek",
    role: "operator",
    email: "",
    password: "",
  });
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

    if (!userDetails.email || !userDetails.password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      const response = await onCreateUserHandler(userDetails);
      setIsLogin(true);
      toast.success(response.message || "User created successfully");
      setUserDetails((prev) => ({ ...prev, email: "", password: "" }));
    } catch (error) {
      toast.error(error.response.data.message || error.message);
    }
  };

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

      {isForgot && <OtpVerification setIsForgot={setIsForgot} />}
    </>
  );
};

export default Auth;
