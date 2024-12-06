import React, { useState } from "react";
import Header from "./Header";
import Folders from "./Folders";
import CreateFolder from "./CreateFolder";
import CreateFolderModal from "../../Modals/CreateFolderModal";
import { useSelector } from "react-redux"



const Home = () => {
  const [folderName, setFolderName] = useState("");
  const [folderId, setFolderId] = useState("");
  const { home } = useSelector((state) => state);

  return (
    <div className="text-white gap-2 rounded-lg">
      <Header />
      <CreateFolder />
      <Folders
        setFolderName={setFolderName}
        setFolderId={setFolderId}
      />
      {home.isOpenFolderModal &&
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
