import {useState, useEffect, useRef} from "react";
import Editor from "@monaco-editor/react";
import Navbar from "../component/sid_nav_footer/Navbar.jsx";

import Sidebar from '../component/sid_nav_footer/SideBare.jsx'

export default function Htmlcssjs() {
    const [html, setHtml] = useState("<h1 class='title'>Hello World</h1>");
    const [css, setCss] = useState(".title { color: red; }");
    const [js, setJs] = useState("console.log('JS works')");
    const [src, setSrc] = useState(null);
    const [logs, setLogs] = useState([]);
    const iframeRef = useRef();

    const editorOptions = {
        minimap: {enabled: false},
        fontSize: 14,
        tabSize: 2,
        wordWrap: "on",
        automaticLayout: true,
    };

    const buildHtml = () => `
<!DOCTYPE html>
<html>
<head>
  <style>
    ${css}
  </style>
</head>
<body>
  ${html}
  <script>
    // Override console.log
    const logs = [];
    const oldLog = console.log;
    console.log = function(...args){
      logs.push(args.join(' '));
      window.parent.postMessage({ type: 'console', data: args.join(' ') }, window.location.origin);
      oldLog.apply(console, args);
    }

    window.onerror = function(message, source, lineno, colno, error){
      window.parent.postMessage({ type: 'error', data: message }, window.location.origin);
    }

    try {
      ${js}
    } catch (e) {
      window.parent.postMessage({ type: 'error', data: e.message }, window.location.origin);
    }
  </script>
</body>
</html>
`;

    const runCode = () => {
        setLogs([]);
        if (src) {
            URL.revokeObjectURL(src);
        }
        const blob = new Blob([buildHtml()], {type: "text/html"});
        const url = URL.createObjectURL(blob);
        setSrc(url);
    };

    useEffect(() => {
        const handleMessage = (event) => {
            if (event.origin !== window.location.origin) return;
            if (!event.data) return;
            if (event.data.type === "console") {
                setLogs((prev) => [...prev, {type: "log", message: event.data.data}]);
            } else if (event.data.type === "error") {
                setLogs((prev) => [...prev, {type: "error", message: event.data.data}]);
            }
        };
        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    useEffect(() => {
        return () => {
            if (src) URL.revokeObjectURL(src);
        };
    }, [src]);

    return (
     <div>
         <div className="flex ">

             <div className="flex-1">
                 <div className="  min-h-screen bg-gray-900 text-white p-4 space-y-4">

                     {/* RESULT */}
                     <div className="border border-gray-700 rounded-lg overflow-hidden">
                         <div className="bg-gray-800 px-3 py-2 flex justify-between items-center">
                             <span className="font-semibold">Preview</span>
                             <button
                                 onClick={runCode}
                                 className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded text-sm"
                             >
                                 Run ▶
                             </button>
                         </div>

                         <iframe
                             ref={iframeRef}
                             title="result"
                             src={src}
                             sandbox="allow-scripts"
                             allow="clipboard-write"
                             className="w-full h-64 bg-white"
                         />
                     </div>

                     {/* CONSOLE */}
                     <div className="border border-gray-700 rounded-lg p-2 h-40 overflow-auto bg-black text-green-400">
                         {logs.map((l, i) => (
                             <div key={i} className={l.type === "error" ? "text-red-500" : ""}>
                                 {l.type === "log" ? "LOG: " : "ERROR: "} {l.message}
                             </div>
                         ))}
                     </div>

                     {/* EDITORS */}
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                         {/* HTML */}
                         <div className="border border-gray-700 rounded-lg overflow-hidden">
                             <div className="bg-gray-800 px-3 py-1 text-sm">HTML</div>
                             <Editor
                                 height="300px"
                                 language="html"
                                 theme="vs-dark"
                                 value={html}
                                 onChange={(v) => setHtml(v || "")}
                                 options={editorOptions}
                             />
                         </div>

                         {/* CSS */}
                         <div className="border border-gray-700 rounded-lg overflow-hidden">
                             <div className="bg-gray-800 px-3 py-1 text-sm">CSS</div>
                             <Editor
                                 height="300px"
                                 language="css"
                                 theme="vs-dark"
                                 value={css}
                                 onChange={(v) => setCss(v || "")}
                                 options={editorOptions}
                             />
                         </div>

                         {/* JS */}
                         <div className="border border-gray-700 rounded-lg overflow-hidden">
                             <div className="bg-gray-800 px-3 py-1 text-sm">JavaScript</div>
                             <Editor
                                 height="300px"
                                 language="javascript"
                                 theme="vs-dark"
                                 value={js}
                                 onChange={(v) => setJs(v || "")}
                                 options={editorOptions}
                             />
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    );
}
