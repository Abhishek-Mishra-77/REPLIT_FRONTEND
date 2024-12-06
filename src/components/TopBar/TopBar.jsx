import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const TopBar = ({ Repls }) => {
  const [searchFolder, setSearchFolder] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredFolders = Repls?.filter((folder) =>
    folder.name.toLowerCase().includes(searchFolder.toLowerCase())
  );


  return (
    <div
      className="relative w-full flex items-center p-2 justify-center border-gray-200 dark:border-gray-700 border-b"
      style={{ maxWidth: "100vw" }}
    >
      <div className="relative w-full flex items-center justify-center">
        <div className="relative w-[60%] flex items-center justify-center">
          <span className="absolute left-3  text-slate-400">
            <CiSearch />
          </span>
          <input
            className="w-full pl-10 bg-transparent placeholder:text-slate-400 text-sm border border-gray-200 dark:border-gray-700 rounded-md p-2 text-white active:border-sky-300 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Search & run commands"
            value={searchFolder}
            onChange={(e) => setSearchFolder(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <span className="absolute right-3  text-slate-400">Ctrl</span>
        </div>
        {isFocused && (searchFolder || filteredFolders?.length > 0) && (
          <div className="absolute w-[60%] top-10 transform-translate-x-1/2  bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-999">
            <ul className="max-h-40 overflow-y-auto "
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {(searchFolder ? filteredFolders : folders)?.map((folder, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                >
                  {folder.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

    </div>
  );
};

export default TopBar;
