import axios from "axios";
import { serverUrl } from "../services/common";
import { toast } from "react-toastify";


const onCreateFolderHandler = async (name) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.post(`${serverUrl}/folders/create`, { name }, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

const onRemoveFolderHandler = async (id) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.delete(`${serverUrl}/folders/remove/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
        console.log(response)
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
}


const onUpdateFolderHandler = async (id, name) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.put(`${serverUrl}/folders/update/${id}`, { name }, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
}


const onGetAllFoldersHandler = async () => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`${serverUrl}/folders`, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

const onGetFolderByIdHandler = async () => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`${serverUrl}/folders/folders`, { headers: { "Authorization": `Bearer ${token}` } });
        return response?.data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
}


export { onCreateFolderHandler, onRemoveFolderHandler, onUpdateFolderHandler, onGetAllFoldersHandler, onGetFolderByIdHandler }