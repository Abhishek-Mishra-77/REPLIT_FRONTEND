// import MonacoEditor from "@monaco-editor/react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCode } from "../../store/slices/editorSlice";

// const CodeEditor = () => {
//   const dispatch = useDispatch();
//   const { code, language } = useSelector((state) => state.editor);

//   return (
//     <div className="editor-container h-full">
//       <MonacoEditor
//         height="100%"
//         language={language}
//         value={code}
//         onChange={(value) => dispatch(setCode(value))}
//         theme="vs-dark"
//       />
//     </div>
//   );
// };

// export default CodeEditor;


import { useState } from "react";

const CodeEditor = () => {
  const [selectedFrontend, setSelectedFrontend] = useState("html");
  const [selectedJS, setSelectedJS] = useState("javascript");
  const [selectedGeneral, setSelectedGeneral] = useState("java");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleRunCode = async () => {
    const language =
      selectedFrontend !== "none"
        ? selectedFrontend
        : selectedJS !== "none"
          ? selectedJS
          : selectedGeneral;

    const response = await fetch("/api/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, language }),
    });
    const result = await response.json();
    setOutput(result.output || "Error");
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Code Execution Platform</h1>

      {/* Language Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Frontend Selector */}
        <div>
          <label className="block text-lg font-medium mb-2">Frontend</label>
          <select
            className="w-full p-2 border rounded"
            value={selectedFrontend}
            onChange={(e) => setSelectedFrontend(e.target.value)}
          >
            <option value="none">None</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>

        {/* JavaScript Selector */}
        <div>
          <label className="block text-lg font-medium mb-2">JavaScript</label>
          <select
            className="w-full p-2 border rounded"
            value={selectedJS}
            onChange={(e) => setSelectedJS(e.target.value)}
          >
            <option value="none">None</option>
            <option value="javascript">JavaScript</option>
            <option value="node">Node.js</option>
            <option value="react">React</option>
          </select>
        </div>

        {/* General Selector */}
        <div>
          <label className="block text-lg font-medium mb-2">General</label>
          <select
            className="w-full p-2 border rounded"
            value={selectedGeneral}
            onChange={(e) => setSelectedGeneral(e.target.value)}
          >
            <option value="none">None</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>
        </div>
      </div>

      {/* Code Editor */}
      <textarea
        className="w-full h-64 p-4 border rounded mb-4"
        placeholder="Write your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      {/* Run Button */}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleRunCode}
      >
        Run Code
      </button>

      {/* Output Display */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Output</h2>
        <div className="p-4 bg-gray-200 border rounded">{output}</div>
      </div>
    </div>
  );
};

export default CodeEditor;

