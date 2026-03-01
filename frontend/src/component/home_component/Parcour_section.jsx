
import React from "react";


export default function Parcour_section(){
    return(
        <section className="px-6 py-16 ">
            <h2 className="text-2xl font-bold text-center mb-10 ">
                Parcours d'apprentissage
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                    {title: "Débutant", desc: "Bases de HTML et CSS"},
                    {title: "Intermédiaire", desc: "JavaScript et DOM"},
                    {title: "Avancé", desc: "Python et projets réels"},
                ].map((item) => (
                    <div
                        key={item.title}
                        className="border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition"
                    >
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400 mb-4">{item.desc}</p>
                        <button className="text-blue-400 hover:underline">
                            Commencer →
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}