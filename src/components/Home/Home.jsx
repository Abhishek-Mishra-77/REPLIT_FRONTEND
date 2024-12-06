import React from "react";
import Header from "./Header";
import Folders from "./Folders";
import CreateFolder from "./CreateFolder";
import CreateFolderModal from "../../Modals/CreateFolderModal";
import { useSelector } from "react-redux"


const Home = () => {
  const { home } = useSelector((state) => state);

  return (
    <div className="text-white gap-2 rounded-lg">
      <Header />
      <CreateFolder />
      <Folders />
      {home.isOpenFolderModal && <CreateFolderModal />}
    </div>
  );
};

export default Home;
