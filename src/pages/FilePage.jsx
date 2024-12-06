import React from 'react'
import TopBar from '../components/TopBar/TopBar'
import File from '../components/File/File'

const FilePage = () => {
    return (
        <div>
            <TopBar />
            <div className="p-12 text-white">
                <File />
            </div>
        </div>
    )
}

export default FilePage
