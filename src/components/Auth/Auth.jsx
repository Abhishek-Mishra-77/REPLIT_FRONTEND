import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp';
import OtpVerification from './OtpVerification';
import { useDispatch } from 'react-redux';
import { loginAsyn } from '../../store/slices/authSlice';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isForgot, setIsForgot] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "",
        role: 'operator',
        email: "",
        password: ""
    })
    const dispatch = useDispatch();

    const onLoginHandler = (e) => {
        e.preventDefault();
        console.log(userDetails)
        dispatch(loginAsyn(userDetails));
    }

    return (
        <>
            {isLogin ? <SignIn
            onLoginHandler={onLoginHandler}
                userDetails={userDetails}
                setUserDetails={setUserDetails}
                setIsForgot={setIsForgot}
                setIsLogin={setIsLogin} />
                : <SignUp
                    setIsLogin={setIsLogin}
                />}

            {isForgot && <OtpVerification setIsForgot={setIsForgot} />}
        </>
    )
}

export default Auth