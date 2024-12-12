import { useDispatch } from "react-redux"
import { GiCrossMark } from "react-icons/gi";
import { CiFolderOn } from "react-icons/ci";
import { openOrCloseFolderModal } from '../store/slices/homeSlice';


const CreateFolderModal = ({ folderName, setFolderName, folderId, addFolder,
    setFolderId }) => {
    const dispatch = useDispatch();

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-start justify-center z-50">
            <div className="w-full bg-[#1C2333] border border-sky-300 max-w-md mt-16 rounded-lg shadow-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-semibold text-white">Create Folder</h1>
                    <button
                        onClick={() => {
                            dispatch(openOrCloseFolderModal())
                            setFolderId("")
                            setFolderName("")
                        }}
                        className="text-white hover:text-red-600 text-lg transition"
                    >
                        <GiCrossMark />
                    </button>
                </div>
                <div className="mb-4">
                    <p className="text-sm text-white mb-2">Title</p>
                    <input
                        className="w-full mb-2 bg-transparent placeholder:text-slate-400  text-sm border border-gray-200 dark:border-gray-700 rounded-md p-2 text-white active:border-sky-300 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Name your folder"
                        value={folderName}
                        onChange={(e) => setFolderName(e.target.value)}
                    />
                </div>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={() => {
                            dispatch(openOrCloseFolderModal())
                            setFolderId("")
                            setFolderName("")
                        }}
                        className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-600 hover:text-white transition"
                    >
                        Cancel
                    </button>
                    {!folderId ? <button
                        onClick={() => {
                            addFolder(folderName)
                        }}
                        className="px-2 py-2 flex text-sm gap-2 font-medium text-white  button transition"
                    >
                        <CiFolderOn className="text-xl" />
                        <span> Create Folder</span>
                    </button> : <button
                        onClick={() => {
                            dispatch(openOrCloseFolderModal())
                        }}
                        className="px-2 py-2 flex text-sm gap-2 font-medium text-white  button transition"
                    >
                        <CiFolderOn className="text-xl" /> <span>Rename folder</span>
                    </button>}
                </div>
            </div>
        </div>

    )
}

export default CreateFolderModal