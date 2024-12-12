import React from 'react'
import Header from '../Home/header'

const File = ({ folders }) => {

    

    return (
        <div className="text-white gap-2 rounded-lg">
            <Header folders={folders} />
        </div>
    )
}

export default File