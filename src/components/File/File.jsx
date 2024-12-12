import React from 'react'
import Header from '../Home/Header'

const File = ({ folders }) => {



    return (
        <div className="text-white gap-2 rounded-lg">
            <Header data={folders} />
        </div>
    )
}

export default File