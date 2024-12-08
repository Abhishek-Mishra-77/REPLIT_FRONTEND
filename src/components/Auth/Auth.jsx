import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import OtpVerification from "./OtpVerification";
import { useDispatch } from "react-redux";
import { loginAsyn } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { onCreateUserHandler } from "../../Api/auth";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLoginHandler = (e) => {
    e.preventDefault();
    dispatch(loginAsyn(userDetails));
    navigate("/");
  };

  const onRegisterHandler = async (e) => {
    e.preventDefault();

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
        />
      ) : (
        <SignUp
          onRegisterHandler={onRegisterHandler}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          setIsLogin={setIsLogin}
        />
      )}

      {isForgot && <OtpVerification setIsForgot={setIsForgot} />}
    </>
  );
};

export default Auth;
