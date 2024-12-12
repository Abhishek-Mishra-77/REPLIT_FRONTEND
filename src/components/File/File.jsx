import React from 'react'
import Header from '../Home/Header'

const File = ({ folders }) => {
    return (
        <div className="text-white gap-2 rounded-lg">
            <Header data={folders} name="Files" />
        </div>
    )
}

export default File