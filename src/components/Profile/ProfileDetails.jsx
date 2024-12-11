import React from "react";
import { GiCrossMark } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Profile = ({
    isOpenProfileModal,
    openProfileModal,
    auth,
    dispatch,
    users,
    setConfirmation,
    setSelectedId
}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
            <div className="w-full max-w-4xl p-8 bg-[#1C2333] border border-sky-300 text-white rounded-2xl shadow-2xl relative">
                <button
                    className="absolute top-6 right-6 hover:text-red-500 text-2xl font-bold"
                    onClick={() => {
                        dispatch(openProfileModal())
                        setConfirmation(false)
                        setSelectedId("")
                    }}
                >
                    <GiCrossMark />
                </button>

                <div className="text-left mb-6">
                    <h2 className="text-xl font-bold">User Profile</h2>
                    <p className="text-gray-300 mt-2">View and manage user information.</p>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-lg shadow-inner">
                        {isOpenProfileModal ? (
                            <>
                                <div className="space-y-4">
                                    <p className="flex  justify-between items-center">
                                        <div>
                                            <strong className="text-gray-300">Name:</strong>{" "}
                                            {auth?.userDetails?.name || "N/A"}
                                        </div>
                                        <button
                                            className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition"
                                            onClick={() => console.log(`Edit user fdafdf`)}
                                        >
                                            <FaEdit />
                                        </button>
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
                            </>
                        ) : (
                            <p className="text-gray-400">Loading profile...</p>
                        )}
                    </div>

                    {auth?.userDetails?.role === "admin" && (
                        <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-lg shadow-inner">
                            {/* User List */}
                            <div className="mt-3">
                                <h3 className="text-lg font-bold mb-4">User Details</h3>
                                <div
                                    className="max-h-40 overflow-y-auto bg-gray-900 p-4 rounded-lg space-y-4"
                                >
                                    {users?.map((user, index) => (
                                        <div
                                            key={user._id || index}
                                            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md"
                                        >
                                            <div className="text-gray-300 ">
                                                <p><strong>Name:</strong> {user.name || "N/A"}</p>
                                                <p><strong>Email:</strong> {user.email || "N/A"}</p>
                                                <p><strong>Role:</strong> {user.role || "N/A"}</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <button
                                                    className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition"
                                                    onClick={() => console.log(`Edit user ${user.name}`)}
                                                >
                                                    <FaEdit />
                                                </button>
                                                <button
                                                    className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition"
                                                    onClick={() => {
                                                        setSelectedId(user._id);
                                                        setConfirmation(true);
                                                    }}
                                                >
                                                    <MdDelete />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
