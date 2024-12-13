import { useState } from "react";
import axios from "axios";

function Compiler() {
    const [language, setLanguage] = useState("Python");
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");

    const handleCompile = async () => {
        setOutput("");
        setError("");
        try {
            const response = await axios.post("http://localhost:7000/compiler/compile", { language, code });
            setOutput(response.data.output);
        } catch (err) {
            setError(err.response?.data?.error || "Error connecting to the server.");
        }
    };

    return (
        <div className="text-white">
            <h1>Online Compiler</h1>
            <select
                className="dropdown p-2"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
            >
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="Javascript">JavaScript</option>
                <option value="C">C</option>
                <option value="Cpp">C++</option>
            </select>
            <textarea
                className="w-full mt-4 p-2 bg-gray-900 text-white border rounded"
                placeholder="Write your code here..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <button
                className="mt-2 p-2 bg-blue-600 text-white rounded"
                onClick={handleCompile}
            >
                Compile
            </button>
            <div className="mt-4">
                <h2>Output:</h2>
                <pre className="bg-gray-800 p-2 rounded">{output || error}</pre>
            </div>
        </div>

    );
}

export default Compiler;
