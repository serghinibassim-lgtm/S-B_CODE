import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

export default function ThemeToggle({ className = "" }) {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={toggleTheme}
            title={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
            aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
            className={`p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition ${className}`}
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}
