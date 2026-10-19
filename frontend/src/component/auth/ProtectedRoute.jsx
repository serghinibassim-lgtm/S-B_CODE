import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-white">
                <Loader2 size={36} className="animate-spin text-blue-500 mb-3" />
                <p className="text-sm text-gray-400 font-medium">Vérification de votre session sécurisée...</p>
            </div>
        );
    }

    if (!user) {
        // Redirige vers /login en mémorisant la page demandée pour y revenir après connexion
        return (
            <Navigate
                to="/login"
                state={{
                    from: location,
                    message: "Accès restreint : vous devez être connecté pour accéder à ce cours."
                }}
                replace
            />
        );
    }

    return children;
}
