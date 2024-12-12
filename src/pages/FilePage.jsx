import React from 'react'
import TopBar from '../components/TopBar/TopBar'
import File from '../components/File/File'
import { useSelector } from 'react-redux'

const FilePage = () => {
    const { files } = useSelector((state) => state.file);

    return (
        <div>
            <TopBar Repls={files} />
            <div className="p-12 text-white">
                <File />
            </div>
        </div>
    )
}

export default FilePage
