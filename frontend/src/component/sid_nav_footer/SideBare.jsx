import { useState, useMemo } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { CheckCircle2, Circle, ChevronDown, ChevronRight, BookOpen } from "lucide-react";

export default function Sidebar({ course, chapters = [], activeChapterId }) {
    const { langSlug } = useParams();
    const navigate = useNavigate();
    const { isChapterCompleted } = useAuth();
    const [openSections, setOpenSections] = useState({});

    const currentSlug = langSlug || course?.slug || "html";

    // Regrouper les chapitres par section
    const groupedSections = useMemo(() => {
        const groups = {};
        chapters.forEach((chap) => {
            const sec = chap.section || "Général";
            if (!groups[sec]) groups[sec] = [];
            groups[sec].push(chap);
        });
        return groups;
    }, [chapters]);

    const toggleSection = (sectionName) => {
        setOpenSections((prev) => ({
            ...prev,
            [sectionName]: !prev[sectionName]
        }));
    };

    // Calcul de la progression
    const totalChapters = chapters.length;
    const completedCount = chapters.filter((c) => isChapterCompleted(c._id)).length;
    const progressPercent = totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;

    return (
        <aside className="w-72 bg-gray-950/90 border-r border-gray-800/80 flex flex-col h-[calc(100vh-4rem)] sticky top-16 select-none">
            {/* Header du Cours */}
            <div className="p-4 border-b border-gray-800">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                        <BookOpen size={14} className="text-blue-400" />
                        {course?.titre || course?.title || currentSlug.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono font-bold text-blue-400">
                        {progressPercent}%
                    </span>
                </div>

                {/* Barre de progression */}
                <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div
                        className="bg-blue-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
                <div className="text-[11px] text-gray-500 mt-1.5 flex justify-between">
                    <span>{completedCount} / {totalChapters} terminés</span>
                    <NavLink
                        to={`/courses/${currentSlug}`}
                        className="text-blue-400 hover:underline"
                    >
                        Vue d'ensemble
                    </NavLink>
                </div>
            </div>

            {/* Liste des sections et chapitres */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
                {Object.keys(groupedSections).length === 0 ? (
                    <div className="text-center py-8 text-xs text-gray-500">
                        Chargement des chapitres...
                    </div>
                ) : (
                    Object.entries(groupedSections).map(([sectionName, sectionChapters]) => {
                        const isOpen = openSections[sectionName] !== false; // Ouvert par défaut

                        return (
                            <div key={sectionName} className="space-y-1">
                                <button
                                    onClick={() => toggleSection(sectionName)}
                                    className="w-full flex items-center justify-between px-2.5 py-1.5 text-xs font-semibold text-gray-400 hover:text-white rounded-md transition"
                                >
                                    <span className="uppercase tracking-wider">{sectionName}</span>
                                    {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                                </button>

                                {isOpen && (
                                    <div className="space-y-0.5 pl-1">
                                        {sectionChapters.map((chap) => {
                                            const isActive = activeChapterId === chap._id;
                                            const isDone = isChapterCompleted(chap._id);

                                            return (
                                                <button
                                                    key={chap._id}
                                                    onClick={() => navigate(`/courses/${currentSlug}/chapters/${chap._id}`)}
                                                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition text-left ${
                                                        isActive
                                                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                                                            : "text-gray-300 hover:bg-gray-900 hover:text-white"
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-2 truncate pr-2">
                                                        {isDone ? (
                                                            <CheckCircle2 size={14} className={isActive ? "text-white" : "text-emerald-400"} />
                                                        ) : (
                                                            <Circle size={14} className={isActive ? "text-blue-200" : "text-gray-600"} />
                                                        )}
                                                        <span className="truncate">{chap.titre || chap.title}</span>
                                                    </div>

                                                    <span className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded ${
                                                        isActive ? "bg-blue-700/60 text-white" : "bg-gray-800 text-gray-400"
                                                    }`}>
                                                        {chap.language}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}
            </div>
        </aside>
    );
}
