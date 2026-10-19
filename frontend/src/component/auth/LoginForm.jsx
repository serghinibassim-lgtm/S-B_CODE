import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { EyeIcon, EyeOff, Loader2, ShieldAlert } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Destination de retour si redirection depuis un cours protégé
    const destination = location.state?.from?.pathname || "/";
    const redirectNotice = location.state?.message;

    const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setErrorEmail("");
        setErrorPassword("");

        if (!email || !password) {
            setError("Tous les champs sont obligatoires.");
            return;
        }
        if (!validateEmail(email)) {
            setErrorEmail("Format d'email invalide.");
            return;
        }

        try {
            setLoading(true);
            await login(email, password);
            navigate(destination, { replace: true });
        } catch (err) {
            if (err.response?.data?.errors) {
                const errors = err.response.data.errors;
                setErrorEmail(errors.email || "");
                setErrorPassword(errors.password || "");
                if (!errors.email && !errors.password) {
                    setError(err.response.data.message || "Identifiants invalides");
                }
            } else {
                setError(err.response?.data?.message || err.message || "Erreur lors de la connexion");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center p-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-gray-900/90 border border-gray-800 p-8 rounded-2xl shadow-2xl backdrop-blur-md"
            >
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-white tracking-wide">
                        Connexion
                    </h2>
                    <p className="text-sm text-gray-400 mt-1">
                        Accédez aux cours et aux éditeurs interactifs
                    </p>
                </div>

                {/* Message d'avertissement si redirection depuis un cours protégé */}
                {redirectNotice && (
                    <div className="bg-amber-500/10 border border-amber-500/30 text-amber-300 p-3 rounded-xl mb-5 text-xs flex items-center gap-2.5">
                        <ShieldAlert size={18} className="shrink-0 text-amber-400" />
                        <span>{redirectNotice}</span>
                    </div>
                )}

                {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-xl mb-4 text-sm">
                        {error}
                    </div>
                )}

                <div className="mb-4">
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Email ou Nom d'utilisateur
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                            <FaEnvelope />
                        </span>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setError("")}
                            placeholder="vous@exemple.com"
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
                            required
                        />
                    </div>
                    {errorEmail && (
                        <span className="text-xs text-red-400 mt-1 block">{errorEmail}</span>
                    )}
                </div>

                <div className="mb-6">
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Mot de passe
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                            <FaLock />
                        </span>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setError("")}
                            placeholder="••••••••"
                            className="w-full pl-10 pr-12 py-2.5 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2.5 text-gray-400 hover:text-white transition"
                        >
                            {showPassword ? <EyeOff size={18} /> : <EyeIcon size={18} />}
                        </button>
                    </div>
                    {errorPassword && (
                        <span className="text-xs text-red-400 mt-1 block">{errorPassword}</span>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2.5 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition duration-200 ${
                        loading
                            ? "bg-blue-600/50 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 active:scale-95"
                    }`}
                >
                    {loading && <Loader2 size={18} className="animate-spin" />}
                    {loading ? "Connexion en cours..." : "Se connecter"}
                </button>

                <p className="text-center text-sm mt-6 text-gray-400">
                    Pas encore de compte ?{" "}
                    <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4">
                        Créer un compte
                    </Link>
                </p>
            </form>
        </div>
    );
}
