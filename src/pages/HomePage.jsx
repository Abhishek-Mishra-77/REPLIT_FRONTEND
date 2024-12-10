import Home from "../components/Home/Home";
import TopBar from "../components/TopBar/TopBar";
import { useSelector } from "react-redux";
import Profile from "../components/Profile/Profile";

const HomePage = () => {
  const { home, profile } = useSelector((state) => state);

  return (
    <div>
      <TopBar Repls={home.folders} />
      <div className="p-12 text-white">
        <Home />
       {profile.isOpenProfileModal && <Profile />}
      </div>
    </div>
  );
};

export default HomePage;
