import React, { useState, useEffect } from "react";
import Home from "../components/Home/Home";
import TopBar from "../components/TopBar/TopBar";
import { useSelector } from "react-redux";
import Profile from "../components/Profile/Profile";
import { onGetFolderByIdHandler } from "../Api/folder";

const HomePage = () => {
  const [folders, setFolders] = useState([]);
  const [searchFolder, setSearchFolder] = useState("");
  const { isOpenProfileModal } = useSelector((state) => state.profile);

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
  }, []);

  const filteredFolders = folders?.filter((folder) =>
    folder.name.toLowerCase().includes(searchFolder.toLowerCase())
  );

  return (
    <div>
      <TopBar
        Repls={folders}
        filderedData={filteredFolders}
        searchFolder={searchFolder}
        setSearchFolder={setSearchFolder}
      />
      <div className="p-12 text-white">
        <Home folders={filteredFolders} setFolders={setFolders} />
        {isOpenProfileModal && <Profile isOpenProfileModal={isOpenProfileModal} />}
      </div>
    </div>
  );
};

export default HomePage;
