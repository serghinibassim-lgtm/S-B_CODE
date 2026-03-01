import {useState, useContext, useEffect} from "react";
import Editor from "@monaco-editor/react";
import {

    FiPlay,

} from "react-icons/fi";

import {Js_CodeContext} from "../../context/JsContext.jsx";
import {Dev_CodeContext} from "../../context/HtmlContext.jsx";


export default function Dev_Editor({
                                       width = "700px",
                                       height = "500px",

                                   }) {

    const {code, setCode, runCode} = useContext(Dev_CodeContext);

    const [htmlcode, sethtmlcode] = useState(true);
    const [csscode, setcsscode] = useState(false);
    const [jscode, setjscode] = useState(false)

    const [html, setHtml] = useState("<h1 class='title'>Hello World</h1>");
    const [css, setCss] = useState(".title { color: red; }");
    const [js, setJs] = useState("console.log('JS works')");
    const [lang, setlang] = useState("html")


    useEffect(() => {

        setCode ( `
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
${js}
</script>
</body>

</html>
        `);
        runCode();
    }, [html, css, js])

    return (
        <div
            className="flex flex-col rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900"
            style={{width, height}}
        >


            <div className="flex items-center gap-2 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
                <button onClick={
                    () => {
                        setlang("html");
                        sethtmlcode(true);
                        setcsscode(false);
                        setjscode(false);
                    }
                }
                        className={"ml-auto flex items-center bg-gray-400 px-1 active:bg-emerald-400 rounded-sm"}
                >
                    Html
                </button>

                <button onClick={
                    () => {
                        setlang('css');
                        setcsscode(false);
                        sethtmlcode(false);
                        setcsscode(true)
                    }
                } className={"ml-auto flex items-center bg-gray-400 px-1 active:bg-emerald-400 rounded-sm"}>
                    Css
                </button>
                <button onClick={
                    () => {
                        setlang('javascript');
                        setcsscode(false);
                        sethtmlcode(false);
                        setjscode(true);
                    }
                } className={"ml-auto flex items-center bg-gray-400 px-1 active:bg-emerald-400 rounded-sm"}>
                    Js
                </button>


                <button
                    onClick={runCode}
                    className="ml-auto flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm transition"
                >
                    <FiPlay size={16}/>
                    Run
                </button>

            </div>


            <div className="flex-1">
                {

                    htmlcode && <Editor
                        height={height}
                        width={width}
                        defaultLanguage={lang}
                        value={html}
                        theme='vs-dark'
                        onChange={(value) => setHtml(value)}
                        options={{
                            smoothScrolling: true,
                            cursorBlinking: "smooth",
                            insertSpaces: true,
                            minimap: {enabled: false},
                            fontSize: 14,
                            tabSize: 2,
                            wordWrap: "on",
                            automaticLayout: true,
                        }}
                    />

                }
                {
                    csscode && <Editor
                        height={height}
                        width={width}
                        defaultLanguage={lang}
                        value={css}
                        theme='vs-dark'
                        onChange={(value) => setCss(value)}
                        options={{
                            smoothScrolling: true,
                            cursorBlinking: "smooth",
                            insertSpaces: true,
                            minimap: {enabled: false},
                            fontSize: 14,
                            tabSize: 2,
                            wordWrap: "on",
                            automaticLayout: true,
                        }}
                    />
                }
                {
                    jscode && <Editor
                        height={height}
                        width={width}
                        defaultLanguage={lang}
                        value={js}
                        theme='vs-dark'
                        onChange={(value) => setJs(value)}
                        options={{
                            smoothScrolling: true,
                            cursorBlinking: "smooth",
                            insertSpaces: true,
                            minimap: {enabled: false},
                            fontSize: 14,
                            tabSize: 2,
                            wordWrap: "on",
                            automaticLayout: true,
                        }}
                    />
                }

            </div>

        </div>
    );
}