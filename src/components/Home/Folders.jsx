import React, { useState } from 'react';
import { LuUsersRound } from "react-icons/lu";
import { CiFolderOn } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { removeFolderHandler, openOrCloseFolderModal } from '../../store/slices/homeSlice';

const Folders = ({ setFolderName, setFolderId }) => {
    const { folders } = useSelector((state) => state.home);
    const dispatch = useDispatch();
    const [activeDropdown, setActiveDropdown] = useState(null);


    const toggleDropdown = (id) => {
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    return (
        <div className="flex justify-between items-center gap-1 flex-wrap">
            <div className="p-2 flex w-[30%] mt-4 items-center gap-3 bg-gray-800 borderStyle cursor-pointer transition-colors duration-300 outline-none" tabIndex={0}>
                <LuUsersRound className="text-sky-400 text-lg" />
                <p className="text-sm font-medium text-gray-300">Share with me</p>
            </div>

            {folders?.map((folder, i) => (
                <div key={folder.id} tabIndex={i + 1} className="p-2 flex justify-between w-[30%] mt-4 items-center borderStyle gap-3 bg-gray-800 rounded-md cursor-pointer transition-colors duration-300 relative">
                    <div className="flex gap-2">
                        <CiFolderOn className="text-sky-400 text-lg" />
                        <p className="text-sm font-medium text-gray-300">{folder.name}</p>
                    </div>

                    <span onClick={() => toggleDropdown(folder.id)} className="cursor-pointer">
                        <HiOutlineDotsVertical className="text-gray-400 text-xl" />
                    </span>

                    {activeDropdown === folder.id && (
                        <div className="absolute right-2 mt-2 top-6 w-32 bg-gray-700 rounded-md shadow-lg z-10">
                            <ul className="text-sm text-gray-300">
                                <li
                                    onClick={() => {
                                        dispatch(openOrCloseFolderModal())
                                        setFolderName(folder.name)
                                        setFolderId(folder.id)
                                        setActiveDropdown(null);
                                    }}
                                    className="px-4 py-2 flex items-center gap-2 hover:bg-gray-600 cursor-pointer">
                                    <span className="text-xl">
                                        <MdDriveFileRenameOutline />
                                    </span>
                                    <span>Rename</span>
                                </li>
                                <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-600 cursor-pointer">
                                    <span className="text-xl">
                                        <CiFolderOn />
                                    </span>
                                    <span>Move</span>
                                </li>
                                <li
                                    className="px-4 py-2 flex items-center gap-2 hover:bg-red-600 cursor-pointer"
                                    onClick={() => {
                                        dispatch(removeFolderHandler(folder.id));
                                        setActiveDropdown(null);
                                    }}
                                >
                                    <span className="text-xl">
                                        <MdDelete />
                                    </span>
                                    <span>Delete</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Folders;
