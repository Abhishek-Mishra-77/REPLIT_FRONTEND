import { GiCrossMark } from "react-icons/gi";

const UserEditModal = ({
    setOpenEditModal,
    selectedUser,
    setSelectedUser,
    userUpdateHandler
}) => {


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
            <div className="w-full max-w-lg p-8 bg-[#1C2333] border border-sky-300 text-white rounded-2xl shadow-2xl  relative">
                <button
                    onClick={() => {
                        setOpenEditModal(false)
                        setSelectedUser(null)
                    }}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                >
                    <GiCrossMark className="text-2xl" />
                </button>


                <div className="space-y-4">
                    <div>
                        <label className="block text-white font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={selectedUser?.name}
                            onChange={(e) => setSelectedUser((prev) => ({ ...prev, name: e.target.value }))}
                            className="w-full mb-2 bg-transparent placeholder:text-slate-400  text-sm border border-gray-200 dark:border-gray-700 rounded-md p-2 text-white active:border-sky-300 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={selectedUser?.email}
                            onChange={(e) => setSelectedUser((prev) => ({ ...prev, email: e.target.value }))}
                            className="w-full mb-2 bg-transparent placeholder:text-slate-400  text-sm border border-gray-200 dark:border-gray-700 rounded-md p-2 text-white active:border-sky-300 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            alue={selectedUser?.password}
                            onChange={(e) => setSelectedUser((prev) => ({ ...prev, password: e.target.value }))}
                            className="w-full mb-2 bg-transparent placeholder:text-slate-400  text-sm border border-gray-200 dark:border-gray-700 rounded-md p-2 text-white active:border-sky-300 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-2">Role</label>
                        <select
                            name="role"
                            value={selectedUser?.role}
                            onChange={(e) => setSelectedUser((prev) => ({ ...prev, role: e.target.value }))}
                            className="w-full mb-2 bg-gray-800 text-white placeholder:text-slate-400 text-sm border border-gray-200 dark:border-gray-700 rounded-md p-2 active:border-sky-300 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        >
                            <option value="" className="bg-gray-800 text-white">Select Role</option>
                            <option value="admin" className="bg-gray-800 text-white">Admin</option>
                            <option value="operator" className="bg-gray-800 text-white">User</option>
                        </select>
                    </div>

                </div>

                <div className="flex justify-end gap-4 mt-6">

                    <button
                        onClick={userUpdateHandler}
                        className="px-4 py-2 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserEditModal;
