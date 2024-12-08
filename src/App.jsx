import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth/Auth";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

const App = () => {
  const { isLogin } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#1C2333]">
        {isLogin ? (
          <ProtectedRoutes />
        ) : (
          <Routes>
            <Route path="*" element={<Auth />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
