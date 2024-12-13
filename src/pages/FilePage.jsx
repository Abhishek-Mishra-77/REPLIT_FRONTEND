import React, { useState, useEffect } from 'react'
import TopBar from '../components/TopBar/TopBar'
import File from '../components/File/File'
import { onGetFolderByIdHandler } from '../Api/folder'
import { onGetFilesHandler } from '../Api/file'
import { useParams } from 'react-router-dom'


const FilePage = () => {
    const { id } = useParams();
    const [files, setFiles] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const fileResponse = await onGetFilesHandler(id);

                if (fileResponse?.files) {
                    setFiles(fileResponse?.files);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div>
            <TopBar Repls={files} />
            <div className="p-12 text-white">
                <File setFiles={setFiles} files={files} />
            </div>
        </div>
    )
}

export default FilePage
