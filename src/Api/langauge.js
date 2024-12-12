import axios from "axios";
import { serverUrl } from "../services/common";
import { toast } from "react-toastify";

const token = localStorage.getItem("token");

const onGetAllLanguagesHandler = async () => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`${serverUrl}/langauges/langauges`, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

const onCreateLanguageHandler = async (name) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.post(`${serverUrl}/languages/create`, { name }, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
}


export { onGetAllLanguagesHandler, onCreateLanguageHandler }