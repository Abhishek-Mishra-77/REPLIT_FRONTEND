import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EditorPage from "./pages/EditorPage";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar/Sidebar";
import FilePage from "./pages/FilePage";
import Auth from "./components/Auth/Auth";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#1C2333]">
        {token ? <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={<HomePage />} />
            <Route path="file/:id" element={<FilePage />} />
            <Route path="editor" element={<EditorPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes> : <Auth />}
      </div>
    </Router>
  );
};

export default App;
