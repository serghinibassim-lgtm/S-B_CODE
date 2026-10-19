import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../component/sid_nav_footer/Navbar.jsx";
import Sidebar from "../../component/sid_nav_footer/SideBare.jsx";
import LessonContent from "../../component/cours_chapitre/LessonContent.jsx";
import CodePlayground from "../../component/code/CodePlayground.jsx";
import ChapterQuiz from "../../component/quiz/ChapterQuiz.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";

export default function ChapterView() {
    const { langSlug, chapterId } = useParams();
    const navigate = useNavigate();
    const { markChapterCompleted } = useAuth();

    const [course, setCourse] = useState(null);
    const [chapters, setChapters] = useState([]);
    const [activeChapter, setActiveChapter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editorCodeOverride, setEditorCodeOverride] = useState(null);

    const currentSlug = (langSlug || "html").toLowerCase();

    // 1. Charger les données du cours et la liste des chapitres
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/courses/${currentSlug}`);
                if (res.data.success && res.data.data) {
                    setCourse(res.data.data);
                    const list = res.data.data.chapitres || [];
                    setChapters(list);

                    // Si aucun chapterId n'est fourni dans l'URL, aller au premier chapitre
                    if (!chapterId && list.length > 0) {
                        navigate(`/courses/${currentSlug}/chapters/${list[0]._id}`, { replace: true });
                    }
                }
            } catch (err) {
                if (err.response?.status === 401) {
                    navigate('/login', {
                        state: { from: { pathname: `/courses/${currentSlug}/chapters/${chapterId || ''}` }, message: 'Veuillez vous connecter pour accéder à ce chapitre.' },
                        replace: true
                    });
                    return;
                }
                console.error("Erreur de chargement du cours :", err.message);
            }
        };

        fetchCourse();
    }, [currentSlug, chapterId, navigate]);

    // 2. Charger le contenu spécifique du chapitre sélectionné
    useEffect(() => {
        if (!chapterId) return;

        const fetchChapter = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:3000/api/chapters/${chapterId}`);
                if (res.data.success && res.data.data) {
                    setActiveChapter(res.data.data);
                    setEditorCodeOverride(null);
                }
            } catch (err) {
                if (err.response?.status === 401) {
                    navigate('/login', {
                        state: { from: { pathname: `/courses/${currentSlug}/chapters/${chapterId}` }, message: 'Veuillez vous connecter pour accéder à ce chapitre.' },
                        replace: true
                    });
                    return;
                }
                console.error("Erreur de chargement du chapitre :", err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchChapter();
    }, [chapterId, currentSlug, navigate]);

    // Navigation précédent / suivant
    const currentIndex = chapters.findIndex((c) => c._id === chapterId);
    const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
    const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

    return (
        <div className="min-h-screen bg-gray-950 text-white flex flex-col">
            <Navbar />

            <div className="flex flex-1 pt-16">
                {/* Barre latérale gauche avec progression et chapitres */}
                <Sidebar
                    course={course}
                    chapters={chapters}
                    activeChapterId={chapterId}
                />

                {/* Contenu principal : Théorie à gauche, Monaco Editor à droite */}
                <main className="flex-1 p-6 overflow-y-auto max-w-[1600px] mx-auto w-full">
                    {/* Fil d'Ariane & Navigation */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <button
                                onClick={() => navigate(`/courses/${currentSlug}`)}
                                className="hover:text-white transition"
                            >
                                {course?.titre || currentSlug.toUpperCase()}
                            </button>
                            <ChevronRight size={14} />
                            <span className="text-gray-500">{activeChapter?.section || "Chapitre"}</span>
                            <ChevronRight size={14} />
                            <span className="text-blue-400 font-medium">{activeChapter?.titre || "Leçon"}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            {prevChapter && (
                                <button
                                    onClick={() => navigate(`/courses/${currentSlug}/chapters/${prevChapter._id}`)}
                                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-xs text-gray-300 hover:text-white transition"
                                >
                                    <ArrowLeft size={13} />
                                    <span>Précédent</span>
                                </button>
                            )}
                            {nextChapter && (
                                <button
                                    onClick={() => navigate(`/courses/${currentSlug}/chapters/${nextChapter._id}`)}
                                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs text-white font-medium shadow-md shadow-blue-600/20 transition"
                                >
                                    <span>Suivant</span>
                                    <ArrowRight size={13} />
                                </button>
                            )}
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            {/* Colonne de gauche : Blocs structurés de la leçon */}
                            <div className="lg:col-span-5 space-y-6">
                                <LessonContent
                                    chapter={activeChapter}
                                    onApplyCode={(codeSnippet) => setEditorCodeOverride(codeSnippet)}
                                />
                            </div>

                            {/* Colonne de droite : Monaco Editor + Console / Iframe */}
                            <div className="lg:col-span-7 sticky top-24">
                                <CodePlayground
                                    chapterId={activeChapter?._id}
                                    language={activeChapter?.language || currentSlug}
                                    starterCode={editorCodeOverride || activeChapter?.starterCode || activeChapter?.exemple?.code || ""}
                                    expectedOutput={activeChapter?.expectedOutput || ""}
                                />
                            </div>
                        </div>
                    )}

                    {/* Quiz de validation : affiché en bas de page par défaut, une seule question à la fois */}
                    {!loading && activeChapter && (
                        <div className="mt-10 max-w-3xl mx-auto">
                            <ChapterQuiz
                                key={activeChapter._id}
                                chapter={activeChapter}
                                onSuccess={async () => {
                                    if (activeChapter?._id) {
                                        await markChapterCompleted(activeChapter._id);
                                    }
                                }}
                                onNextChapter={
                                    nextChapter
                                        ? () => navigate(`/courses/${currentSlug}/chapters/${nextChapter._id}`)
                                        : null
                                }
                            />
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
