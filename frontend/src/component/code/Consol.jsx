import { useContext, useEffect, useRef, useState } from "react";
import { Js_CodeContext } from "../../context/JsContext.jsx";

export default function JsConsole({ W = "700px", H = "250px" }) {

    const { code, runTrigger } = useContext(Js_CodeContext);
    const iframeRef = useRef(null);
    const [logs, setLogs] = useState([]);

    const buildHtml = () => `
<!DOCTYPE html>
<html>
<body>
<script>

const send = (type, data) => {
    window.parent.postMessage({
        type: "console",
        logType: type,
        data,
        time: new Date().toLocaleTimeString()
    }, "*");
};

console.log = (...args) => send("log", args);
console.error = (...args) => send("error", args);
console.warn = (...args) => send("warn", args);

window.onerror = (msg) => send("error", [msg]);

try {
    ${code}
} catch(e) {
    send("error", [e.message]);
}

</script>
</body>
</html>
`;

    useEffect(() => {

        setLogs([]);

        const blob = new Blob([buildHtml()], { type: "text/html" });
        const url = URL.createObjectURL(blob);

        iframeRef.current.src = url;

        return () => URL.revokeObjectURL(url);

    }, [runTrigger]);

    useEffect(() => {

        const handler = (event) => {
            if (event.data?.type !== "console") return;

            setLogs(prev => [...prev, event.data]);
        };

        window.addEventListener("message", handler);
        return () => window.removeEventListener("message", handler);

    }, []);

    return (
        <div style={{ width: W, height: H }}
             className="bg-black border border-zinc-800 rounded flex flex-col">

            <div className="flex-1 overflow-auto p-2 text-sm text-green-400 font-mono">
                {logs.length === 0 && "No output"}
                {logs.map((log, i) => (
                    <div key={i}>
                        {log.data?.map((d, j) => (
                            <span key={j}>{String(d)} </span>
                        ))}
                    </div>
                ))}
            </div>

            <iframe
                ref={iframeRef}
                sandbox="allow-scripts"
                style={{ display: "none" }}
                title="console"
            />
        </div>
    );
}