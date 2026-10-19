/**
 * Générateur et formateur de Quiz de 4 QCM contextuels pour n'importe quel chapitre
 */
export const getChapterQuiz = (chapter) => {
    if (!chapter) return [];

    // Si le chapitre possède déjà 4 questions complètes en BDD
    if (Array.isArray(chapter.quiz) && chapter.quiz.length >= 4) {
        return chapter.quiz.slice(0, 4);
    }

    const title = chapter.titre || chapter.title || "Chapitre";
    const lang = (chapter.language || "javascript").toLowerCase();
    const section = chapter.section || "Général";
    const starterCode = chapter.starterCode || "";

    // Questions spécialisées selon le langage et le titre du cours
    switch (lang) {
        case 'html':
            return [
                {
                    question: `Dans le cadre de la leçon "${title}", quelle est la balise ou l'attribut fondamental utilisé ?`,
                    options: [
                        title.toLowerCase().includes("lien") ? "La balise <a href=\"...\">" : (title.toLowerCase().includes("image") ? "La balise <img src=\"...\" alt=\"...\">" : "Une balise sémantique dédiée"),
                        "<script type=\"text/html\">",
                        "<meta name=\"layout\">",
                        "<div role=\"container\">"
                    ],
                    correctAnswer: 0,
                    explanation: "La balise adéquate et ses attributs sémantiques sont indispensables pour structurer ce contenu."
                },
                {
                    question: "Complétez le code suivant pour qu'il soit syntaxiquement valide en HTML5 :",
                    codeSnippet: title.toLowerCase().includes("form")
                        ? `<form action="/submit">\n  <label for="email">Email :</label>\n  <___ type="email" id="email">\n</form>`
                        : `<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <___ charset="UTF-8">\n  </head>\n</html>`,
                    options: [
                        title.toLowerCase().includes("form") ? "input" : "meta",
                        title.toLowerCase().includes("form") ? "field" : "link",
                        title.toLowerCase().includes("form") ? "textarea" : "header",
                        title.toLowerCase().includes("form") ? "box" : "style"
                    ],
                    correctAnswer: 0,
                    explanation: title.toLowerCase().includes("form")
                        ? "La balise <input> permet d'insérer des champs de saisie."
                        : "<meta charset=\"UTF-8\"> déclare l'encodage des caractères."
                },
                {
                    question: "Pourquoi est-il crucial d'utiliser des balises sémantiques plutôt que de simples <div> ?",
                    options: [
                        "Pour améliorer l'accessibilité (a11y) et le référencement naturel (SEO)",
                        "Parce que les <div> ne peuvent pas recevoir de style CSS",
                        "Pour accélérer la vitesse de la connexion internet",
                        "Parce que les navigateurs modernes refusent d'afficher les <div>"
                    ],
                    correctAnswer: 0,
                    explanation: "La sémantique HTML5 permet aux moteurs de recherche et lecteurs d'écran de comprendre la structure."
                },
                {
                    question: "Quel attribut est strictement OBLIGATOIRE sur les éléments d'interaction ou d'images ?",
                    options: [
                        title.toLowerCase().includes("image") ? "L'attribut 'alt' pour décrire l'image" : "L'attribut 'id' ou 'href' selon la balise",
                        "L'attribut 'color'",
                        "L'attribut 'style' en ligne",
                        "L'attribut 'border'"
                    ],
                    correctAnswer: 0,
                    explanation: "L'attribut alt ou les références cibles garantissent l'accessibilité universelle du Web."
                }
            ];

        case 'css':
            return [
                {
                    question: `Concernant la leçon "${title}", quelle propriété CSS est au cœur de cette règle ?`,
                    options: [
                        title.toLowerCase().includes("flex") ? "display: flex;" : (title.toLowerCase().includes("grid") ? "display: grid;" : "La propriété de style ciblée"),
                        "float: both;",
                        "align: center;",
                        "position: unset;"
                    ],
                    correctAnswer: 0,
                    explanation: "Cette propriété active le mode de disposition ou le style approprié."
                },
                {
                    question: "Complétez le bloc CSS pour appliquer la règle attendue :",
                    codeSnippet: `.boite {\n  box-sizing: border-box;\n  ___: 20px;\n}`,
                    options: [
                        "padding",
                        "font-inline",
                        "text-weight",
                        "align-box"
                    ],
                    correctAnswer: 0,
                    explanation: "padding crée la marge intérieure entre le contenu et la bordure."
                },
                {
                    question: "Que se passe-t-il lorsque deux sélecteurs ciblent le même élément avec des règles opposées ?",
                    options: [
                        "Le sélecteur le plus spécifique (ou le dernier déclaré en cas d'égalité) l'emporte",
                        "Le navigateur affiche une page blanche d'erreur",
                        "La première règle déclarée est toujours prioritaire",
                        "Les deux règles sont annulées"
                    ],
                    correctAnswer: 0,
                    explanation: "Le système de spécificité et de cascade régit la priorité des règles CSS."
                },
                {
                    question: "Quelle pseudo-classe permet d'animer un changement d'état au passage de la souris ?",
                    options: [
                        ":hover",
                        ":active-click",
                        ":mouse-on",
                        ":focus-visible-only"
                    ],
                    correctAnswer: 0,
                    explanation: ":hover cible l'élément survolé par le pointeur de la souris."
                }
            ];

        case 'javascript':
            return [
                {
                    question: `Dans la thématique "${title}", quelle syntaxe moderne ES6+ est recommandée ?`,
                    options: [
                        title.toLowerCase().includes("variable") ? "Utiliser const par défaut et let si réassignable" : "Utiliser les fonctions fléchées () => {} et les méthodes immuables",
                        "Utiliser le mot-clé var sans restriction",
                        "Déclarer toutes les fonctions avec function* generator",
                        "Ne jamais utiliser de point-virgule ni d'accolade"
                    ],
                    correctAnswer: 0,
                    explanation: "const et let empêchent les fuites de portée et préviennent les réassignations accidentelles."
                },
                {
                    question: "Quel sera le résultat affiché dans la console par le code suivant ?",
                    codeSnippet: `const nombres = [1, 2, 3];\nconst resultat = nombres.map(x => x * 2);\nconsole.log(resultat[1]);`,
                    options: [
                        "4",
                        "2",
                        "6",
                        "undefined"
                    ],
                    correctAnswer: 0,
                    explanation: "Le tableau résultant est [2, 4, 6], donc l'élément à l'index 1 est 4."
                },
                {
                    question: "Complétez la condition pour vérifier une égalité stricte en valeur ET en type :",
                    codeSnippet: `const note = "15";\nif (note ___ 15) {\n  console.log("Valide");\n}`,
                    options: [
                        "===",
                        "==",
                        "=",
                        "equals"
                    ],
                    correctAnswer: 0,
                    explanation: "=== vérifie la stricte égalité sans conversion implicite de type."
                },
                {
                    question: "Quelle méthode permet d'écouter un clic sur un élément du DOM en JavaScript ?",
                    options: [
                        "element.addEventListener('click', callback)",
                        "element.attachClickEvent(callback)",
                        "element.onClickHandler(callback)",
                        "element.listen('tap')"
                    ],
                    correctAnswer: 0,
                    explanation: "addEventListener est la méthode standard du W3C pour attacher un écouteur d'événement."
                }
            ];

        case 'python':
            return [
                {
                    question: `Quelle est la règle syntaxique absolue en Python illustrée dans "${title}" ?`,
                    options: [
                        "L'indentation (4 espaces) délimite la hiérarchie et les blocs de code",
                        "Chaque instruction doit obligatoirement se terminer par un point-virgule",
                        "Toutes les variables doivent être typées avec 'var'",
                        "Les fonctions doivent être entourées d'accolades {}"
                    ],
                    correctAnswer: 0,
                    explanation: "En Python, l'indentation fait partie intégrante de la grammaire du langage."
                },
                {
                    question: "Quel est le résultat produit par le code Python ci-dessous ?",
                    codeSnippet: `valeurs = [10, 20, 30, 40]\nprint(valeurs[-1])`,
                    options: [
                        "40 (le dernier élément)",
                        "10 (le premier élément)",
                        "IndexError: index hors limites",
                        "-40"
                    ],
                    correctAnswer: 0,
                    explanation: "L'indexation négative [-1] accède directement au dernier élément en Python."
                },
                {
                    question: "Complétez la définition de la fonction ci-dessous :",
                    codeSnippet: `___ calculer_double(nombre):\n    return nombre * 2`,
                    options: [
                        "def",
                        "function",
                        "func",
                        "fn"
                    ],
                    correctAnswer: 0,
                    explanation: "Le mot-clé 'def' est utilisé en Python pour définir des fonctions."
                },
                {
                    question: "Quelle structure permet d'itérer 5 fois (de 0 à 4) en Python ?",
                    options: [
                        "for i in range(5):",
                        "for (i=0; i<5; i++):",
                        "loop i to 5:",
                        "while i in 5:"
                    ],
                    correctAnswer: 0,
                    explanation: "range(5) génère une séquence d'entiers de 0 à 4."
                }
            ];

        case 'java':
        default:
            return [
                {
                    question: `En Java, quelle est la signature exacte de la méthode point d'entrée exécutée par la JVM ?`,
                    options: [
                        "public static void main(String[] args)",
                        "public void main(String args)",
                        "static main(args)",
                        "public start(String[] args)"
                    ],
                    correctAnswer: 0,
                    explanation: "public static void main(String[] args) est le point d'entrée universel requis par la JVM."
                },
                {
                    question: "Complétez le code pour déclarer et instancier correctement un objet :",
                    codeSnippet: `Main obj = ___ Main();`,
                    options: [
                        "new",
                        "alloc",
                        "create",
                        "instance"
                    ],
                    correctAnswer: 0,
                    explanation: "Le mot-clé 'new' alloue la mémoire sur le tas (Heap) et appelle le constructeur."
                },
                {
                    question: "Comment compare-t-on le contenu de deux chaînes String en Java de façon sécurisée ?",
                    options: [
                        "chaine1.equals(chaine2)",
                        "chaine1 == chaine2",
                        "chaine1 === chaine2",
                        "chaine1.isEqual(chaine2)"
                    ],
                    correctAnswer: 0,
                    explanation: "L'opérateur == compare les références mémoires, tandis que .equals() compare les caractères."
                },
                {
                    question: "Quel mot-clé est utilisé en Java pour hériter d'une classe parente ?",
                    options: [
                        "extends",
                        "implements",
                        "inherits",
                        "super"
                    ],
                    correctAnswer: 0,
                    explanation: "'extends' est réservé à l'héritage de classes, 'implements' pour les interfaces."
                }
            ];
    }
};
