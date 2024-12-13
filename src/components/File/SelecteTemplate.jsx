import React, { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';
import * as TbIcons from 'react-icons/tb';
import * as IOIcons from 'react-icons/io5';
import * as RIIcons from 'react-icons/ri';

const SelecteTemplate = ({ langauges, createFileHandler, file, setFile }) => {
    const [search, setSearch] = useState("");
    const filteredLangauges = langauges?.filter((langauge) =>
        langauge.name.toLowerCase().includes(search.toLowerCase())
    );

    const getIconComponent = (iconName) => {
        const allIcons = {
            ...FaIcons,
            ...IoIcons,
            ...SiIcons,
            ...TbIcons,
            ...IOIcons,
            ...RIIcons
        };
        return allIcons[iconName] || FaIcons.FaQuestionCircle;
    };

    return (
        <div className="text-white flex flex-col items-center p-8">
            <h1 className="text-4xl font-extrabold mb-6 text-center">Create a New File</h1>

            <div className="w-full max-w-5xl rounded-xl shadow-lg p-8">
                <div className="flex border-b border-gray-700 mb-6">
                    <button className="flex-1 py-3 text-center text-sm font-medium text-gray-300 hover:text-white border-b-2 border-transparent hover:border-sky-400 transition">
                        Create with Replit Agent
                    </button>
                    <button className="flex-1 py-3 text-center text-sm font-medium text-white border-b-2 border-sky-400">
                        Choose a Template
                    </button>
                    <button className="flex-1 py-3 text-center text-sm font-medium text-gray-300 hover:text-white border-b-2 border-transparent hover:border-sky-400 transition">
                        Import from GitHub
                    </button>
                </div>

                <div className="flex gap-8 flex-wrap md:flex-nowrap">
                    <div className="md:w-1/2 border border-gray-700 p-4 rounded-lg mainBackground shadow-md">
                        <div>
                            <label className="block mb-4 text-sm font-medium text-gray-400">Template</label>
                            <input
                                type="text"
                                placeholder="Search Templates"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full mb-2 bg-transparent placeholder:text-slate-400 text-sm border border-gray-200 dark:border-gray-700 rounded-md p-2 text-white active:border-sky-300 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            />
                        </div>

                        <ul
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                            className="space-y-3 max-h-56 bg-gray-700 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
                        >
                            {filteredLangauges?.map((langauge) => {
                                const LogoComponent = getIconComponent(langauge.logo);

                                return (
                                    <li
                                        onClick={() => setFile((prev) => ({ ...prev, langauge: langauge?.name }))}
                                        key={langauge?._id}
                                        className={`flex items-center cursor-pointer gap-2 p-3 rounded-lg bg-gray-800 dark:border-sky-900 transition ${file?.langauge === langauge?.name
                                            ? "bg-sky-600 text-white"
                                            : "hover:bg-sky-600 text-gray-400"
                                            }`}
                                    >
                                        <LogoComponent className="w-6 h-6" />
                                        <span>{langauge?.name}</span>
                                    </li>

                                );
                            })}
                            {filteredLangauges?.length === 0 && (
                                <li className="text-gray-400 text-sm">No templates found</li>
                            )}
                        </ul>
                    </div>

                    <div className="md:w-1/2 p-4 border border-gray-700 rounded-lg mainBackground shadow-md">
                        <label className="block mb-4 text-sm font-medium text-gray-400">Title</label>
                        <input
                            type="text"
                            value={file.name}
                            onChange={(e) => setFile((prev) => ({ ...prev, name: e.target.value }))}
                            placeholder="Enter Title"
                            className="w-full mb-2 bg-transparent placeholder:text-slate-400 text-sm border border-gray-200 dark:border-gray-700 rounded-md p-2 text-white active:border-sky-300 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        />
                        <div className="flex items-center gap-2 mb-4">
                            <input type="checkbox" id="public" className="text-sky-400" />
                            <label htmlFor="public" className="text-sm text-gray-400">
                                Public
                            </label>
                        </div>
                        <button className="button text-white text-sm py-2 px-4 rounded-lg transition shadow-md">
                            Upgrade to make private
                        </button>

                        {/* Progress */}
                        <div className="mt-6">
                            <p className="text-sm text-gray-400 mb-2">This is your last free Repl</p>
                            <div className="h-2 w-full bg-gray-700 rounded-full">
                                <div className="h-2 bg-sky-400 rounded-full w-2/3"></div>
                            </div>
                        </div>

                        <button
                            onClick={createFileHandler}
                            className="w-full mt-6 bg-gradient-to-r from-sky-500 to-sky-700 text-white text-sm py-2 px-4 rounded-lg hover:from-sky-400 hover:to-sky-600 transition shadow-md">
                            + Create Repl
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelecteTemplate;
