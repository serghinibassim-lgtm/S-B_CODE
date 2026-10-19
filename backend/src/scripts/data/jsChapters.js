// 20 Chapitres Essentiels pour le cours JavaScript
export const jsChapters = [
    {
        slug: 'javascript',
        section: 'Fondamentaux du Langage',
        titre: "Variables & Déclarations : let, const et var",
        ordre: 1,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Déclarer des variables modernes",
                content: "Depuis ES6 (2015), nous utilisons const pour les valeurs immuables et let pour les variables réassignables. L'ancien mot-clé var est déconseillé car il n'a pas de portée de bloc."
            },
            {
                type: 'code_example',
                title: "Utilisation de const et let",
                codeLanguage: 'javascript',
                content: `const PI = 3.14159;\nlet score = 0;\nscore += 10;\n\nconsole.log("Score actuel :", score);`
            },
            {
                type: 'tip',
                title: "Règle d'or",
                content: "Déclarez TOUT en const par défaut. N'utilisez let que si vous avez explicitement besoin de modifier la variable ultérieurement."
            }
        ],
        starterCode: `const nomPlateforme = "S-B_CODE";\nlet apprenants = 120;\n\n// Incrémentation\napprenants = apprenants + 1;\n\nconsole.log("Plateforme : " + nomPlateforme);\nconsole.log("Nombre d'apprenants : " + apprenants);`,
        expectedOutput: "Plateforme : S-B_CODE\nNombre d'apprenants : 121",
        explication: "Une variable stocke une information réutilisable tout au long du programme.",
        exemple: {
            titre: "let et const",
            code: `const nom = "Alice"; let age = 22;`,
            resultat: "Variables initialisées"
        },
        tryYourSelf: {
            titre: "Exercice pratique",
            consigne: "Créez une variable let niveau = 1 et augmentez-la de 1, puis affichez-la avec console.log.",
            codeDepart: `// Écrivez votre code ici`,
            indice: "let niveau = 1; niveau++; console.log(niveau);",
            solution: `let niveau = 1;\nniveau++;\nconsole.log("Niveau :", niveau);`
        }
    },
    {
        slug: 'javascript',
        section: 'Fondamentaux du Langage',
        titre: "Types de Données Primitifs & typeof",
        ordre: 2,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Les types primitifs en JavaScript",
                content: "JavaScript comprend 7 types primitifs : string (texte), number (entier et décimal), boolean (true / false), null (absence intentionnelle de valeur), undefined (variable non initialisée), bigint et symbol. L'opérateur typeof permet d'inspecter le type d'une variable."
            },
            {
                type: 'code_example',
                title: "Vérifier le type avec typeof",
                codeLanguage: 'javascript',
                content: `console.log(typeof "Bonjour"); // string\nconsole.log(typeof 42);        // number\nconsole.log(typeof true);      // boolean\nconsole.log(typeof undefined); // undefined`
            }
        ],
        starterCode: `const prenom = "Bassim";\nconst age = 24;\nconst estDeveloppeur = true;\nconst projetEnCours = null;\n\nconsole.log("Type de prenom :", typeof prenom);\nconsole.log("Type de age :", typeof age);\nconsole.log("Type de estDeveloppeur :", typeof estDeveloppeur);`,
        expectedOutput: "Type de prenom : string\nType de age : number\nType de estDeveloppeur : boolean",
        explication: "Comprendre les types évite les erreurs de calcul ou de concaténation inattendues.",
        exemple: {
            titre: "typeof",
            code: `console.log(typeof 3.14);`,
            resultat: "number"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Créez une variable note = 18.5 et affichez son type avec console.log.",
            codeDepart: `// Votre variable ici`,
            indice: "const note = 18.5; console.log(typeof note);",
            solution: `const note = 18.5;\nconsole.log("Type :", typeof note);`
        }
    },
    {
        slug: 'javascript',
        section: 'Fondamentaux du Langage',
        titre: "Opérateurs Arithmétiques et Concaténation",
        ordre: 3,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Calculs et Template Literals",
                content: "JavaScript propose les opérateurs +, -, *, /, et % (modulo, reste de la division). Pour assembler du texte et des variables, préférez les Template Literals (les backticks ` ` avec ${variable}) à la vieille concaténation par +."
            },
            {
                type: 'code_example',
                title: "Template strings modernes",
                codeLanguage: 'javascript',
                content: `const produit = "Ordinateur";\nconst prixHT = 1000;\nconst tva = 0.20;\nconst prixTTC = prixHT * (1 + tva);\n\nconsole.log(\`Le prix TTC de votre \${produit} est de \${prixTTC} €\`);`
            }
        ],
        starterCode: `const a = 15;\nconst b = 4;\n\nconsole.log(\`Addition : \${a + b}\`);\nconsole.log(\`Multiplication : \${a * b}\`);\nconsole.log(\`Modulo (reste de 15/4) : \${a % b}\`);`,
        expectedOutput: "Addition : 19\nMultiplication : 60\nModulo (reste de 15/4) : 3",
        explication: "Le modulo (%) est très utile pour tester si un nombre est pair (n % 2 === 0).",
        exemple: {
            titre: "Template string",
            code: `const nom = "Jean"; console.log(\`Salut \${nom}\`);`,
            resultat: "Salut Jean"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Calculez et affichez la surface d'un rectangle de largeur 8 et hauteur 5.",
            codeDepart: `const largeur = 8;\nconst hauteur = 5;\n// Affichez la surface`,
            indice: "console.log(`Surface : ${largeur * hauteur}`);",
            solution: `const largeur = 8;\nconst hauteur = 5;\nconsole.log(\`Surface : \${largeur * hauteur}\`);`
        }
    },
    {
        slug: 'javascript',
        section: 'Fondamentaux du Langage',
        titre: "Structures Conditionnelles (if, else if, else)",
        ordre: 4,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Prendre des décisions dans le code",
                content: "Les conditions dirigent le flux d'exécution. Utilisez toujours l'égalité stricte === (qui compare la valeur ET le type) plutôt que la comparaison laxiste == qui effectue des conversions implicites dangereuses."
            },
            {
                type: 'code_example',
                title: "Condition ternaire et if / else",
                codeLanguage: 'javascript',
                content: `const age = 19;\n\nif (age >= 18) {\n  console.log("Majeur");\n} else {\n  console.log("Mineur");\n}\n\n// Version ternaire concise :\nconst statut = age >= 18 ? "Accès autorisé" : "Accès refusé";`
            }
        ],
        starterCode: `const score = 85;\n\nif (score >= 90) {\n  console.log("Mention : Excellent !");\n} else if (score >= 70) {\n  console.log("Mention : Bien");\n} else if (score >= 50) {\n  console.log("Mention : Passable");\n} else {\n  console.log("Mention : Non admis");\n}`,
        expectedOutput: "Mention : Bien",
        explication: "else if permet d'évaluer plusieurs critères en cascade.",
        exemple: {
            titre: "Ternaire",
            code: `const estConnecte = true;\nconsole.log(estConnecte ? "En ligne" : "Déconnecté");`,
            resultat: "En ligne"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Écrivez un test qui vérifie si une variable motDePasse a une longueur >= 8.",
            codeDepart: `const motDePasse = "azerty123";\n// if (motDePasse.length >= 8) ...`,
            indice: "if (motDePasse.length >= 8) console.log('Valide');",
            solution: `const motDePasse = "azerty123";\nif (motDePasse.length >= 8) {\n  console.log("Mot de passe valide");\n} else {\n  console.log("Trop court");\n}`
        }
    },
    {
        slug: 'javascript',
        section: 'Fondamentaux du Langage',
        titre: "L'Instruction switch...case",
        ordre: 5,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Tester une variable contre plusieurs valeurs",
                content: "Lorsque vous devez comparer une même variable à de nombreuses valeurs fixes, switch est plus lisible qu'une suite interminable de else if. N'oubliez pas le mot-clé break sous chaque case pour éviter que l'exécution ne se poursuive !"
            },
            {
                type: 'code_example',
                title: "Structure switch type",
                codeLanguage: 'javascript',
                content: `const role = "admin";\n\nswitch (role) {\n  case "admin":\n    console.log("Accès total");\n    break;\n  case "editeur":\n    console.log("Accès écriture");\n    break;\n  default:\n    console.log("Accès lecture seule");\n}`
            }
        ],
        starterCode: `const jourSemaine = 3;\n\nswitch (jourSemaine) {\n  case 1:\n    console.log("Lundi - Début de semaine");\n    break;\n  case 3:\n    console.log("Mercredi - Milieu de semaine");\n    break;\n  case 5:\n    console.log("Vendredi - Bientôt le week-end !");\n    break;\n  default:\n    console.log("Autre jour de la semaine");\n}`,
        expectedOutput: "Mercredi - Milieu de semaine",
        explication: "Le bloc default s'exécute si aucun case ne correspond.",
        exemple: {
            titre: "switch",
            code: `switch ("fr") { case "fr": console.log("Bonjour"); break; }`,
            resultat: "Bonjour"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez un case pour le jour 7 qui affiche 'Dimanche - Repos'.",
            codeDepart: `// Ajoutez case 7: dans le switch`,
            indice: "case 7: console.log('Dimanche'); break;",
            solution: `case 7:\n  console.log("Dimanche - Repos");\n  break;`
        }
    },
    {
        slug: 'javascript',
        section: 'Boucles & Fonctions',
        titre: "Les Boucles de Répétition (for, while)",
        ordre: 6,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Répéter des instructions",
                content: "La boucle for classique s'utilise quand le nombre d'itérations est connu d'avance : for (initialisation; condition; incrément). La boucle while continue tant qu'une condition reste vraie."
            },
            {
                type: 'code_example',
                title: "Boucle for et while",
                codeLanguage: 'javascript',
                content: `// Boucle for\nfor (let i = 1; i <= 5; i++) {\n  console.log("Tour #" + i);\n}\n\n// Boucle while\nlet compteur = 3;\nwhile (compteur > 0) {\n  console.log(compteur);\n  compteur--;\n}`
            }
        ],
        starterCode: `console.log("Table de multiplication de 7 :");\n\nfor (let i = 1; i <= 10; i++) {\n  console.log(\`7 x \${i} = \${7 * i}\`);\n}`,
        expectedOutput: "Table de multiplication de 7 de 1 à 10.",
        explication: "La boucle for évite de dupliquer du code répétitif.",
        exemple: {
            titre: "Compteur",
            code: `for (let i=0; i<3; i++) console.log(i);`,
            resultat: "0\n1\n2"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Écrivez une boucle qui compte à rebours de 5 à 1.",
            codeDepart: `for (let i = 5; /* condition */; /* décrément */) {\n  console.log(i);\n}`,
            indice: "for (let i = 5; i >= 1; i--)",
            solution: `for (let i = 5; i >= 1; i--) {\n  console.log(i);\n}`
        }
    },
    {
        slug: 'javascript',
        section: 'Boucles & Fonctions',
        titre: "Déclarer des Fonctions Classiques",
        ordre: 7,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Encapsuler une logique réutilisable",
                content: "Une fonction reçoit des paramètres en entrée, exécute des instructions, et renvoie un résultat avec le mot-clé return. Les fonctions déclarées avec le mot-clé function bénéficient du mécanisme de 'hoisting' (hissage)."
            },
            {
                type: 'code_example',
                title: "Fonction avec calcul et return",
                codeLanguage: 'javascript',
                content: `function calculerMoyenne(note1, note2) {\n  const somme = note1 + note2;\n  return somme / 2;\n}\n\nconst resultat = calculerMoyenne(14, 18);\nconsole.log("Moyenne :", resultat);`
            }
        ],
        starterCode: `function saluerUtilisateur(nom, role = "Membre") {\n  return \`Bienvenue \${nom}, vous êtes connecté en tant que \${role}.\`;\n}\n\nconsole.log(saluerUtilisateur("Bassim", "Administrateur"));\nconsole.log(saluerUtilisateur("Sophie"));`,
        expectedOutput: "Bienvenue Bassim, vous êtes connecté en tant que Administrateur.\nBienvenue Sophie, vous êtes connecté en tant que Membre.",
        explication: "Les paramètres peuvent avoir une valeur par défaut (ex: role = 'Membre').",
        exemple: {
            titre: "Fonction simple",
            code: `function double(x) { return x * 2; }\nconsole.log(double(5));`,
            resultat: "10"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Créez une fonction estPair(nombre) qui renvoie true si le nombre est pair.",
            codeDepart: `function estPair(nombre) {\n  // votre return ici\n}\nconsole.log(estPair(4));`,
            indice: "return nombre % 2 === 0;",
            solution: `function estPair(nombre) {\n  return nombre % 2 === 0;\n}\nconsole.log(estPair(4));`
        }
    },
    {
        slug: 'javascript',
        section: 'Boucles & Fonctions',
        titre: "Fonctions Fléchées (Arrow Functions)",
        ordre: 8,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "La syntaxe moderne et concise",
                content: "Les fonctions fléchées () => {} offrent une syntaxe allégée. Si la fonction ne contient qu'une seule expression, les accolades et le mot-clé return sont implicites !"
            },
            {
                type: 'code_example',
                title: "Comparaison des syntaxes",
                codeLanguage: 'javascript',
                content: `// Syntaxe classique :\nconst carreClassique = function(x) { return x * x; };\n\n// Syntaxe fléchée concise (retour implicite) :\nconst carre = x => x * x;\n\nconsole.log(carre(6)); // 36`
            }
        ],
        starterCode: `const addition = (a, b) => a + b;\nconst salutation = nom => \`Hello, \${nom} !\`;\n\nconsole.log("Somme de 12 + 18 :", addition(12, 18));\nconsole.log(salutation("Monaco Editor"));`,
        expectedOutput: "Somme de 12 + 18 : 30\nHello, Monaco Editor !",
        explication: "Les fonctions fléchées lient également lexicalement la valeur de 'this'.",
        exemple: {
            titre: "Arrow",
            code: `const triple = n => n * 3; console.log(triple(7));`,
            resultat: "21"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Écrivez une fonction fléchée multiplier = (a, b) => a * b et affichez le résultat de multiplier(5, 9).",
            codeDepart: `// Écrivez la fonction fléchée ici`,
            indice: "const multiplier = (a, b) => a * b; console.log(multiplier(5, 9));",
            solution: `const multiplier = (a, b) => a * b;\nconsole.log("Résultat :", multiplier(5, 9));`
        }
    },
    {
        slug: 'javascript',
        section: 'Boucles & Fonctions',
        titre: "Portée des Variables (Scope) et Closures",
        ordre: 9,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "L'isolation mémoire et les fermetures",
                content: "Une variable déclarée dans un bloc {} n'est pas accessible à l'extérieur (portée de bloc). Une 'closure' est une fonction qui se souvient des variables de son environnement lexical parent, même après que la fonction parente s'est exécutée !"
            },
            {
                type: 'code_example',
                title: "Exemple de compteur avec closure",
                codeLanguage: 'javascript',
                content: `function creerCompteur() {\n  let compte = 0;\n  return function() {\n    compte++;\n    return compte;\n  };\n}\n\nconst incrementer = creerCompteur();\nconsole.log(incrementer()); // 1\nconsole.log(incrementer()); // 2`
            }
        ],
        starterCode: `function fabriquerMultiplicateur(facteur) {\n  return function(nombre) {\n    return nombre * facteur;\n  };\n}\n\nconst doubler = fabriquerMultiplicateur(2);\nconst tripler = fabriquerMultiplicateur(3);\n\nconsole.log("Doubler 10 :", doubler(10));\nconsole.log("Tripler 10 :", tripler(10));`,
        expectedOutput: "Doubler 10 : 20\nTripler 10 : 30",
        explication: "Les closures permettent d'émuler des variables privées très sécurisées.",
        exemple: {
            titre: "Scope",
            code: `{ let x = 10; } // x est inaccessible ici`,
            resultat: "Isolation réussie"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Créez une fonction quadrupler avec fabriquerMultiplicateur(4) et testez-la sur 5.",
            codeDepart: `// const quadrupler = ...`,
            indice: "const quadrupler = fabriquerMultiplicateur(4); console.log(quadrupler(5));",
            solution: `const quadrupler = fabriquerMultiplicateur(4);\nconsole.log("Quadrupler 5 :", quadrupler(5));`
        }
    },
    {
        slug: 'javascript',
        section: 'Tableaux & Manipulation de Données',
        titre: "Tableaux (Arrays) : Création et Méthodes Clés",
        ordre: 10,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Stocker des listes d'éléments",
                content: "Les tableaux s'initialisent avec des crochets []. L'indexation commence à 0. Les méthodes les plus utilisées sont push (ajouter à la fin), pop (retirer à la fin), unshift (ajouter au début), et length (nombre d'éléments)."
            },
            {
                type: 'code_example',
                title: "Opérations de base sur tableau",
                codeLanguage: 'javascript',
                content: `const langages = ["HTML", "CSS"];\nlangages.push("JavaScript"); // Ajoute\nconsole.log("Taille :", langages.length);\nconsole.log("Premier :", langages[0]);`
            }
        ],
        starterCode: `const stack = ["Node.js", "Express", "React"];\n\n// Ajout de MongoDB\nstack.push("MongoDB");\n\nconsole.log("Stack complète :", stack);\nconsole.log("Nombre d'outils :", stack.length);\nconsole.log("Dernier élément :", stack[stack.length - 1]);`,
        expectedOutput: "Stack complète : [ 'Node.js', 'Express', 'React', 'MongoDB' ]\nNombre d'outils : 4\nDernier élément : MongoDB",
        explication: "Les tableaux en JavaScript peuvent contenir n'importe quel mélange de types.",
        exemple: {
            titre: "push",
            code: `const t = [1]; t.push(2); console.log(t);`,
            resultat: "[1, 2]"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Retirez le dernier élément de stack avec .pop() et affichez le tableau mis à jour.",
            codeDepart: `// Utilisez stack.pop()`,
            indice: "stack.pop(); console.log(stack);",
            solution: `stack.pop();\nconsole.log("Après retrait :", stack);`
        }
    },
    {
        slug: 'javascript',
        section: 'Tableaux & Manipulation de Données',
        titre: "Itération Fonctionnelle : forEach et map",
        ordre: 11,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Transformer des données sans boucle classique",
                content: "forEach parcourt chaque élément sans renvoyer de nouveau tableau. map transforme chaque élément et renvoie un NOUVEAU tableau de même longueur sans modifier l'original (immuabilité)."
            },
            {
                type: 'code_example',
                title: "map vs forEach",
                codeLanguage: 'javascript',
                content: `const nombres = [1, 2, 3];\n\n// map crée un nouveau tableau doublé\nconst doubles = nombres.map(n => n * 2); // [2, 4, 6]\n\n// forEach affiche chaque valeur\ndoubles.forEach(d => console.log("Valeur :", d));`
            }
        ],
        starterCode: `const prixEuros = [10, 25, 50, 100];\nconst tauxConversion = 1.08; // Dollar US\n\nconst prixDollars = prixEuros.map(prix => (prix * tauxConversion).toFixed(2));\n\nconsole.log("Prix en Euros :", prixEuros);\nconsole.log("Prix convertis en $ :", prixDollars);`,
        expectedOutput: "Prix en Euros : [ 10, 25, 50, 100 ]\nPrix convertis en $ : [ '10.80', '27.00', '54.00', '108.00' ]",
        explication: "map est omniprésent en React pour transformer des listes d'objets en composants visuels.",
        exemple: {
            titre: "map",
            code: `[1, 2].map(x => x + 1)`,
            resultat: "[2, 3]"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Utilisez .map() pour mettre tous les prénoms de ['alice', 'bob'] en majuscules avec .toUpperCase().",
            codeDepart: `const noms = ["alice", "bob"];\n// const maj = noms.map(...)`,
            indice: "noms.map(n => n.toUpperCase())",
            solution: `const noms = ["alice", "bob"];\nconst maj = noms.map(n => n.toUpperCase());\nconsole.log(maj);`
        }
    },
    {
        slug: 'javascript',
        section: 'Tableaux & Manipulation de Données',
        titre: "Filtrage et Recherche : filter, find, includes",
        ordre: 12,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Extraire les bonnes données",
                content: "filter() renvoie tous les éléments qui valident une condition. find() renvoie le PREMIER élément qui valide la condition. includes() renvoie true ou false si la valeur existe dans le tableau."
            },
            {
                type: 'code_example',
                title: "Filtrer une liste",
                codeLanguage: 'javascript',
                content: `const notes = [12, 8, 15, 6, 19];\nconst recus = notes.filter(n => n >= 10); // [12, 15, 19]\nconst premierGenie = notes.find(n => n > 18); // 19`
            }
        ],
        starterCode: `const utilisateurs = [\n  { id: 1, nom: "Bassim", role: "admin" },\n  { id: 2, nom: "Marc", role: "etudiant" },\n  { id: 3, nom: "Sarah", role: "admin" },\n  { id: 4, nom: "Yasmine", role: "etudiant" }\n];\n\nconst admins = utilisateurs.filter(u => u.role === "admin");\nconsole.log("Liste des administrateurs :", admins);`,
        expectedOutput: "Liste des administrateurs : [ { id: 1, nom: 'Bassim', role: 'admin' }, { id: 3, nom: 'Sarah', role: 'admin' } ]",
        explication: "filter renvoie toujours un tableau vide [] si aucun élément ne correspond.",
        exemple: {
            titre: "includes",
            code: `[1, 2, 3].includes(2);`,
            resultat: "true"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Filtrez les utilisateurs pour ne garder que les étudiants (role === 'etudiant').",
            codeDepart: `// const etudiants = utilisateurs.filter(...)`,
            indice: "utilisateurs.filter(u => u.role === 'etudiant')",
            solution: `const etudiants = utilisateurs.filter(u => u.role === "etudiant");\nconsole.log("Étudiants :", etudiants);`
        }
    },
    {
        slug: 'javascript',
        section: 'Tableaux & Manipulation de Données',
        titre: "La Puissante Méthode reduce",
        ordre: 13,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Agréger un tableau en une valeur unique",
                content: "reduce(callback, valeurInitiale) accumule les éléments d'un tableau pour produire un résultat unique (une somme, une moyenne, un dictionnaire regroupé)."
            },
            {
                type: 'code_example',
                title: "Calcul de total",
                codeLanguage: 'javascript',
                content: `const panier = [20, 35, 15];\nconst total = panier.reduce((accumulateur, prix) => accumulateur + prix, 0);\nconsole.log("Total :", total); // 70`
            }
        ],
        starterCode: `const articles = [\n  { nom: "Clavier", prix: 60 },\n  { nom: "Souris", prix: 40 },\n  { nom: "Casque", prix: 80 }\n];\n\nconst totalPanier = articles.reduce((acc, art) => acc + art.prix, 0);\nconsole.log(\`Montant total de votre commande : \${totalPanier} €\`);`,
        expectedOutput: "Montant total de votre commande : 180 €",
        explication: "La valeur initiale (ici 0) est primordiale pour garantir le bon type de départ.",
        exemple: {
            titre: "Somme",
            code: `[1, 2, 3].reduce((a, b) => a + b, 0)`,
            resultat: "6"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Calculez le produit de [2, 3, 4] avec reduce et une valeur initiale de 1.",
            codeDepart: `const nombres = [2, 3, 4];\n// const produit = ...`,
            indice: "nombres.reduce((acc, n) => acc * n, 1)",
            solution: `const nombres = [2, 3, 4];\nconst produit = nombres.reduce((acc, n) => acc * n, 1);\nconsole.log("Produit :", produit);`
        }
    },
    {
        slug: 'javascript',
        section: 'Objets & Structures Avancées',
        titre: "Objets Littéraux : Clés, Valeurs et Méthodes",
        ordre: 14,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Structurer des entités complexes",
                content: "Un objet stocke des paires clé/valeur entre accolades {}. On accède aux valeurs via le point (objet.cle) ou les crochets (objet['cle']). Object.keys() extrait les clés et Object.values() les valeurs."
            },
            {
                type: 'code_example',
                title: "Objet avec méthode",
                codeLanguage: 'javascript',
                content: `const cours = {\n  titre: "JavaScript",\n  dureeHeures: 30,\n  afficherResume() {\n    return \`\${this.titre} (\${this.dureeHeures}h)\`;\n  }\n};\nconsole.log(cours.afficherResume());`
            }
        ],
        starterCode: `const voiture = {\n  marque: "Tesla",\n  modele: "Model 3",\n  annee: 2026,\n  estElectrique: true\n};\n\nconsole.log("Marque :", voiture.marque);\nconsole.log("Toutes les clés :", Object.keys(voiture));\nconsole.log("Toutes les valeurs :", Object.values(voiture));`,
        expectedOutput: "Marque : Tesla\nToutes les clés : [ 'marque', 'modele', 'annee', 'estElectrique' ]\nToutes les valeurs : [ 'Tesla', 'Model 3', 2026, true ]",
        explication: "Les objets JavaScript constituent la base du format JSON universel.",
        exemple: {
            titre: "Accès",
            code: `const user = { nom: "Ali" }; console.log(user.nom);`,
            resultat: "Ali"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez la propriété couleur: 'rouge' à l'objet voiture.",
            codeDepart: `// voiture.couleur = ...`,
            indice: "voiture.couleur = 'rouge';",
            solution: `voiture.couleur = "rouge";\nconsole.log("Couleur :", voiture.couleur);`
        }
    },
    {
        slug: 'javascript',
        section: 'Objets & Structures Avancées',
        titre: "La Déstructuration (Destructuring)",
        ordre: 15,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Extraire des valeurs avec élégance",
                content: "La déstructuration déballe les propriétés d'un objet ou les éléments d'un tableau directement dans des variables distinctes en une seule ligne de code."
            },
            {
                type: 'code_example',
                title: "Déstructuration d'objet et de tableau",
                codeLanguage: 'javascript',
                content: `// Objet\nconst profil = { pseudo: "coder99", pays: "France" };\nconst { pseudo, pays } = profil;\n\n// Tableau\nconst coords = [48.8566, 2.3522];\nconst [latitude, longitude] = coords;`
            }
        ],
        starterCode: `const configServeur = {\n  hote: "localhost",\n  port: 3000,\n  statut: "actif"\n};\n\n// Déstructuration de hote et port\nconst { hote, port } = configServeur;\n\nconsole.log(\`Serveur démarré sur http://\${hote}:\${port}\`);`,
        expectedOutput: "Serveur démarré sur http://localhost:3000",
        explication: "Cette syntaxe est massivement utilisée pour extraire les props des composants React.",
        exemple: {
            titre: "Array destructuring",
            code: `const [x, y] = [10, 20]; console.log(x);`,
            resultat: "10"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Déstructurez statut depuis configServeur et affichez-le.",
            codeDepart: `// const { statut } = ...`,
            indice: "const { statut } = configServeur; console.log(statut);",
            solution: `const { statut } = configServeur;\nconsole.log("Statut :", statut);`
        }
    },
    {
        slug: 'javascript',
        section: 'Objets & Structures Avancées',
        titre: "Opérateurs Spread (...) et Rest",
        ordre: 16,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Fusionner et étaler les données",
                content: "L'opérateur ... a deux usages majeurs : le Spread Operator (déplier et cloner des tableaux ou objets) et le Rest Parameter (regrouper plusieurs arguments passés à une fonction dans un tableau unique)."
            },
            {
                type: 'code_example',
                title: "Clonage et fusion",
                codeLanguage: 'javascript',
                content: `const frontend = ["HTML", "CSS"];\nconst fullstack = [...frontend, "JS", "Node"]; // Fusion\n\nconst defaut = { theme: "dark" };\nconst options = { ...defaut, zoom: 1.2 }; // Copie et ajout`
            }
        ],
        starterCode: `function calculerSomme(...nombres) {\n  return nombres.reduce((acc, n) => acc + n, 0);\n}\n\nconsole.log("Somme de 3 nombres :", calculerSomme(10, 20, 30));\nconsole.log("Somme de 5 nombres :", calculerSomme(1, 2, 3, 4, 5));`,
        expectedOutput: "Somme de 3 nombres : 60\nSomme de 5 nombres : 15",
        explication: "...nombres rassemble tous les paramètres supplémentaires sous forme d'un tableau.",
        exemple: {
            titre: "Copie d'objet",
            code: `const a = { x: 1 }; const b = { ...a, y: 2 };`,
            resultat: "{ x: 1, y: 2 }"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Fusionnez les tableaux [1, 2] et [3, 4] avec l'opérateur spread.",
            codeDepart: `const t1 = [1, 2];\nconst t2 = [3, 4];\n// const fusion = ...`,
            indice: "const fusion = [...t1, ...t2];",
            solution: `const t1 = [1, 2];\nconst t2 = [3, 4];\nconst fusion = [...t1, ...t2];\nconsole.log(fusion);`
        }
    },
    {
        slug: 'javascript',
        section: 'DOM & Programmation Asynchrone',
        titre: "Le DOM : Sélectionner et Cibler des Éléments",
        ordre: 17,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Connecter JavaScript à la page HTML",
                content: "Le DOM (Document Object Model) est la représentation objet de votre page HTML. document.querySelector() permet de cibler n'importe quel élément avec des sélecteurs CSS (.classe, #id, balise)."
            },
            {
                type: 'code_example',
                title: "Sélections DOM",
                codeLanguage: 'javascript',
                content: `const titre = document.querySelector("h1");\nconst bouton = document.querySelector(".btn-action");\nconst tousLesLiens = document.querySelectorAll("nav a");`
            }
        ],
        starterCode: `// Simulation d'une structure DOM d'apprentissage\nconst pageHTML = {\n  titre: "Bienvenue sur le DOM",\n  elements: ["Paragraphe 1", "Paragraphe 2"],\n  querySelector(cible) {\n    return \`Élément ciblé correspondant à '\${cible}'\`;\n  }\n};\n\nconsole.log(pageHTML.querySelector("#titre-principal"));\nconsole.log(pageHTML.querySelector(".btn-primaire"));`,
        expectedOutput: "Élément ciblé correspondant à '#titre-principal'\nÉlément ciblé correspondant à '.btn-primaire'",
        explication: "querySelector renvoie le premier élément correspondant, querySelectorAll renvoie une NodeList.",
        exemple: {
            titre: "ID",
            code: `document.getElementById("mon-id");`,
            resultat: "Élément unique retourné"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ciblez un bouton ayant la classe .valider avec querySelector.",
            codeDepart: `// const btn = document.querySelector(...)`,
            indice: "document.querySelector('.valider')",
            solution: `const btn = pageHTML.querySelector(".valider");\nconsole.log(btn);`
        }
    },
    {
        slug: 'javascript',
        section: 'DOM & Programmation Asynchrone',
        titre: "Manipulation du DOM : Contenu et Classes CSS",
        ordre: 18,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Modifier le contenu en direct",
                content: "element.textContent modifie le texte sécurisé sans interpréter le HTML. element.innerHTML insère du balisage. element.classList.add(), remove() et toggle() pilotent les classes CSS dynamiquement."
            },
            {
                type: 'code_example',
                title: "Changement de classe",
                codeLanguage: 'javascript',
                content: `const banniere = { textContent: "", classList: new Set() };\nbanniere.textContent = "Nouvelle annonce !";\nbanniere.classList.add("visible");`
            }
        ],
        starterCode: `// Démonstration du comportement de classList\nconst elementDOM = {\n  classes: ["carte"],\n  toggle(nomClasse) {\n    const index = this.classes.indexOf(nomClasse);\n    if (index === -1) this.classes.push(nomClasse);\n    else this.classes.splice(index, 1);\n    console.log("Classes actuelles :", this.classes.join(" "));\n  }\n};\n\nelementDOM.toggle("mode-sombre");\nelementDOM.toggle("mode-sombre");`,
        expectedOutput: "Classes actuelles : carte mode-sombre\nClasses actuelles : carte",
        explication: "classList.toggle active la classe si absente, la retire si présente.",
        exemple: {
            titre: "textContent",
            code: `h1.textContent = "Nouveau titre";`,
            resultat: "Titre mis à jour"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez la classe 'active' avec toggle.",
            codeDepart: `elementDOM.toggle("active");`,
            indice: "elementDOM.toggle('active');",
            solution: `elementDOM.toggle("active");`
        }
    },
    {
        slug: 'javascript',
        section: 'DOM & Programmation Asynchrone',
        titre: "Gestion des Événements (addEventListener)",
        ordre: 19,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Rendre vos pages interactives",
                content: "addEventListener écoute les actions de l'utilisateur (click, input, submit, keydown). L'objet événement event transmis en paramètre contient des détails cruciaux (ex: event.preventDefault() pour éviter le rechargement de page sur un formulaire)."
            },
            {
                type: 'code_example',
                title: "Écoute de clic",
                codeLanguage: 'javascript',
                content: `bouton.addEventListener("click", (event) => {\n  console.log("Bouton cliqué à :", event.clientX, event.clientY);\n});`
            }
        ],
        starterCode: `// Simulation du système d'événements\nfunction dispatchEvent(nomEvenement, donnee) {\n  console.log(\`Événement déclenché : [\${nomEvenement}]\`);\n  console.log("Données transmises :", donnee);\n}\n\ndispatchEvent("click", { cible: "bouton_connexion", timestamp: Date.now() });`,
        expectedOutput: "Événement déclenché : [click]\nDonnées transmises : { cible: 'bouton_connexion', timestamp: ... }",
        explication: "Les événements sont le moteur de l'architecture événementielle de JavaScript.",
        exemple: {
            titre: "Click",
            code: `btn.addEventListener("click", () => alert("Bravo"));`,
            resultat: "Alerte au clic"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Déclenchez un événement 'submit' avec dispatchEvent.",
            codeDepart: `// dispatchEvent("submit", ...)`,
            indice: "dispatchEvent('submit', { formulaire: 'contact' });",
            solution: `dispatchEvent("submit", { formulaire: "contact" });`
        }
    },
    {
        slug: 'javascript',
        section: 'DOM & Programmation Asynchrone',
        titre: "Programmation Asynchrone : async / await et Fetch",
        ordre: 20,
        language: 'javascript',
        contentBlocks: [
            {
                type: 'text',
                title: "Communiquer avec des serveurs et APIs",
                content: "Les opérations réseau prennent du temps. Pour ne pas bloquer le navigateur, JavaScript utilise des Promesses. La syntaxe async / await permet d'écrire du code asynchrone aussi clairement que du code synchrone avec un bloc try...catch pour gérer les erreurs."
            },
            {
                type: 'code_example',
                title: "Appel API avec async/await",
                codeLanguage: 'javascript',
                content: `async function chargerUtilisateur(id) {\n  try {\n    const reponse = await fetch(\`https://api.example.com/users/\${id}\`);\n    const data = await reponse.json();\n    console.log("Utilisateur :", data.nom);\n  } catch (err) {\n    console.error("Erreur réseau :", err.message);\n  }\n}`
            }
        ],
        starterCode: `// Simulation d'une promesse asynchrone avec délai\nconst simulerRequeteAPI = () => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve({ statut: 200, message: "Données reçues depuis le serveur Node.js !" });\n    }, 200);\n  });\n};\n\nasync function executer() {\n  console.log("1. Lancement de la requête...");\n  const reponse = await simulerRequeteAPI();\n  console.log("2. Réponse :", reponse.message);\n}\n\nexecuter();`,
        expectedOutput: "1. Lancement de la requête...\n2. Réponse : Données reçues depuis le serveur Node.js !",
        explication: "await suspend l'exécution de la fonction jusqu'à ce que la promesse soit résolue.",
        exemple: {
            titre: "Promise",
            code: `const p = Promise.resolve("OK"); p.then(console.log);`,
            resultat: "OK"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez un console.log('3. Terminé') après le await dans la fonction executer().",
            codeDepart: `// Ajoutez le log après le await`,
            indice: "console.log('3. Terminé');",
            solution: `console.log("3. Traitement terminé avec succès");`
        }
    }
];
