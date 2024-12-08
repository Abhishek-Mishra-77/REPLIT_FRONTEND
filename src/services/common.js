import axios from "axios";

export const serverUrl = import.meta.env.VITE_SERVER_URL;

export const onTokenVerificationHandler = async () => {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            const response = await axios.post(`${serverUrl}/auth/verify-token`,
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