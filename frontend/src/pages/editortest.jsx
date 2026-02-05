import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";


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

  const runCode = async () => {
    if (!code.trim()) {
      setOutput("Veuillez écrire du code !");
      return;
    }

    setLoading(true);
    setOutput("");

    try {
      const response = await axios.post(
        "https://emkc.org/api/v2/piston/execute",
        {
        "language": "python",
        "version": "3.10.0",
        "files": [
    {
      "name": "main.py",
      "content": code
    }
  ]},
        {
          headers: { "Content-Type": "application/json" }
        }
      );
console.log(response.data.run.stdout);
      const result=response.data;
if (result.run) {
  const stdout = result.run.stdout ? "Output:\n" + result.run.stdout : "";
  const stderr = result.run.stderr ? "Erreur:\n" + result.run.stderr : "";
  setOutput(stdout + (stdout && stderr ? "\n" : "") + stderr || "Aucun output");
} else {
  setOutput("Erreur : run est vide ou undefined");
}


    } catch (error) {
      setOutput("Erreur API : " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Mini IDE avec Monaco + Judge0</h1>

      <div className="flex items-center space-x-4">
        <label className="font-medium">Choisir le langage :</label>
        <select
          className="border rounded px-2 py-1"
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
        theme="vs-dark"
        className="border rounded"
      />

      <div className="bg-gray-900 text-green-300 p-4 rounded font-mono ">
        <h2 className="font-bold mb-2">Résultat :</h2>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeRunner;
