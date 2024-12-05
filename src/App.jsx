import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import "./App.css";
import EditorPage from "./pages/EditorPage";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <Router>
      <div className="app flex flex-col min-h-screen">
        <SignedIn>
          <Routes>
            <Route path="/" element={<Sidebar />}>
              <Route index element={<HomePage />} />
              <Route path="editor" element={<EditorPage />} />
            </Route>
          </Routes>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </div>
    </Router>
  );
};

export default App;
