import React, { useEffect, useState } from 'react'
import Header from '../Home/Header'
import CreateFileAndFolder from './CreateFileAndFolder';
import SelecteTemplate from './SelecteTemplate';
import { onGetAllLanguagesHandler } from '../../Api/langauge';
import { useParams } from 'react-router-dom';
import { onCreateFileHandler, onGetFilesHandler } from '../../Api/file';
import { toast } from 'react-toastify';
import Files from './Files';
import ConfirmationModal from '../../Modals/ConfirmationModal';
import { onRemoveFileHandler } from '../../Api/file';



const File = ({ files, setFiles }) => {
    const [file, setFile] = useState({
        name: "",
        langauge: "",
        folderId: ""
    });
    const [openTemplate, setOpenTemplate] = React.useState(false);
    const [langauges, setLangauges] = React.useState([]);
    const [selectedId, setSelectedId] = useState("");
    const [confirmation, setConfirmation] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const templates = await onGetAllLanguagesHandler();
                const allFiles = await onGetFilesHandler(id);
                setFiles(allFiles?.files);
                setLangauges(templates?.langauges);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])

    const createFileHandler = async () => {
        if (!file.name || !file.langauge) return toast.error("All fields are required");

        const fileDetails = { ...file, folderId: id };
        try {
            const response = await onCreateFileHandler(fileDetails);
            if (response?.file) {
                setFile({
                    name: "",
                    langauge: "",
                    folderId: ""
                });
                setFiles((prev) => [...prev, response?.file]);
                setOpenTemplate(false);
                toast.success(response?.message)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const removeFile = async () => {
        try {
            const response = await onRemoveFileHandler(selectedId);
            if (response) {
                const filteredFiles = files.filter((file) => file._id !== selectedId);
                setFiles(filteredFiles);
                setConfirmation(false);
                setSelectedId("");
            }
            toast.success(response?.file?.message)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="text-white gap-2 rounded-lg">

            {!openTemplate ?
                <>
                    <Header data={files} listName="Files" />
                    <CreateFileAndFolder setOpenTemplate={setOpenTemplate} />
                    <Files files={files} />
                </>
                : <SelecteTemplate
                    createFileHandler={createFileHandler}
                    file={file}
                    setFile={setFile}
                    langauges={langauges}
                />}
        </div>
    )
}

export default File