import 'dotenv/config';
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import modelCours from '../../mongoos/schemas/model_Cours.js';
import modelChapitre from '../../mongoos/schemas/model_Chapitre.js';

import { htmlChapters } from './data/htmlChapters.js';
import { cssChapters } from './data/cssChapters.js';
import { jsChapters } from './data/jsChapters.js';
import { pythonChapters } from './data/pythonChapters.js';
import { javaChapters } from './data/javaChapters.js';

// Métadonnées complètes des 5 cours
const coursData = [
    {
        titre: 'HTML',
        slug: 'html',
        description: "Le langage standard pour structurer et créer des pages web modernes.",
        introduction: {
            definition: "HTML (HyperText Markup Language) est l'épine dorsale du Web. Il définit la structure, la hiérarchie et le sens du contenu web à travers des éléments balisés sémantiques.",
            paradigmes: "Déclaratif / Balisage sémantique et hiérarchique",
            historique: "Créé par Tim Berners-Lee au CERN en 1991, HTML5 est aujourd'hui standardisé mondialement par le W3C et le WHATWG.",
            casUsage: [
                "Structure sémantique de sites et applications web",
                "Formulaires de collecte de données sécurisés",
                "Intégration multimédia (Audio, Vidéo, Iframes)",
                "Optimisation SEO et accessibilité universelle (a11y)"
            ]
        },
        icon: 'html.svg',
        badge: 'Web Fondamental',
        couleur: '#e34c26',
        ordre: 1
    },
    {
        titre: 'CSS',
        slug: 'css',
        description: "Mettre en forme, styliser, positionner et animer vos créations web.",
        introduction: {
            definition: "CSS (Cascading Style Sheets) gère l'apparence visuelle des documents HTML : couleurs, typographie, espacements, grilles réactives et animations matérielles fluides.",
            paradigmes: "Feuille de style en cascade, déclaratif, responsive et modulaire",
            historique: "Proposé par Håkon Wium Lie en 1994, CSS3 est la référence moderne pour concevoir des interfaces attrayantes.",
            casUsage: [
                "Mise en page moderne et adaptative avec Flexbox et CSS Grid",
                "Design responsive pour smartphones, tablettes et ordinateurs",
                "Transitions fluides et animations interactives à 60 FPS",
                "Thématisation dynamique (Mode sombre avec Variables CSS)"
            ]
        },
        icon: 'css.svg',
        badge: 'Design & UI',
        couleur: '#264de4',
        ordre: 2
    },
    {
        titre: 'JavaScript',
        slug: 'javascript',
        description: "Le langage de programmation interactif du Web et du backend avec Node.js.",
        introduction: {
            definition: "JavaScript est un langage de script polyvalent, orienté objet à prototype, au cœur de l'interactivité dynamique côté client et des architectures serveur modernes.",
            paradigmes: "Multi-paradigme : fonctionnel, orienté objet, événementiel et asynchrone",
            historique: "Créé en 1995 par Brendan Eich chez Netscape, normalisé sous le standard international ECMAScript (ES6+).",
            casUsage: [
                "Interactivité côté client (DOM, Single Page Applications React/Vue)",
                "Serveurs et API REST haut débit avec Node.js / Express",
                "Applications mobiles cross-platform et outils en temps réel",
                "Scripts d'automatisation et écosystème npm universel"
            ]
        },
        icon: 'js.svg',
        badge: 'Incontournable',
        couleur: '#f7df1e',
        ordre: 3
    },
    {
        titre: 'Python',
        slug: 'python',
        description: "Un langage clair, puissant et indispensable pour l'IA, la data et le web.",
        introduction: {
            definition: "Python est un langage interprété de haut niveau, réputé pour sa lisibilité exceptionnelle, son élégance et son écosystème scientifique sans égal.",
            paradigmes: "Multi-paradigme : impératif, orienté objet, fonctionnel",
            historique: "Conçu par Guido van Rossum en 1991, fondé sur la philosophie du Zen of Python (la simplicité prévaut sur la complexité).",
            casUsage: [
                "Intelligence Artificielle, Machine Learning et Deep Learning",
                "Développement Backend robuste (Django, FastAPI, Flask)",
                "Automatisation de scripts système et web scraping",
                "Analyse de données et calcul scientifique (NumPy, Pandas)"
            ]
        },
        icon: 'python.svg',
        badge: 'IA & Data',
        couleur: '#3776ab',
        ordre: 4
    },
    {
        titre: 'Java',
        slug: 'java',
        description: "Langage robuste, fortement typé, utilisé dans les grandes entreprises et Android.",
        introduction: {
            definition: "Java est un langage orienté objet compilé en bytecode exécuté par la Machine Virtuelle Java (JVM), selon le principe historique 'Write Once, Run Anywhere'.",
            paradigmes: "Orienté objet pur, fortement et statiquement typé, concurrent",
            historique: "Développé par James Gosling chez Sun Microsystems en 1995, aujourd'hui standard mondial piloté par Oracle.",
            casUsage: [
                "Systèmes d'entreprise et microservices bancaires (Spring Boot)",
                "Développement d'applications mobiles Android natives",
                "Traitement de flux de données massives (Apache Kafka, Spark)",
                "Architectures distribuées hautement scalables et fiables"
            ]
        },
        icon: 'node.svg',
        badge: 'Enterprise & Backend',
        couleur: '#f89820',
        ordre: 5
    }
];

const allChapters = [
    ...htmlChapters,
    ...cssChapters,
    ...jsChapters,
    ...pythonChapters,
    ...javaChapters
];

const seed = async () => {
    try {
        console.log('Connexion à MongoDB...');
        await connectDB();

        // Réinitialisation propre
        console.log('Suppression des anciennes données...');
        await modelChapitre.deleteMany({});
        await modelCours.deleteMany({});

        // Insertion des 5 cours
        console.log('Insertion des cours...');
        const coursCrees = await modelCours.insertMany(coursData);
        console.log(`✅ ${coursCrees.length} cours ajoutés :`, coursCrees.map(c => c.titre).join(', '));

        // Liaison des chapitres à leur cours respectif par slug
        console.log(`Association et insertion des ${allChapters.length} chapitres (20 par langage)...`);
        const chapitresAvecCours = allChapters.map(({ slug, ...chapitre }) => {
            const cours = coursCrees.find((c) => c.slug === slug);
            if (!cours) {
                throw new Error(`Cours introuvable pour le slug: ${slug}`);
            }
            return {
                ...chapitre,
                cours: cours._id
            };
        });

        const chapitresCrees = await modelChapitre.insertMany(chapitresAvecCours);
        console.log(`✅ ${chapitresCrees.length} chapitres ajoutés avec succès !`);

        // Rapport détaillé par langage
        for (const c of coursCrees) {
            const count = chapitresCrees.filter(ch => ch.cours.toString() === c._id.toString()).length;
            console.log(`   • ${c.titre} : ${count} chapitres configurés`);
        }

        await mongoose.connection.close();
        console.log('🎉 Seed terminé avec succès ! Base de données 100% à jour.');
        process.exit(0);

    } catch (err) {
        console.error('❌ Erreur lors du seed :', err.message);
        process.exit(1);
    }
};

seed();
