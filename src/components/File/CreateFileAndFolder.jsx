import React from 'react'
import { FiFilePlus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const CreateFileAndFolder = ({ setOpenTemplate }) => {

    return (
        <div className="p-4 flex items-center justify-between w-72 bg-gray-800 border border-dashed border-gray-600 rounded-xl">
            <button className="flex items-center gap-2 px-3 py-2 border border-transparent focus:border-sky-300  bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors duration-200">
                <FiFilePlus className="text-sky-400" />
                <span className="text-sm font-medium">New Folder</span>
            </button>
            <button
                onClick={() => setOpenTemplate(true)}
                className="flex items-center gap-2 px-3 py-2 border border-transparent focus:border-sky-300  bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors duration-200">
                <FaPlus className="text-sky-400" />
                <span className="text-sm font-medium">New Repl</span>
            </button>
        </div>
    )
}

export default CreateFileAndFolder