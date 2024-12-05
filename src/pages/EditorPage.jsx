import { useDispatch, useSelector } from "react-redux";
import { setOutput } from "../store/slices/terminalSlice";
import CodeEditor from "../components/Editor/CodeEditor";
import LanguageSelector from "../components/Editor/LangaugeSelector";
import Terminal from "../components/Terminal/Terminal";

const EditorPage = () => {
  const dispatch = useDispatch();
  const { code, language } = useSelector((state) => state.editor);

  const runCode = async () => {
    const response = await fetch("/api/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, language }),
    });
    const result = await response.json();
    dispatch(setOutput(result.output || "Error"));
  };

  return (
    <div className="editor-page flex flex-col gap-4 p-4">
      <LanguageSelector />
      <CodeEditor />
      <button onClick={runCode} className="btn bg-blue-500 text-white p-2 rounded">
        Run Code
      </button>
      <Terminal />
    </div>
  );
};

export default EditorPage;
