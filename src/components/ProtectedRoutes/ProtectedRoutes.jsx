import { Routes, Route, useNavigate } from "react-router-dom";
import EditorPage from "../../pages/EditorPage";
import HomePage from "../../pages/HomePage";
import Sidebar from "../../components/Sidebar/Sidebar";
import FilePage from "../../pages/FilePage";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { logout } from "../../store/slices/authSlice";
import { onTokenVerificationHandler } from "../../Api/auth";

const ProtectedRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLogin) {
      navigate("/auth");
    } else {
      (async () => {
        const isTokenValid = await onTokenVerificationHandler();
        if (!isTokenValid) {
          dispatch(logout());
          navigate("/auth");
        }
      })();
    }
  }, [isLogin, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<HomePage />} />
        <Route path="file/:id" element={<FilePage />} />
        <Route path="editor" element={<EditorPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default ProtectedRoutes;
