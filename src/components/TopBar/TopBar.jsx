import React from "react";
import { CiSearch } from "react-icons/ci";

const TopBar = () => {
  return (
    <div
      className="w-full flex items-center p-2 justify-center border-gray-200 dark:border-gray-700 border-b"
      style={{ maxWidth: "100vw" }}
    >
      <div className="relative w-[50%] flex items-center justify-center">
        <span className="absolute left-3 mb-2 text-slate-400">
          <CiSearch />
        </span>
        <input
          className="w-full pl-10 mb-2 bg-transparent placeholder:text-slate-400 text-sm border border-gray-200 dark:border-gray-700 rounded-md p-2 text-white active:border-sky-300 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Search & run commands"
        />
        <span className="absolute right-3 mb-2 text-slate-400">Ctrl</span>
      </div>
    </div>
  );
};

export default TopBar;
