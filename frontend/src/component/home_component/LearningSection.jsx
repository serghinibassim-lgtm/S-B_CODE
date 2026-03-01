import { Code2, Palette, Zap, Terminal } from "lucide-react";

export default function LearningSection() {
    const technologies = [
        {
            title: "HTML",
            icon: <Code2 size={28} />,
            description:
                "Apprenez à créer la structure complète d’un site web avec les balises essentielles, formulaires et organisation professionnelle.",
        },
        {
            title: "CSS",
            icon: <Palette size={28} />,
            description:
                "Maîtrisez le design moderne avec Flexbox, Grid et Responsive Design pour créer des interfaces élégantes.",
        },
        {
            title: "JavaScript",
            icon: <Zap size={28} />,
            description:
                "Ajoutez de l’interactivité à vos sites grâce à la logique, DOM, événements et projets pratiques.",
        },
        {
            title: "Python",
            icon: <Terminal size={28} />,
            description:
                "Développez votre logique de programmation et créez des applications simples et puissantes.",
        },
    ];

    const levels = [
        {
            title: "Débutant",
            color: "bg-green-500",
            description:
                "Comprendre les bases, apprendre la syntaxe et réaliser des mini projets guidés.",
        },
        {
            title: "Intermédiaire",
            color: "bg-yellow-500",
            description:
                "Créer des projets pratiques, améliorer la logique et devenir autonome.",
        },
        {
            title: "Avancé",
            color: "bg-red-500",
            description:
                "Réaliser des projets complets et atteindre un niveau professionnel.",
        },
    ];

    return (
        <section className="py-20 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        Parcours d’Apprentissage Structuré
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Un programme complet pour apprendre le développement web et la
                        programmation étape par étape.
                    </p>
                </div>
                <div className="grid md:grid-cols-4 gap-8 mb-20">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg"
                        >
                            <div className="mb-4 text-indigo-400">{tech.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                            <p className="text-gray-400 text-sm">{tech.description}</p>
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {levels.map((level, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-8 rounded-2xl text-center shadow-lg hover:scale-105 transition duration-300"
                        >
                            <div
                                className={`w-4 h-4 mx-auto mb-4 rounded-full ${level.color}`}
                            ></div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Niveau {level.title}
                            </h3>
                            <p className="text-gray-400">{level.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
