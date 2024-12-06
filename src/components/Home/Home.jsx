import React, { useState } from "react";
import Folders from "./Folders";
import CreateFolder from "./CreateFolder";
import CreateFolderModal from "../../Modals/CreateFolderModal";
import { useSelector } from "react-redux"
import Header from "./header";

const Home = () => {
  const [folderName, setFolderName] = useState("");
  const [folderId, setFolderId] = useState("");
  const { isOpenFolderModal } = useSelector((state) => state.home);

  return (
    <div className="text-white gap-2 rounded-lg">
      <Header />
      <CreateFolder />
      <Folders
        setFolderName={setFolderName}
        setFolderId={setFolderId}
      />
      {isOpenFolderModal &&
        <CreateFolderModal
          folderName={folderName}
          setFolderName={setFolderName}
          folderId={folderId}
          setFolderId={setFolderId}
        />}
    </div>
  );
};

export default Home;
