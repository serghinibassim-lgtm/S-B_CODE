import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:3000';

// Configuration globale pour que les cookies HttpOnly soient toujours transmis
axios.defaults.withCredentials = true;

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Vérification de la session active au montage via le cookie HttpOnly
    useEffect(() => {
        const verifySession = async () => {
            try {
                const res = await axios.get(`${API_BASE}/api/auth/me`);
                if (res.data.success && res.data.user) {
                    setUser(res.data.user);
                } else {
                    setUser(null);
                }
            } catch (err) {
                // 401 attendu si l'utilisateur n'est pas connecté
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        verifySession();
    }, []);

    // Intercepteur global pour intercepter les 401
    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 401) {
                    setUser(null);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.response.eject(interceptor);
        };
    }, []);

    const login = async (email, password) => {
        const res = await axios.post(`${API_BASE}/api/auth/login`, { email, password });
        if (res.data.success && res.data.user) {
            setUser(res.data.user);
            return res.data;
        }
        throw new Error(res.data.message || 'Identifiants invalides');
    };

    const signup = async ({ username, fullname, email, password }) => {
        const res = await axios.post(`${API_BASE}/api/auth/register`, {
            username,
            fullname,
            email,
            password
        });
        if (res.data.success && res.data.user) {
            setUser(res.data.user);
            return res.data;
        }
        throw new Error(res.data.message || 'Erreur lors de l\'inscription');
    };

    const logout = async () => {
        try {
            await axios.post(`${API_BASE}/api/auth/logout`, {});
        } catch {
            // Ignorer l'erreur réseau éventuelle
        }
        setUser(null);
    };

    const markChapterCompleted = async (chapterId) => {
        if (!user) return;
        try {
            const res = await axios.post(`${API_BASE}/api/auth/progress/${chapterId}`);
            if (res.data.success && res.data.progression) {
                setUser((prev) => prev ? { ...prev, progression: res.data.progression } : null);
            }
        } catch (err) {
            console.error('Erreur lors de la sauvegarde de la progression :', err.message);
        }
    };

    const isChapterCompleted = (chapterId) => {
        if (!user || !user.progression) return false;
        return user.progression.some(
            (p) => (p.chapitreId?._id || p.chapitreId || p) === chapterId
        );
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                loading,
                login,
                signup,
                logout,
                markChapterCompleted,
                isChapterCompleted
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
    }
    return context;
};
