import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { Code2, ChevronDown, User, LogOut, BookOpen, Menu, X } from "lucide-react";
import axios from "axios";
import ThemeToggle from "../ThemeToggle.jsx";

export default function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [openMobile, setOpenMobile] = useState(false);
    const [courses, setCourses] = useState([
        { titre: "HTML", slug: "html", couleur: "#e34c26" },
        { titre: "CSS", slug: "css", couleur: "#264de4" },
        { titre: "JavaScript", slug: "javascript", couleur: "#f7df1e" },
        { titre: "Python", slug: "python", couleur: "#3776ab" },
        { titre: "Java", slug: "java", couleur: "#f89820" }
    ]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/courses");
                if (res.data.success && res.data.data?.length > 0) {
                    setCourses(res.data.data);
                }
            } catch {
                // Conserver la liste de secours
            }
        };
        fetchCourses();
    }, []);

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md text-white border-b border-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    
                    {/* Logo & Brand */}
                    <Link to="/" className="flex items-center gap-2.5 group">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition">
                            <Code2 size={22} />
                        </div>
                        <div className="font-extrabold text-xl tracking-tight">
                            <span className="text-white">S-B</span>
                            <span className="text-blue-500">_CODE</span>
                        </div>
                    </Link>

                    {/* Navigation Desktop */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition">
                            Accueil
                        </Link>

                        {/* Dropdown Cours */}
                        <div className="relative group">
                            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-white transition py-2">
                                <BookOpen size={16} className="text-blue-400" />
                                <span>Cours & Langages</span>
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                            </button>

                            <div className="absolute left-0 top-full w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="rounded-xl bg-gray-900 shadow-2xl border border-gray-800 p-2 space-y-1">
                                    {courses.map((course) => (
                                        <Link
                                            key={course.slug}
                                            to={`/courses/${course.slug}`}
                                            className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-200 hover:bg-gray-800/80 hover:text-white transition"
                                        >
                                            <span className="font-medium">{course.titre || course.title}</span>
                                            <span
                                                className="w-2.5 h-2.5 rounded-full"
                                                style={{ backgroundColor: course.couleur || "#3b82f6" }}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link to="/playground" className="text-sm font-medium text-gray-300 hover:text-white transition">
                            Pratique Libre
                        </Link>
                    </div>

                    {/* Espace Utilisateur Desktop */}
                    <div className="hidden md:flex items-center gap-4">
                        <ThemeToggle />
                        {user ? (
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800">
                                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold uppercase">
                                        {user.username?.charAt(0) || "U"}
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs font-medium text-white leading-none">
                                            {user.username || user.fullname}
                                        </p>
                                        <span className="text-[10px] text-gray-400 capitalize">
                                            {user.role || "Étudiant"}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleLogout}
                                    className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition"
                                    title="Se déconnecter"
                                >
                                    <LogOut size={18} />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link
                                    to="/login"
                                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition"
                                >
                                    Connexion
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md shadow-blue-600/20 transition"
                                >
                                    S'inscrire
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Boutons Mobile */}
                    <div className="md:hidden flex items-center gap-1">
                        <ThemeToggle />
                        <button
                            onClick={() => setOpenMobile(!openMobile)}
                            className="p-2 text-gray-400 hover:text-white focus:outline-none"
                        >
                            {openMobile ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            {openMobile && (
                <div className="md:hidden bg-gray-950 border-b border-gray-800 px-4 pt-2 pb-6 space-y-3">
                    <Link
                        to="/"
                        onClick={() => setOpenMobile(false)}
                        className="block py-2 text-sm font-medium text-gray-300 hover:text-white"
                    >
                        Accueil
                    </Link>

                    <div className="py-2 border-t border-gray-800">
                        <span className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                            Langages disponibles
                        </span>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                            {courses.map((course) => (
                                <Link
                                    key={course.slug}
                                    to={`/courses/${course.slug}`}
                                    onClick={() => setOpenMobile(false)}
                                    className="px-3 py-2 rounded-lg bg-gray-900 text-sm text-gray-200"
                                >
                                    {course.titre || course.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="pt-2 border-t border-gray-800">
                        {user ? (
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-300">
                                    Connecté en tant que <strong className="text-white">{user.username}</strong>
                                </span>
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setOpenMobile(false);
                                    }}
                                    className="px-3 py-1 bg-red-600/20 text-red-400 rounded text-xs"
                                >
                                    Déconnexion
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                <Link
                                    to="/login"
                                    onClick={() => setOpenMobile(false)}
                                    className="w-full text-center py-2 bg-gray-900 rounded-lg text-sm"
                                >
                                    Connexion
                                </Link>
                                <Link
                                    to="/signup"
                                    onClick={() => setOpenMobile(false)}
                                    className="w-full text-center py-2 bg-blue-600 rounded-lg text-sm text-white"
                                >
                                    S'inscrire
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
