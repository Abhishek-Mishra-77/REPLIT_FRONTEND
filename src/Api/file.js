import axios from "axios";
import { serverUrl } from "../services/common";
import { toast } from "react-toastify";

const token = localStorage.getItem("token");

/* ------------------------------------------------------------------------ */
/*                              CREATE API                                  */
/* ------------------------------------------------------------------------ */
const onCreateFileHandler = async (file) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.post(`${serverUrl}/files/create`, file, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;
    }
    catch (error) {
        toast.error(error.response.data.message)
    }
}

/* ------------------------------------------------------------------------ */
/*                              REMOVE API                                  */
/* ------------------------------------------------------------------------ */
const onRemoveFileHandler = async (id) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.delete(`${serverUrl}/files/remove/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;
    }
    catch (error) {
        toast.error(error.response.data.message)
    }
}

/* ------------------------------------------------------------------------ */
/*                              GET API                                     */
/* ------------------------------------------------------------------------ */

const onGetFileByIdHandler = async (id) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`${serverUrl}/files/file/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;
    }
    catch (error) {
        toast.error(error.response.data.message)
    }
}

/* ------------------------------------------------------------------------ */
/*                              GET API                                     */
/* ------------------------------------------------------------------------ */
const onGetFilesHandler = async (folderId) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`${serverUrl}/files/files/${folderId}`, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;
    }
    catch (error) {
        // toast.error(error.response.data.message)
    }
}

/* ------------------------------------------------------------------------ */
/*                              UPDATE API                                  */
/* ------------------------------------------------------------------------ */
const onUpdateFileHandler = async (id, data) => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.put(`${serverUrl}/files/update/${id}`, data, { headers: { "Authorization": `Bearer ${token}` } });
        return response.data;
    }
    catch (error) {
        toast.error(error.response.data.message)
    }
}

export { onCreateFileHandler, onRemoveFileHandler, onGetFileByIdHandler, onGetFilesHandler, onUpdateFileHandler };