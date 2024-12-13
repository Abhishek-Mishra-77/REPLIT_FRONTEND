import React, { useState, useEffect } from 'react'
import TopBar from '../components/TopBar/TopBar'
import File from '../components/File/File'
import { onGetFolderByIdHandler } from '../Api/folder'

const FilePage = () => {
    const [files, setFiles] = useState([]);


    useEffect(() => {
        (async () => {
            try {
                const response = await onGetFolderByIdHandler();
                if (response?.files) {
                    setFiles(response.files);
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
                <File files={files} setFiles={setFiles} />
            </div>
        </div>
    )
}

export default FilePage
