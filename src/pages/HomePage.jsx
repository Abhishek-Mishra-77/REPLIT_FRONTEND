import Home from "../components/Home/Home";
import TopBar from "../components/TopBar/TopBar";
import { useSelector } from "react-redux";
import Profile from "../components/Profile/Profile";

const HomePage = () => {
  const { folders } = useSelector((state) => state.home);
  const { isOpenProfileModal } = useSelector((state) => state.profile);

  return (
    <div>
      <TopBar Repls={folders} />
      <div className="p-12 text-white">
        <Home />
        {isOpenProfileModal && <Profile isOpenProfileModal={isOpenProfileModal} />}
      </div>
    </div>
  );
};

export default HomePage;
