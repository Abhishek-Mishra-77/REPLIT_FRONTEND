import React, { useState, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';
import axios from 'axios';

function Compiler() {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [language, setLanguage] = useState('javascript');

    // Predefined templates for different languages
    const templates = {
        javascript: `// JavaScript Template
console.log("Hello, JavaScript!");`,
        python: `# Python Template
print("Hello, Python!")`,
        java: `// Java Template
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
        c: `// C Template
#include <stdio.h>
int main() {
    printf("Hello, C!\\n");
    return 0;
}`,
        cpp: `// C++ Template
#include <iostream>
using namespace std;
int main() {
    cout << "Hello, C++!" << endl;
    return 0;
}`,
        go: `// Go Template
package main
import "fmt"
func main() {
    fmt.Println("Hello, Go!")
}`,
        php: `// PHP Template
<?php
echo "Hello, PHP!";
?>`,
        ruby: `# Ruby Template
puts "Hello, Ruby!"`,
        swift: `// Swift Template
import Foundation
print("Hello, Swift!")`,
        kotlin: `// Kotlin Template
fun main() {
    println("Hello, Kotlin!")
}`
    };

    // Handle language change and load the corresponding template
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        setCode(templates[selectedLanguage]); // Load the template for the selected language
    };

    const handleEditorChange = (value) => {
        setCode(value);
    };

    const runCode = async () => {
        try {
            const lang = language === 'javascript' ? 'js' : language;
            const response = await axios.post('http://localhost:7000/compiler/compile', {
                code,
                language: lang,
            });

            setOutput(response.data.message);
        } catch (error) {
            setOutput(error.response?.data?.error || error.toString());
        }
    };

    const languages = Object.keys(templates);

    useEffect(() => {
        setCode(templates[language]);
    }, [language]);

    return (
        <div className="p-6 font-sans bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Code Compiler</h1>
            <div className="flex flex-col md:flex-row gap-6">
                {/* Editor Section */}
                <div className="flex-1 flex flex-col border border-gray-300 rounded-lg p-4 shadow-lg bg-white">
                    <div className="mb-4">
                        <label htmlFor="language-select" className="mr-2 font-semibold">Select Language:</label>
                        <select
                            id="language-select"
                            value={language}
                            onChange={handleLanguageChange}
                            className="border border-gray-300 rounded px-2 py-1"
                        >
                            {languages.map((lang) => (
                                <option key={lang} value={lang}>{lang.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
                        <Editor
                            height="70vh"
                            language={language}
                            value={code}
                            onChange={handleEditorChange}
                            theme="vs-dark"
                        />
                    </div>
                    <button
                        onClick={runCode}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700"
                    >
                        Run Code
                    </button>
                </div>

                {/* Output Section */}
                <div className="flex-1 border border-gray-300 rounded-lg p-4 shadow-lg bg-white">
                    <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">Output</h2>
                    <div className="border border-gray-300 rounded-lg p-4 text-red-500 bg-gray-100 min-h-[70vh] overflow-y-auto font-mono text-sm">
                        {output || 'No output yet...'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Compiler;
