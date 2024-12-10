import React from "react";
import { GiCrossMark } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Profile = ({ isOpenProfileModal, openProfileModal, auth, dispatch }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
            <div className="w-full max-w-4xl p-12 bg-[#1C2333] border border-sky-300  cursor-pointer transition-colors duration-300 text-white rounded-2xl shadow-2xl relative">
                <button
                    className="absolute top-6 right-6 hover:text-red-500 text-2xl font-bold"
                    onClick={() => dispatch(openProfileModal())}
                >
                    <GiCrossMark />
                </button>
                <div className="text-center mb-8">
                    <p className="text-gray-300 mt-2">
                        View and manage user information.
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800  p-6 rounded-lg shadow-inner">
                        {isOpenProfileModal ? (
                            <>
                                <div className="space-y-4">
                                    <p>
                                        <strong className="text-gray-300">Name:</strong>{" "}
                                        {auth?.userDetails?.name || "N/A"}
                                    </p>
                                    <p>
                                        <strong className="text-gray-300">Email:</strong>{" "}
                                        {auth?.userDetails?.email || "N/A"}
                                    </p>
                                    <p>
                                        <strong className="text-gray-300">Role:</strong>{" "}
                                        {auth?.userDetails?.role || "N/A"}
                                    </p>
                                </div>
                                <div className=" flex justify-end gap-4">
                                    <button
                                        className="px-4  py-2 button text-white rounded-lg transition"
                                        onClick={() => console.log("Edit User")}
                                    >
                                        <FaEdit className="text-2xl" />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <p className="text-gray-400">Loading profile...</p>
                        )}
                    </div>

                    {auth?.userDetails?.role === "admin" && (
                        <div className="bg-gradient-to-br from-gray-700 to-gray-800  p-6 rounded-lg shadow-inner">
                            <div className="space-y-4">
                                <p>
                                    <strong className="text-gray-300">Total Users:</strong>{" "}
                                    {auth?.userDetails?.totalUsers || "N/A"}
                                </p>
                                <p>
                                    <strong className="text-gray-300">Total Files:</strong>{" "}
                                    {auth?.userDetails?.totalFiles || "N/A"}
                                </p>
                            </div>
                        </div>
                    )}
                </div>


            </div>
        </div>
    );
};

export default Profile;
