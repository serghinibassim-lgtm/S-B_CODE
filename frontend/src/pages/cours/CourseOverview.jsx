import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../component/sid_nav_footer/Navbar.jsx";
import Footer from "../../component/sid_nav_footer/Footer.jsx";
import { BookOpen, Code2, ArrowRight, CheckCircle2, History, Layers, Terminal, Sparkles } from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";

export default function CourseOverview() {
    const { langSlug } = useParams();
    const navigate = useNavigate();
    const { isChapterCompleted } = useAuth();

    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const currentSlug = (langSlug || "html").toLowerCase();

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                setLoading(true);
                setError("");
                const res = await axios.get(`http://localhost:3000/api/courses/${currentSlug}`);
                if (res.data.success && res.data.data) {
                    setCourse(res.data.data);
                } else {
                    setError("Cours introuvable.");
                }
            } catch (err) {
                if (err.response?.status === 401) {
                    navigate('/login', {
                        state: { from: { pathname: `/courses/${currentSlug}` }, message: 'Veuillez vous connecter pour accéder à ce cours.' },
                        replace: true
                    });
                    return;
                }
                setError(err.response?.data?.message || "Erreur de chargement du cours.");
            } finally {
                setLoading(false);
            }
        };

        fetchCourseData();
    }, [currentSlug, navigate]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-950 text-white flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center pt-16">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500" />
                </div>
            </div>
        );
    }

    if (error || !course) {
        return (
            <div className="min-h-screen bg-gray-950 text-white flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center pt-16 px-4">
                    <h2 className="text-2xl font-bold text-red-400 mb-2">Erreur</h2>
                    <p className="text-gray-400 mb-6">{error || "Impossible de charger ce cours."}</p>
                    <Link to="/" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition">
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        );
    }

    const firstChapter = course.chapitres?.[0];
    const completedCount = course.chapitres?.filter(c => isChapterCompleted(c._id)).length || 0;
    const totalChapters = course.chapitres?.length || 0;
    const progressPercent = totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;

    return (
        <div className="min-h-screen bg-gray-950 text-white flex flex-col">
            <Navbar />

            <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
                
                {/* Hero Banner du Cours */}
                <div className="relative rounded-3xl bg-gray-900 border border-gray-800 p-8 sm:p-12 overflow-hidden shadow-2xl">
                    <div className="relative z-10 max-w-3xl space-y-5">
                        <div className="flex items-center gap-3">
                            <span
                                className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider on-color"
                                style={{ backgroundColor: course.couleur || "#3b82f6" }}
                            >
                                {course.badge || "Programme Officiel"}
                            </span>
                            <span className="text-xs text-gray-400">
                                {totalChapters} chapitres pratiques
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                            Apprendre {course.titre || course.title}
                        </h1>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            {course.description || "Maîtrisez la syntaxe, les bonnes pratiques et réalisez des projets concrets avec notre environnement interactif."}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            {firstChapter ? (
                                <button
                                    onClick={() => navigate(`/courses/${currentSlug}/chapters/${firstChapter._id}`)}
                                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-white shadow-lg shadow-blue-600/30 flex items-center gap-2 group transition active:scale-95"
                                >
                                    <span>Commencer la pratique</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            ) : null}

                            <div className="flex items-center gap-3 px-4 py-3 bg-gray-800/80 rounded-xl border border-gray-700/60">
                                <span className="text-xs font-medium text-gray-300">Progression :</span>
                                <div className="w-28 bg-gray-700 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                                        style={{ width: `${progressPercent}%` }}
                                    />
                                </div>
                                <span className="text-xs font-mono font-bold text-emerald-400">{progressPercent}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blocs de Présentation (Définition, Paradigmes, Historique, Cas d'usage) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-2">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                            <BookOpen size={20} />
                        </div>
                        <h3 className="font-bold text-base text-white">Définition</h3>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            {course.introduction?.definition || "Langage clé pour le développement logiciel moderne."}
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-2">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                            <Layers size={20} />
                        </div>
                        <h3 className="font-bold text-base text-white">Paradigmes</h3>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            {course.introduction?.paradigmes || "Multi-paradigmes, structuré, réactif."}
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-2">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                            <History size={20} />
                        </div>
                        <h3 className="font-bold text-base text-white">Historique</h3>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            {course.introduction?.historique || "Standardisé et enrichi en continu par une communauté mondiale active."}
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-2">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                            <Terminal size={20} />
                        </div>
                        <h3 className="font-bold text-base text-white">Cas d'usage</h3>
                        <ul className="text-xs text-gray-400 space-y-1">
                            {(course.introduction?.casUsage || ["Applications Web", "APIs Backend", "Automatisation"]).map((u, i) => (
                                <li key={i} className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                    <span>{u}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sommaire des Chapitres */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                        <div>
                            <h2 className="text-2xl font-bold text-white tracking-tight">Programme du cours</h2>
                            <p className="text-sm text-gray-400">Accédez directement à chaque leçon interactive</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.chapitres?.map((chap, idx) => {
                            const done = isChapterCompleted(chap._id);

                            return (
                                <Link
                                    key={chap._id}
                                    to={`/courses/${currentSlug}/chapters/${chap._id}`}
                                    className="p-5 rounded-2xl bg-gray-900/50 hover:bg-gray-900 border border-gray-800 hover:border-gray-700 transition flex items-center justify-between group shadow-sm hover:shadow-lg"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center font-mono font-bold text-sm text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <span className="text-[11px] uppercase font-semibold text-gray-500 tracking-wider">
                                                {chap.section || "Leçon"}
                                            </span>
                                            <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition">
                                                {chap.titre || chap.title}
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {done && (
                                            <span className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                                                <CheckCircle2 size={13} />
                                                Complété
                                            </span>
                                        )}
                                        <ArrowRight size={18} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
