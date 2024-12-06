import Home from "../components/Home/Home";
import TopBar from "../components/TopBar/TopBar";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <div className="p-12">
        <Home />
      </div>
    </div>
  );
};

export default HomePage;
