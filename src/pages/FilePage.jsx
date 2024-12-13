import React, { useState, useEffect } from 'react'
import TopBar from '../components/TopBar/TopBar'
import File from '../components/File/File'
import { onGetFilesHandler } from '../Api/file'
import { useParams } from 'react-router-dom'


const FilePage = () => {
    const { id } = useParams();
    const [files, setFiles] = useState([]);
    const [searchFolder, setSearchFolder] = useState("");

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


    const filteredFiles = files?.filter((folder) =>
        folder.name.toLowerCase().includes(searchFolder.toLowerCase())
    );

    return (
        <div>
            <TopBar
                Repls={files}
                filderedData={filteredFiles}
                searchFolder={searchFolder}
                setSearchFolder={setSearchFolder}
            />
            <div className="p-12 text-white">
                <File setFiles={setFiles} files={filteredFiles} />
            </div>
        </div>
    )
}

export default FilePage
