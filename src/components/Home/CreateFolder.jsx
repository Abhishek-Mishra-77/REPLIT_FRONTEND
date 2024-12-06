import React from 'react'
import { FiFilePlus } from "react-icons/fi";
import { openOrCloseFolderModal } from '../../store/slices/homeSlice';
import { useDispatch } from 'react-redux';

const CreateFolder = () => {
    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(openOrCloseFolderModal())} className="p-2 flex w-36 items-center gap-3 bg-gray-800 border border-transparent focus:border-sky-300 active:border-sky-300 rounded-md cursor-pointer transition-colors duration-300">
            <FiFilePlus className="text-sky-400 text-lg" />
            <p className="text-sm font-medium text-gray-300 ">New Folder</p>
        </div>
    )
}

export default CreateFolder