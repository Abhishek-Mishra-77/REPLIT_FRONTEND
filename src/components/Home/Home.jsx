import React, { useEffect, useState } from "react";
import Folders from "./Folders";
import CreateFolder from "./CreateFolder";
import CreateFolderModal from "../../Modals/CreateFolderModal";
import { useSelector, useDispatch } from "react-redux"
import { onGetFolderByIdHandler, onCreateFolderHandler, onRemoveFolderHandler } from "../../Api/folder";
import Header from "./header";
import { openOrCloseFolderModal } from "../../store/slices/homeSlice";
import { toast } from "react-toastify";
import ConfirmationModal from "../../Modals/ConfirmationModal"

const Home = () => {
  const [folders, setFolders] = useState([]);
  const [folderName, setFolderName] = useState("");
  const [folderId, setFolderId] = useState("");
  const { isOpenFolderModal } = useSelector((state) => state.home);
  const [confirmation, setConfirmation] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await onGetFolderByIdHandler();
        if (response?.folders) {
          setFolders(response.folders);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [isOpenFolderModal]);


  const addFolder = async (name) => {

    if (!name) {
      toast.warning("Please enter folder name")
      return;
    }

    try {
      const response = await onCreateFolderHandler(name);
      if (response) {
        dispatch(openOrCloseFolderModal())
        setFolderName("")
      }
      toast.success(response?.folder?.message)

    } catch (error) {
      console.log(error);
    }
  }


  const updateFolder = async () => {
    try {

    }
    catch (error) {

    }
  }

  const removeFolder = async () => {
    try {
      const response = await onRemoveFolderHandler(folderId);
      if (response) {
        const filteredFolders = folders.filter((folder) => folder._id !== folderId);
        setFolders(filteredFolders)
        setConfirmation(false)
        setFolderId("")
      }
      toast.success(response?.folder?.message)
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className="text-white gap-2 rounded-lg">
      <Header />
      <CreateFolder />
      <Folders
        setConfirmation={setConfirmation}
        setFolderName={setFolderName}
        setFolderId={setFolderId}
        folders={folders}
      />

      {confirmation &&
        <ConfirmationModal
          confirmation={confirmation}
          onSubmitHandler={removeFolder}
          setConfirmation={setConfirmation}
          setSelectedId={setFolderId}
          heading="Confirm Folder Removal"
          message="Are you sure you want to remove this folder? This action cannot be undone and all the associated files will be deleted."
          type="error"
        />
      }

      {isOpenFolderModal &&
        <CreateFolderModal
          folderName={folderName}
          setFolderName={setFolderName}
          folderId={folderId}
          setFolderId={setFolderId}
          addFolder={addFolder}
        />}
    </div>
  );
};

export default Home;
