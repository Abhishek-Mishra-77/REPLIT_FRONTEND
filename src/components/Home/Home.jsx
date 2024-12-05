import React from "react";
import { BiError } from "react-icons/bi";
import { CiFolderOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FiFilePlus } from "react-icons/fi";
import { LuUsersRound } from "react-icons/lu";
import { FaJava } from "react-icons/fa";

const Home = () => {
  return (
    <div className="text-white gap-2 rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between bg-gray-800 items-center p-4  rounded-t-lg">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <span className="text-sky-400 text-2xl">
            <CiFolderOn />
          </span>
          <h3 className="text-lg font-semibold">Repls</h3>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <BiError className="text-yellow-400" />
            <p>(18/3) Repls</p>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex items-center gap-3">
          <FaPlus className="text-green-400 text-lg cursor-pointer hover:scale-110 transition-transform duration-200" />
          <button className="px-5 py-2 bg-green-600 hover:bg-green-700 text-sm font-medium text-white rounded-md shadow transition-transform transform hover:-translate-y-1">
            Create
          </button>
        </div>
      </div>

      {/* Subheading Section */}
      <div className="p-4 text-sm text-gray-300">
        <p className="flex items-center gap-2">
          <span className="text-white font-medium">All</span>
          <span className="text-gray-500">/</span>
        </p>
      </div>

      {/* Folder Section */}
      <div className="p-2 flex w-36 items-center gap-3 bg-gray-800 rounded-md cursor-pointer transition-colors duration-300">
        <FiFilePlus className="text-sky-400 text-lg" />
        <p className="text-sm font-medium text-gray-300 ">New Folder</p>
      </div>

      {/* Folder Section */}
      <div className="p-2 flex w-96 mt-4 items-center gap-3 bg-gray-800 rounded-md cursor-pointer transition-colors duration-300">
        <LuUsersRound className="text-sky-400 text-lg" />
        <p className="text-sm font-medium text-gray-300 ">Share with me</p>
      </div>

      {/* All Folders */}
      <div className="p-6 flex mt-4 items-center gap-3 bg-gray-800 rounded-md cursor-pointer transition-colors duration-300">
        <FaJava className="text-sky-400 text-lg" />
        <p className="text-sm font-medium text-gray-300 ">Share with me</p>
      </div>
    </div>
  );
};

export default Home;
