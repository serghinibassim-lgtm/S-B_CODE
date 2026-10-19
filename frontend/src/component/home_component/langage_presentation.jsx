import React from "react";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import python from "../../assets/python.svg";
import codeIcon from "../../assets/code-svgrepo-com.svg";
import LangageCard from "./Longade_Cart.jsx";

export default function Langage_presentation() {
    const languages = [
        {
            slug: "html",
            icon: html,
            title: "HTML",
            description: "Structure des pages web et balisage sémantique moderne.",
        },
        {
            slug: "css",
            icon: css,
            title: "CSS",
            description: "Mise en page réactive, Flexbox, Grilles et animations.",
        },
        {
            slug: "javascript",
            icon: js,
            title: "JavaScript",
            description: "Interactivité, manipulation du DOM et programmation asynchrone.",
        },
        {
            slug: "python",
            icon: python,
            title: "Python",
            description: "Syntaxe claire pour les scripts, le backend et l'intelligence artificielle.",
        },
        {
            slug: "java",
            icon: codeIcon,
            title: "Java",
            description: "Programmation orientée objet robuste pour serveurs et systèmes d'entreprise.",
        },
    ];

    return (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Catalogue des formations
                </span>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Langages que vous apprendrez
                </h2>
                <p className="text-gray-400 text-sm">
                    Cliquez sur un langage pour découvrir sa présentation, ses chapitres et commencer à coder en direct.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {languages.map((lang, index) => (
                    <LangageCard
                        key={index}
                        slug={lang.slug}
                        icon={lang.icon}
                        title={lang.title}
                        description={lang.description}
                    />
                ))}
            </div>
        </section>
    );
}
