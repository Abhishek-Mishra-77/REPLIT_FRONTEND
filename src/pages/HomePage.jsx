import Home from "../components/Home/Home";
import TopBar from "../components/TopBar/TopBar";
import { useSelector } from "react-redux"

const HomePage = () => {
  const { folders } = useSelector((state) => state.home);

  return (
    <div>
      <TopBar Repls={folders} />
      <div className="p-12 text-white">
        <Home />
      </div>
    </div>
  );
};

export default HomePage;
