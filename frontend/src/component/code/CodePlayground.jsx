import { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { Play, RotateCcw, Terminal, Monitor, Loader2, Sparkles } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";

export default function CodePlayground({
    chapterId,
    language = "javascript",
    starterCode = "",
    expectedOutput = ""
}) {
    const [code, setCode] = useState(starterCode);
    const [output, setOutput] = useState("");
    const [stderr, setStderr] = useState("");
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState(language === "html" || language === "css" ? "preview" : "terminal");
    const { theme } = useTheme();

    const iframeRef = useRef(null);

    // Mettre à jour le code lors du changement de chapitre
    useEffect(() => {
        setCode(starterCode || "");
        setOutput("");
        setStderr("");
        if (language === "html" || language === "css") {
            setActiveTab("preview");
        } else {
            setActiveTab("terminal");
        }
    }, [chapterId, starterCode, language]);

    // Rendu en direct dans l'iframe pour HTML & CSS
    useEffect(() => {
        if (language === "html" || language === "css") {
            const htmlContent = language === "css"
                ? `<!DOCTYPE html><html><head><style>${code}</style></head><body style="font-family: sans-serif; padding: 20px;"><div class="titre">Aperçu du style CSS</div><button class="btn">Bouton de test</button></body></html>`
                : code;

            if (iframeRef.current) {
                iframeRef.current.srcdoc = htmlContent;
            }
        }
    }, [code, language]);

    // Réinitialisation du code
    const handleReset = () => {
        setCode(starterCode);
        setOutput("");
        setStderr("");
    };

    // Exécution du code
    const handleRun = async () => {
        setLoading(true);
        setOutput("");
        setStderr("");

        const lang = language.toLowerCase();

        // 1. Exécution HTML / CSS côté client
        if (lang === "html" || lang === "css") {
            setActiveTab("preview");
            const htmlContent = lang === "css"
                ? `<!DOCTYPE html><html><head><style>${code}</style></head><body style="font-family: sans-serif; padding: 20px;"><div class="titre">Aperçu du style CSS</div><button class="btn">Bouton de test</button></body></html>`
                : code;

            if (iframeRef.current) {
                iframeRef.current.srcdoc = htmlContent;
            }
            setOutput("Rendu mis à jour avec succès dans l'aperçu.");
            setLoading(false);
            return;
        }

        // 2. Exécution JavaScript dans la console du navigateur
        if (lang === "javascript" || lang === "js") {
            setActiveTab("terminal");
            const logs = [];
            const originalLog = console.log;
            const originalError = console.error;

            try {
                console.log = (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
                console.error = (...args) => logs.push("[ERREUR] " + args.join(' '));

                // Exécution dans un Function scope
                const runner = new Function(code);
                runner();

                setOutput(logs.join('\n') || "Code exécuté sans sortie (aucun console.log).");
            } catch (err) {
                setStderr(err.message);
            } finally {
                console.log = originalLog;
                console.error = originalError;
                setLoading(false);
            }
            return;
        }

        // 3. Exécution Python & Java via l'API Backend (/api/code/run)
        setActiveTab("terminal");
        try {
            const response = await axios.post("http://localhost:3000/api/code/run", {
                language: lang,
                code: code
            });

            if (response.data.success) {
                setOutput(response.data.stdout || "");
                setStderr(response.data.stderr || "");
                if (!response.data.stdout && !response.data.stderr) {
                    setOutput("Programme exécuté avec succès (code 0), aucune sortie affichée.");
                }
            } else {
                setStderr(response.data.message || "Erreur d'exécution.");
            }
        } catch (err) {
            setStderr(err.response?.data?.message || err.message || "Erreur de connexion au serveur d'exécution.");
        } finally {
            setLoading(false);
        }
    };

    // Mapping des langages pour Monaco Editor
    const getMonacoLanguage = (l) => {
        const map = {
            html: "html",
            css: "css",
            javascript: "javascript",
            js: "javascript",
            python: "python",
            java: "java"
        };
        return map[l?.toLowerCase()] || "javascript";
    };

    return (
        <div className="flex flex-col h-full bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Barre d'outils supérieure */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5 mr-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    </div>
                    <span className="text-xs font-mono font-semibold uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {getMonacoLanguage(language)}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handleReset}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition"
                        title="Réinitialiser le code de départ"
                    >
                        <RotateCcw size={13} />
                        Réinitialiser
                    </button>

                    <button
                        onClick={handleRun}
                        disabled={loading}
                        className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white rounded-lg shadow-md transition ${
                            loading
                                ? "bg-emerald-600/50 cursor-not-allowed"
                                : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20 active:scale-95"
                        }`}
                    >
                        {loading ? <Loader2 size={14} className="animate-spin" /> : <Play size={14} fill="currentColor" />}
                        {loading ? "Exécution..." : "Exécuter"}
                    </button>
                </div>
            </div>

            {/* Monaco Editor */}
            <div className="h-[380px] w-full border-b border-gray-800">
                <Editor
                    height="100%"
                    language={getMonacoLanguage(language)}
                    value={code}
                    theme={theme === "light" ? "light" : "vs-dark"}
                    onChange={(val) => setCode(val || "")}
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineNumbers: "on",
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        tabSize: 2,
                        wordWrap: "on",
                        padding: { top: 12, bottom: 12 }
                    }}
                />
            </div>

            {/* Zone d'affichage des résultats (Console / Terminal / Iframe) */}
            <div className="flex-1 flex flex-col min-h-[200px] bg-gray-950">
                {/* Onglets d'affichage */}
                <div className="flex items-center justify-between px-4 py-2 bg-gray-900/60 border-b border-gray-800/80">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setActiveTab("terminal")}
                            className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md transition ${
                                activeTab === "terminal"
                                    ? "bg-gray-800 text-white font-semibold"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            <Terminal size={13} />
                            Console / Terminal
                        </button>

                        {(language === "html" || language === "css") && (
                            <button
                                onClick={() => setActiveTab("preview")}
                                className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md transition ${
                                    activeTab === "preview"
                                        ? "bg-gray-800 text-white font-semibold"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                <Monitor size={13} />
                                Aperçu Rendu (Iframe)
                            </button>
                        )}
                    </div>

                    {expectedOutput && (
                        <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                            <Sparkles size={12} className="text-amber-400" />
                            <span>Objectif : {expectedOutput}</span>
                        </div>
                    )}
                </div>

                {/* Contenu de la zone de résultat */}
                <div className="flex-1 overflow-auto p-3 font-mono text-xs">
                    {activeTab === "terminal" ? (
                        <div className="space-y-2">
                            {output && (
                                <div className="text-emerald-400 whitespace-pre-wrap leading-relaxed">
                                    {output}
                                </div>
                            )}
                            {stderr && (
                                <div className="text-red-400 bg-red-950/20 p-2.5 rounded border border-red-500/20 whitespace-pre-wrap leading-relaxed">
                                    {stderr}
                                </div>
                            )}
                            {!output && !stderr && (
                                <span className="text-gray-600 italic">
                                    Cliquez sur "Exécuter" pour compiler et afficher les résultats ici...
                                </span>
                            )}
                        </div>
                    ) : (
                        <div className="w-full h-full min-h-[160px] bg-white rounded-lg overflow-hidden border border-gray-700">
                            <iframe
                                ref={iframeRef}
                                title="Aperçu du rendu HTML/CSS"
                                sandbox="allow-scripts"
                                className="w-full h-full border-0"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
