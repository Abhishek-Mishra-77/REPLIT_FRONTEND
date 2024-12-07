import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp';
import OtpVerification from './OtpVerification';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isForgot, setIsForgot] = useState(false);

    return (
        <>
            {isLogin ? <SignIn
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