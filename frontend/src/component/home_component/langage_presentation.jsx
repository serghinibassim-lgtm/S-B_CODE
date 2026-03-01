import React from "react";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import python from "../../assets/python.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import LangageCard from "./Longade_Cart.jsx";

export default function Langage_presentation() {
  const languages = [
    {
      icon: html,
      title: "HTML",
      description: "Structure des pages web et contenu textuel",
    },
    {
      icon: css,
      title: "CSS",
      description: "Styliser et mettre en page les éléments HTML",
    },
    {
      icon:js,
      title: "JavaScript",
      description: "Ajouter de l/’interactivité aux sites web",
    },
    {
      icon: python,
      title: "Python",
      description: "Langage polyvalent pour scripts et applications",
    },

  ];

  return (
      <section className="py-16 md:mx-8 overflow-hidden">
        <h2 className="text-2xl font-semibold text-center mb-10 text-white">
          Langages que vous apprendrez
        </h2>

        <div className="relative w-full overflow-hidden py-4">
          <div className="flex animate-scroll hover:[animate-scroll:paused] gap-6 w-max">

            {[...languages, ...languages].map((lang, index) => (
                <LangageCard
                    key={index}
                    icon={lang.icon}
                    title={lang.title}
                    description={lang.description}
                />
            ))}

          </div>
        </div>
      </section>

  );
}
