import axios from "axios";
import { serverUrl } from "../services/common";

const token = localStorage.getItem("token");
const onCreateUserHandler = async (userDetails) => {
    try {
        const response = await axios.post(`${serverUrl}/auth/create`, userDetails, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;

    } catch (error) {
        return error.response.data;
    }
}

const onUpdateUserHandler = (id, userDetails) => axios.put(`/auth/update/${id}`, userDetails);
const onRemoveUserHandler = (id) => axios.delete(`/auth/remove/${id}`);

export { onCreateUserHandler, onUpdateUserHandler, onRemoveUserHandler };