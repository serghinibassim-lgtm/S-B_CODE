import React, { useState } from "react";
import {
    CheckCircle2, XCircle, Award, RotateCcw, ArrowRight,
    HelpCircle, AlertTriangle
} from "lucide-react";
import { getChapterQuiz } from "../../utils/quizHelper.js";

export default function ChapterQuiz({
    chapter,
    onSuccess,
    onNextChapter
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState(null);       // index de l'option choisie pour la question courante
    const [answered, setAnswered] = useState(false);      // true = l'utilisateur vient de répondre
    const [results, setResults] = useState([]);           // tableau de bool par question
    const [finished, setFinished] = useState(false);      // toutes les questions terminées
    const [score, setScore] = useState(0);

    const questions = getChapterQuiz(chapter);
    const q = questions[currentIndex];

    if (!chapter || questions.length === 0) return null;

    // L'utilisateur sélectionne une option
    const handleSelect = (optIndex) => {
        if (answered) return; // verrou pendant l'affichage du feedback
        setSelected(optIndex);
        setAnswered(true);

        const isCorrect = optIndex === q.correctAnswer;
        const newResults = [...results, isCorrect];
        setResults(newResults);

        // Après 1.4 s : passer à la question suivante ou terminer
        setTimeout(() => {
            if (currentIndex + 1 < questions.length) {
                setCurrentIndex((i) => i + 1);
                setSelected(null);
                setAnswered(false);
            } else {
                // Toutes les questions ont été répondues
                const finalScore = newResults.filter(Boolean).length;
                setScore(finalScore);
                setFinished(true);
                if (finalScore === 4) {
                    onSuccess();
                }
            }
        }, 1400);
    };

    const handleRetry = () => {
        setCurrentIndex(0);
        setSelected(null);
        setAnswered(false);
        setResults([]);
        setFinished(false);
        setScore(0);
    };

    // ─── Écran de résultat final ──────────────────────────────────────────────
    if (finished) {
        const passed = score === 4;
        return (
            <div className={`mt-6 rounded-2xl border p-6 ${
                passed
                    ? "bg-emerald-950/30 border-emerald-500/30"
                    : "bg-amber-950/20 border-amber-500/30"
            }`}>
                {/* Titre résultat */}
                <div className="flex items-center gap-3 mb-4">
                    {passed ? (
                        <Award size={28} className="text-emerald-400 shrink-0" />
                    ) : (
                        <AlertTriangle size={26} className="text-amber-400 shrink-0" />
                    )}
                    <div>
                        <h3 className={`font-bold text-sm ${passed ? "text-emerald-200" : "text-amber-200"}`}>
                            {passed
                                ? "🎉 Félicitations ! Score parfait 4 / 4"
                                : `Score : ${score} / 4 — Il faut 4/4 pour valider`}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">
                            {passed
                                ? "Chapitre validé ! La barre de progression a été mise à jour."
                                : "Revoyez le cours et retentez le quiz — toutes les réponses doivent être correctes."}
                        </p>
                    </div>
                </div>

                {/* Récapitulatif des résultats */}
                <div className="flex gap-2 mb-5">
                    {results.map((ok, i) => (
                        <div
                            key={i}
                            title={`Question ${i + 1} : ${ok ? "Correcte" : "Incorrecte"}`}
                            className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold border ${
                                ok
                                    ? "bg-emerald-900/40 border-emerald-500/50 text-emerald-300"
                                    : "bg-red-900/30 border-red-500/40 text-red-300"
                            }`}
                        >
                            {ok ? "✓" : "✗"}
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {!passed && (
                        <button
                            onClick={handleRetry}
                            className="flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-lg transition active:scale-95"
                        >
                            <RotateCcw size={14} />
                            Recommencer le quiz
                        </button>
                    )}
                    {passed && onNextChapter && (
                        <button
                            onClick={onNextChapter}
                            className="flex items-center gap-1.5 px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-lg shadow-emerald-600/20 transition active:scale-95"
                        >
                            Chapitre suivant
                            <ArrowRight size={14} />
                        </button>
                    )}
                </div>
            </div>
        );
    }

    // ─── Question active ──────────────────────────────────────────────────────
    const isCorrect = answered && selected === q.correctAnswer;

    return (
        <div className="mt-6">
            {/* En-tête du quiz */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                        <HelpCircle size={15} className="text-indigo-400" />
                    </div>
                    <span className="text-sm font-semibold text-white">
                        Quiz de validation
                    </span>
                    <span className="text-xs text-gray-500">
                        — {chapter?.titre || chapter?.title}
                    </span>
                </div>

                {/* Progression sous forme de bullets */}
                <div className="flex items-center gap-1.5">
                    {questions.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all ${
                                i < currentIndex
                                    ? results[i]
                                        ? "bg-emerald-500"
                                        : "bg-red-500"
                                    : i === currentIndex
                                    ? "bg-indigo-400 scale-125"
                                    : "bg-gray-700"
                            }`}
                        />
                    ))}
                    <span className="ml-2 text-xs text-gray-400">
                        {currentIndex + 1} / {questions.length}
                    </span>
                </div>
            </div>

            {/* Carte de la question */}
            <div className={`rounded-xl border p-5 transition-all duration-300 ${
                answered
                    ? isCorrect
                        ? "border-emerald-500/40 bg-emerald-950/10"
                        : "border-red-500/40 bg-red-950/10"
                    : "border-gray-800 bg-gray-950"
            }`}>
                {/* Numéro + question */}
                <div className="flex items-start gap-3 mb-4">
                    <span className="w-6 h-6 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {currentIndex + 1}
                    </span>
                    <h4 className="text-sm font-semibold text-white leading-snug">
                        {q.question}
                    </h4>
                </div>

                {/* Extrait de code si présent */}
                {q.codeSnippet && (
                    <pre className="p-3 mb-4 rounded-lg bg-gray-900 border border-gray-800 text-xs font-mono text-emerald-300 overflow-x-auto whitespace-pre-wrap">
                        {q.codeSnippet}
                    </pre>
                )}

                {/* Options A / B / C / D */}
                <div className="grid grid-cols-1 gap-2">
                    {q.options.map((option, optIndex) => {
                        const isSelected    = selected === optIndex;
                        const isThisCorrect = answered && optIndex === q.correctAnswer;
                        const isThisWrong   = answered && isSelected && !isThisCorrect;

                        let style = "bg-gray-900 hover:bg-gray-800/80 border-gray-800 text-gray-300 cursor-pointer";
                        if (isSelected && !answered) {
                            style = "bg-blue-600/20 border-blue-500 text-white cursor-pointer";
                        } else if (isThisCorrect) {
                            style = "bg-emerald-900/30 border-emerald-500 text-emerald-200 cursor-default";
                        } else if (isThisWrong) {
                            style = "bg-red-900/30 border-red-500 text-red-200 cursor-default";
                        } else if (answered) {
                            style = "border-gray-800 text-gray-500 cursor-default opacity-50";
                        }

                        return (
                            <button
                                key={optIndex}
                                type="button"
                                onClick={() => handleSelect(optIndex)}
                                disabled={answered}
                                className={`w-full flex items-center gap-3 p-3 rounded-lg border text-xs text-left transition-all ${style}`}
                            >
                                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold uppercase shrink-0 ${
                                    isThisCorrect
                                        ? "bg-emerald-500 text-white"
                                        : isThisWrong
                                        ? "bg-red-500 text-white"
                                        : "bg-gray-800 text-gray-400"
                                }`}>
                                    {isThisCorrect ? "✓" : isThisWrong ? "✗" : String.fromCharCode(65 + optIndex)}
                                </span>
                                <span className="flex-1 font-mono">{option}</span>
                                {isThisCorrect && <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />}
                                {isThisWrong   && <XCircle      size={14} className="text-red-400 shrink-0" />}
                            </button>
                        );
                    })}
                </div>

                {/* Feedback / explication */}
                {answered && (
                    <div className={`mt-4 flex items-start gap-2 p-3 rounded-lg text-xs ${
                        isCorrect
                            ? "bg-emerald-900/20 border border-emerald-500/20 text-emerald-200"
                            : "bg-red-900/20 border border-red-500/20 text-red-200"
                    }`}>
                        {isCorrect
                            ? <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                            : <XCircle      size={14} className="text-red-400 shrink-0 mt-0.5" />
                        }
                        <div>
                            {isCorrect
                                ? <span className="font-semibold text-emerald-300">Bonne réponse !</span>
                                : (
                                    <>
                                        <span className="font-semibold text-red-300">Incorrect. </span>
                                        {q.explanation && <span className="text-gray-300">{q.explanation}</span>}
                                    </>
                                )
                            }
                            {currentIndex + 1 < questions.length && (
                                <p className="mt-1 text-gray-400 italic">Question suivante dans un instant…</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
