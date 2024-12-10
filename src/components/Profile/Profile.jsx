import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <div className="w-full max-w-4xl p-12 mainBackground text-white  rounded-2xl shadow-2xl relative">
                {/* Close Button */}
                <button
                    className="absolute top-6 right-6  hover:text-gray-900 text-2xl font-bold"
                    onClick={() => console.log("Close modal")}
                >
                    ✕
                </button>

                {/* Modal Header */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-extrabold ">
                        User Profile
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Here is the detailed information about the user.
                    </p>
                </div>

                {/* Modal Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">
                            Profile Details
                        </h3>
                        {isOpenProfileModal ? (
                            <div className="space-y-4">
                                <p className="text-gray-600">
                                    <strong className="text-gray-800">Name:</strong>{" "}
                                    John Doe
                                </p>
                                <p className="text-gray-600">
                                    <strong className="text-gray-800">Email:</strong>{" "}
                                    johndoe@example.com
                                </p>
                                <p className="text-gray-600">
                                    <strong className="text-gray-800">Role:</strong>{" "}
                                    Administrator
                                </p>
                            </div>
                        ) : (
                            <p className="text-gray-500">Loading profile...</p>
                        )}
                    </div>

                    {/* Right Section */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">
                            Additional Information
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>
                                <strong className="text-gray-800">Joined:</strong> January
                                1, 2023
                            </li>
                            <li>
                                <strong className="text-gray-800">Last Active:</strong>{" "}
                                Today
                            </li>
                            <li>
                                <strong className="text-gray-800">Status:</strong> Active
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="mt-10 flex justify-end gap-4">
                    <button
                        className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                        onClick={() => console.log("Close modal")}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        onClick={() => console.log("Action")}
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
