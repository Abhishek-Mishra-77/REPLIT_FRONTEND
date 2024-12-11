import axios from "axios";
import { serverUrl } from "../services/common";
import { toast } from "react-toastify";

const token = localStorage.getItem("token");

/* ------------------------------------------------------------------------ */
/*                             SIGNUP API                                   */
/* ------------------------------------------------------------------------ */
const onCreateUserHandler = async (userDetails) => {
    try {
        const response = await axios.post(`${serverUrl}/auth/create`, userDetails, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;

    } catch (error) {
        toast.error(error.response.data.message)
        return error.response.data;
    }
}

/* ------------------------------------------------------------------------ */
/*                             SIGNIN API                                   */
/* ------------------------------------------------------------------------ */
const onSignInHandler = async (userDetails) => {
    try {
        const response = await axios.post(`${serverUrl}/auth/login`, userDetails);
        return response?.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

/* ------------------------------------------------------------------------ */
/*                             UPDATE USER API                              */
/* ------------------------------------------------------------------------ */

const onUpdateUserHandler = (id, userDetails) => axios.put(`/auth/update/${id}`, userDetails);

/* ------------------------------------------------------------------------ */
/*                             REMVOVE USER API                             */
/* ------------------------------------------------------------------------ */

const onRemoveUserHandler = async (id) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.delete(`${serverUrl}/auth/remove/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
};

/* ------------------------------------------------------------------------ */
/*                             TOKEN VERIFICATION API                       */
/* ------------------------------------------------------------------------ */
const onTokenVerificationHandler = async () => {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            await axios.post(`${serverUrl}/auth/verify-token`,
                {},
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );
            return true;
        } catch (error) {
            console.error("Token validation failed:", error);
            return false;
        }
    }
    else {
        return false;
    }
}

/* ------------------------------------------------------------------------ */
/*                             SEND OTP API                                 */
/* ------------------------------------------------------------------------ */

const onSendOtpToEmailHandler = async (email) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.post(`${serverUrl}/auth/sendotp`,
            { email },
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Token validation failed:", error);
        toast.error(error.response.data.message)
    }
}

/* ------------------------------------------------------------------------ */
/*                             VERIFY OTP API                               */
/* ------------------------------------------------------------------------ */
const onVerifyOtpHandler = async (otp, userId) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.post(`${serverUrl}/auth/verifybyotp`,
            { otp, userId },
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Token validation failed:", error);
        toast.error(error.response.data.message)
    }
}

/* ------------------------------------------------------------------------ */
/*                              GET ALL USERS API                           */
/* ------------------------------------------------------------------------ */
const onGetAllUsersHandler = async () => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`${serverUrl}/auth/users`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Token validation failed:", error);
        toast.error(error.response.data.message)
    }
}



export {
    onCreateUserHandler,
    onUpdateUserHandler,
    onRemoveUserHandler,
    onTokenVerificationHandler,
    onSignInHandler,
    onSendOtpToEmailHandler,
    onVerifyOtpHandler,
    onGetAllUsersHandler
};