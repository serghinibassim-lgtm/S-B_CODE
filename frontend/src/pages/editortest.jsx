import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import ThemeToggle from "../component/ThemeToggle.jsx";
import { useTheme } from "../context/ThemeContext.jsx";


const languageIds = {
  python3: 71,
  javascript: 63,
  cpp: 54,
  java: 62
};

const CodeRunner = () => {
  const [language, setLanguage] = useState("python3");
  const [code, setCode] = useState('print("Hello Judge0 + Tailwind!")');
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

  const runCode = async () => {
    setLoading(true);
    setOutput("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/code/run",
        {
          language: language,
          code: code
        },
        { withCredentials: true }
      );

      const { stdout, stderr } = response.data;

      setOutput(
        (stdout ? "Output:\n" + stdout : "") +
        (stdout && stderr ? "\n" : "") +
        (stderr ? "Erreur:\n" + stderr : "")
      );

    } catch (error) {
      setOutput("Erreur : " + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <ThemeToggle className="fixed top-4 right-4 z-50" />

      <div className="max-w-4xl mx-auto p-4 space-y-4">
        <h1 className="text-2xl font-bold text-center">Mini IDE avec Monaco + Judge0</h1>

        <div className="flex items-center space-x-4">
          <label className="font-medium">Choisir le langage :</label>
          <select
            className="bg-gray-900 border border-gray-700 text-white rounded px-2 py-1"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {Object.keys(languageIds).map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
          <button
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            onClick={runCode}
            disabled={loading}
          >
            {loading ? "Exécution..." : "Exécuter"}
          </button>
        </div>

        <Editor
          height="400px"
          defaultLanguage={language}
          value={code}
          onChange={(value) => setCode(value)}
          theme={theme === "light" ? "light" : "vs-dark"}
          className="border border-gray-800 rounded"
        />

        <div className="bg-black border border-gray-800 text-green-300 p-4 rounded font-mono">
          <h2 className="font-bold mb-2">Résultat :</h2>
          <pre className="whitespace-pre-wrap">{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default CodeRunner;
