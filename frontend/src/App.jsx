import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './component/auth/ProtectedRoute.jsx';

import Home from './pages/home.jsx';
import Login from './pages/auth/Login.jsx';
import SignUp from './pages/auth/sinUp.jsx';
import CourseOverview from './pages/cours/CourseOverview.jsx';
import ChapterView from './pages/cours/ChapterView.jsx';
import CodeRunner from './pages/editortest.jsx';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Accueil & Catalogue public */}
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Home />} />

                    {/* Authentification */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/register" element={<SignUp />} />

                    {/* COURS & CHAPITRES : ACCÈS STRICTEMENT RÉSERVÉ AUX UTILISATEURS AUTHENTIFIÉS */}
                    <Route
                        path="/courses/:langSlug"
                        element={
                            <ProtectedRoute>
                                <CourseOverview />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/courses/:langSlug/chapters"
                        element={
                            <ProtectedRoute>
                                <ChapterView />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/courses/:langSlug/chapters/:chapterId"
                        element={
                            <ProtectedRoute>
                                <ChapterView />
                            </ProtectedRoute>
                        }
                    />

                    {/* Playground libre / Test (protégé) */}
                    <Route
                        path="/playground"
                        element={
                            <ProtectedRoute>
                                <CodeRunner />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/py"
                        element={
                            <ProtectedRoute>
                                <CodeRunner />
                            </ProtectedRoute>
                        }
                    />

                    {/* Rétrocompatibilité avec les anciennes URLs */}
                    <Route path="/Html_cours/*" element={<Navigate to="/courses/html" replace />} />
                    <Route path="/Css_cours" element={<Navigate to="/courses/css" replace />} />
                    <Route path="/Js_cours" element={<Navigate to="/courses/javascript" replace />} />
                    <Route path="/Python_cours" element={<Navigate to="/courses/python" replace />} />

                    {/* Redirection 404 par défaut */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
