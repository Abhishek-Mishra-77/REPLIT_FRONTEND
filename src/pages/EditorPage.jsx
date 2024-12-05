import { useDispatch, useSelector } from "react-redux";
import { setOutput } from "../store/slices/terminalSlice";
import CodeEditor from "../components/Editor/CodeEditor";
import LanguageSelector from "../components/Editor/LangaugeSelector";
import Terminal from "../components/Terminal/Terminal";
import TopBar from "../components/TopBar/TopBar";

const EditorPage = () => {
  return (
    <div className="">
       <TopBar/>
    </div>
  );
};

export default EditorPage;
