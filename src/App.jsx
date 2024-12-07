import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EditorPage from "./pages/EditorPage";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar/Sidebar";
import FilePage from "./pages/FilePage";
import Auth from "./components/Auth/Auth";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { useSelector } from "react-redux";
import { serverUrl } from "./services/common";

const App = () => {
  const { isLogin } = useSelector((state) => state.auth);
  console.log(isLogin);



  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#1C2333]">
        <Routes>
          {isLogin ? (
            <>
              <Route path="/" element={<Sidebar />}>
                <Route index element={<HomePage />} />
                <Route path="file/:id" element={<FilePage />} />
                <Route path="editor" element={<EditorPage />} />
              </Route>
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<PageNotFound />} />
            </>
          ) : (
            <>
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<PageNotFound />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
