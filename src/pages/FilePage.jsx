import React, { useState, useEffect } from 'react'
import TopBar from '../components/TopBar/TopBar'
import File from '../components/File/File'
import { onGetFolderByIdHandler } from '../Api/folder'

const FilePage = () => {
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await onGetFolderByIdHandler();
                if (response?.folders) {
                    setFolders(response.folders);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);


    return (
        <div>
            <TopBar Repls={folders} />
            <div className="p-12 text-white">
                <File folders={folders} />
            </div>
        </div>
    )
}

export default FilePage
