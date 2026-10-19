import React from "react";
import { BookOpen, Code, Lightbulb, AlertTriangle, Info, Check, Copy } from "lucide-react";
import { useState } from "react";

export default function LessonContent({ chapter, onApplyCode }) {
    const [copiedIndex, setCopiedIndex] = useState(null);

    if (!chapter) {
        return (
            <div className="p-8 text-center text-gray-500 text-sm">
                Sélectionnez un chapitre dans la barre latérale pour commencer la leçon.
            </div>
        );
    }

    const handleCopy = (text, idx) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(idx);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const blocks = chapter.contentBlocks && chapter.contentBlocks.length > 0
        ? chapter.contentBlocks
        : [
            {
                type: 'text',
                title: 'Explication',
                content: chapter.explication || 'Découvrez ce concept fondamental à travers les exemples ci-dessous.'
            },
            ...(chapter.exemple?.code ? [{
                type: 'code_example',
                title: chapter.exemple.titre || 'Exemple de code',
                content: chapter.exemple.code,
                codeLanguage: chapter.language
            }] : []),
            ...(chapter.tryYourSelf?.consigne ? [{
                type: 'tip',
                title: 'Consigne pratique',
                content: chapter.tryYourSelf.consigne
            }] : [])
        ];

    return (
        <div className="space-y-6">
            {/* Titre & métadonnées du chapitre */}
            <div className="border-b border-gray-800 pb-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                    <span>{chapter.section || "Chapitre"}</span>
                    <span>•</span>
                    <span>Ordre #{chapter.ordre || chapter.order || 1}</span>
                </div>
                <h1 className="text-2xl font-bold text-white tracking-tight">
                    {chapter.titre || chapter.title}
                </h1>
            </div>

            {/* Liste ordonnée des blocs structurés */}
            <div className="space-y-4">
                {blocks.map((block, idx) => {
                    switch (block.type) {
                        case 'code_example':
                            return (
                                <div key={idx} className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden shadow-lg">
                                    <div className="flex items-center justify-between px-4 py-2.5 bg-gray-900/90 border-b border-gray-800">
                                        <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                                            <Code size={15} className="text-blue-400" />
                                            <span>{block.title || "Exemple de code"}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {onApplyCode && (
                                                <button
                                                    onClick={() => onApplyCode(block.content)}
                                                    className="text-xs px-2.5 py-1 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 rounded border border-blue-500/30 transition"
                                                    title="Copier vers l'éditeur Monaco"
                                                >
                                                    Tester dans l'éditeur
                                                </button>
                                            )}
                                            <button
                                                onClick={() => handleCopy(block.content, idx)}
                                                className="text-gray-400 hover:text-white p-1 rounded transition"
                                                title="Copier le code"
                                            >
                                                {copiedIndex === idx ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                                            </button>
                                        </div>
                                    </div>
                                    <pre className="p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed whitespace-pre-wrap">
                                        {block.content}
                                    </pre>
                                </div>
                            );

                        case 'tip':
                            return (
                                <div key={idx} className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 flex gap-3 text-emerald-200">
                                    <Lightbulb size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                                    <div>
                                        {block.title && <h4 className="font-semibold text-xs uppercase tracking-wider text-emerald-300 mb-1">{block.title}</h4>}
                                        <p className="text-sm leading-relaxed text-emerald-100/90">{block.content}</p>
                                    </div>
                                </div>
                            );

                        case 'warning':
                            return (
                                <div key={idx} className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 flex gap-3 text-amber-200">
                                    <AlertTriangle size={20} className="text-amber-400 shrink-0 mt-0.5" />
                                    <div>
                                        {block.title && <h4 className="font-semibold text-xs uppercase tracking-wider text-amber-300 mb-1">{block.title}</h4>}
                                        <p className="text-sm leading-relaxed text-amber-100/90">{block.content}</p>
                                    </div>
                                </div>
                            );

                        case 'note':
                            return (
                                <div key={idx} className="bg-blue-950/20 border border-blue-500/30 rounded-xl p-4 flex gap-3 text-blue-200">
                                    <Info size={20} className="text-blue-400 shrink-0 mt-0.5" />
                                    <div>
                                        {block.title && <h4 className="font-semibold text-xs uppercase tracking-wider text-blue-300 mb-1">{block.title}</h4>}
                                        <p className="text-sm leading-relaxed text-blue-100/90">{block.content}</p>
                                    </div>
                                </div>
                            );

                        case 'text':
                        default:
                            return (
                                <div key={idx} className="bg-gray-900/40 border border-gray-800/80 rounded-xl p-5 space-y-2">
                                    {block.title && (
                                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-200">
                                            <BookOpen size={16} className="text-indigo-400" />
                                            <span>{block.title}</span>
                                        </div>
                                    )}
                                    <p className="text-sm leading-relaxed text-gray-300 whitespace-pre-line">
                                        {block.content}
                                    </p>
                                </div>
                            );
                    }
                })}
            </div>
        </div>
    );
}
