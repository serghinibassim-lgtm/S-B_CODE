// 20 Chapitres Essentiels pour le cours Java
export const javaChapters = [
    {
        slug: 'java',
        section: 'Fondations du Langage',
        titre: "Structure d'un Programme Java & Méthode main",
        ordre: 1,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Le point d'entrée universel en Java",
                content: "En Java, tout code réside obligatoirement à l'intérieur d'une classe. Le point d'entrée exécuté par la Machine Virtuelle Java (JVM) est la méthode publique et statique : public static void main(String[] args). Le point-virgule ; est obligatoire à la fin de chaque instruction."
            },
            {
                type: 'code_example',
                title: "Programme minimal en Java",
                codeLanguage: 'java',
                content: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Bonjour le monde !");\n    }\n}`
            },
            {
                type: 'tip',
                title: "Nom de fichier",
                content: "Le nom du fichier doit correspondre exactement au nom de la classe publique (ex: Main.java pour public class Main)."
            }
        ],
        starterCode: `public class Main {\n    public static void main(String[] args) {\n        String plateforme = "S-B_CODE";\n        System.out.println("Bienvenue sur la plateforme " + plateforme + " !");\n        System.out.println("Java est un langage robuste et orienté objet.");\n    }\n}`,
        expectedOutput: "Bienvenue sur la plateforme S-B_CODE !\nJava est un langage robuste et orienté objet.",
        explication: "System.out.println() écrit le texte spécifié dans la console suivi d'un retour à la ligne.",
        exemple: {
            titre: "Affichage simple",
            code: `System.out.println("Test");`,
            resultat: "Test"
        },
        tryYourSelf: {
            titre: "Exercice pratique",
            consigne: "Affichez votre prénom avec System.out.println().",
            codeDepart: `public class Main {\n    public static void main(String[] args) {\n        // Écrivez votre code ici\n    }\n}`,
            indice: `System.out.println("Je m'appelle ...");`,
            solution: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Je m'appelle Bassim");\n    }\n}`
        }
    },
    {
        slug: 'java',
        section: 'Fondations du Langage',
        titre: "Types de Données Primitifs & Variables",
        ordre: 2,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Typage statique strict",
                content: "Java est un langage fortement et statiquement typé : chaque variable doit déclarer son type à la compilation. Il existe 8 types primitifs : byte, short, int, long (entiers), float, double (décimaux), boolean (true / false) et char (caractère unique entre apostrophes '')."
            },
            {
                type: 'code_example',
                title: "Déclaration de types primitifs",
                codeLanguage: 'java',
                content: `int age = 25;\ndouble prix = 19.99;\nchar initiale = 'B';\nboolean estActif = true;`
            }
        ],
        starterCode: `public class Main {\n    public static void main(String[] args) {\n        int apprenants = 150;\n        double moyenne = 16.75;\n        char mention = 'A';\n        boolean certifie = true;\n\n        System.out.println("Apprenants : " + apprenants);\n        System.out.println("Moyenne générale : " + moyenne + "/20");\n        System.out.println("Mention : " + mention);\n        System.out.println("Certifié : " + certifie);\n    }\n}`,
        expectedOutput: "Apprenants : 150\nMoyenne générale : 16.75/20\nMention : A\nCertifié : true",
        explication: "Les types primitifs sont stockés directement sur la pile mémoire (Stack) pour des performances maximales.",
        exemple: {
            titre: "int et double",
            code: `int x = 10; double d = 2.5;`,
            resultat: "Variables créées"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Déclarez une variable int score = 100 et affichez-la.",
            codeDepart: `public class Main {\n    public static void main(String[] args) {\n        // int score = ...\n    }\n}`,
            indice: "int score = 100; System.out.println(score);",
            solution: `public class Main {\n    public static void main(String[] args) {\n        int score = 100;\n        System.out.println("Score : " + score);\n    }\n}`
        }
    },
    {
        slug: 'java',
        section: 'Fondations du Langage',
        titre: "Opérateurs et Transtypage (Casting)",
        ordre: 3,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Calculs et conversion de types",
                content: "En Java, diviser deux entiers (5 / 2) produit une division entière (2) ! Pour obtenir un résultat décimal, il faut transtyper (caster) au moins un opérande en double avec (double) 5 / 2. Le casting explicite (int) 3.75 tronque la partie décimale pour donner 3."
            },
            {
                type: 'code_example',
                title: "Casting explicite",
                codeLanguage: 'java',
                content: `double noteDecimale = 14.85;\nint noteTronquee = (int) noteDecimale; // 14\n\nint a = 5, b = 2;\ndouble vraiQuotient = (double) a / b;  // 2.5`
            }
        ],
        starterCode: `public class Main {\n    public static void main(String[] args) {\n        int totalPoints = 95;\n        int nombreTests = 6;\n\n        // Attention à la division entière !\n        double moyenne = (double) totalPoints / nombreTests;\n        System.out.println("Moyenne calculée avec cast : " + moyenne);\n        \n        double prix = 89.99;\n        int prixArrondi = (int) prix;\n        System.out.println("Prix tronqué : " + prixArrondi + " €");\n    }\n}`,
        expectedOutput: "Moyenne calculée avec cast : 15.833333333333334\nPrix tronqué : 89 €",
        explication: "Le transtypage explicite (type) valeur informe le compilateur que vous acceptez la perte éventuelle de précision.",
        exemple: {
            titre: "Casting",
            code: `int n = (int) 9.99; System.out.println(n);`,
            resultat: "9"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Calculez la division exacte de 7 par 2 en castant en (double).",
            codeDepart: `public class Main {\n    public static void main(String[] args) {\n        // System.out.println((double) 7 / 2);\n    }\n}`,
            indice: "System.out.println((double) 7 / 2);",
            solution: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("7 / 2 = " + ((double) 7 / 2));\n    }\n}`
        }
    },
    {
        slug: 'java',
        section: 'Fondations du Langage',
        titre: "La Classe String et Manipulation de Texte",
        ordre: 4,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Des chaînes d'objets immuables",
                content: "En Java, String n'est pas un type primitif mais un objet (avec majuscule). Une chaîne est immuable. Les méthodes indispensables sont length(), toUpperCase(), contains(), substring(debut, fin) et equals() pour comparer le contenu !"
            },
            {
                type: 'warning',
                title: "Ne comparez jamais deux Strings avec ==",
                content: "L'opérateur == compare l'adresse mémoire des objets ! Utilisez toujours chaine1.equals(chaine2) pour tester l'égalité du contenu texte."
            }
        ],
        starterCode: `public class Main {\n    public static void main(String[] args) {\n        String langage = "Java SE 21";\n\n        System.out.println("Longueur : " + langage.length());\n        System.out.println("Majuscules : " + langage.toUpperCase());\n        System.out.println("Contient 'Java' ? " + langage.contains("Java"));\n        System.out.println("Extrait (0 à 4) : " + langage.substring(0, 4));\n        \n        String s1 = new String("test");\n        System.out.println("Comparaison correcte avec .equals : " + s1.equals("test"));\n    }\n}`,
        expectedOutput: "Longueur : 10\nMajuscules : JAVA SE 21\nContient 'Java' ? true\nExtrait (0 à 4) : Java\nComparaison correcte avec .equals : true",
        explication: "equals() compare les caractères un par un.",
        exemple: {
            titre: "equals",
            code: `"abc".equals("abc")`,
            resultat: "true"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Affichez la première lettre d'une chaîne avec .charAt(0).",
            codeDepart: `public class Main {\n    public static void main(String[] args) {\n        String mot = "Programmation";\n        // System.out.println(mot.charAt(0));\n    }\n}`,
            indice: "System.out.println(mot.charAt(0));",
            solution: `public class Main {\n    public static void main(String[] args) {\n        String mot = "Programmation";\n        System.out.println("Première lettre : " + mot.charAt(0));\n    }\n}`
        }
    },
    {
        slug: 'java',
        section: 'Fondations du Langage',
        titre: "Structures Conditionnelles (if, else if, else)",
        ordre: 5,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Contrôler la logique décisionnelle",
                content: "Les conditions en Java évaluent impérativement une expression booléenne entre parenthèses if (condition). Les opérateurs logiques sont && (ET), || (OU) et ! (NON)."
            },
            {
                type: 'code_example',
                title: "Condition classique",
                codeLanguage: 'java',
                content: `int age = 19;\nif (age >= 18) {\n    System.out.println("Accès validé");\n} else {\n    System.out.println("Accès refusé");\n}`
            }
        ],
        starterCode: `public class Main {\n    public static void main(String[] args) {\n        int note = 16;\n\n        if (note >= 18) {\n            System.out.println("Mention : Félicitations du jury !");\n        } else if (note >= 14) {\n            System.out.println("Mention : Bien");\n        } else if (note >= 10) {\n            System.out.println("Mention : Passable");\n        } else {\n            System.out.println("Mention : Non admis");\n        }\n    }\n}`,
        expectedOutput: "Mention : Bien",
        explication: "Les accolades {} sont recommandées même pour une seule instruction afin d'éviter les bugs de lecture.",
        exemple: {
            titre: "if",
            code: `if (10 > 5) System.out.println("Vrai");`,
            resultat: "Vrai"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Testez si un nombre est positif avec if (n > 0).",
            codeDepart: `public class Main {\n    public static void main(String[] args) {\n        int n = 15;\n        // testez si n > 0\n    }\n}`,
            indice: "if (n > 0) System.out.println('Positif');",
            solution: `public class Main {\n    public static void main(String[] args) {\n        int n = 15;\n        if (n > 0) {\n            System.out.println("Nombre positif");\n        }\n    }\n}`
        }
    },
    {
        slug: 'java',
        section: 'Boucles & Tableaux',
        titre: "L'Instruction switch et Cas Multiples",
        ordre: 6,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Aiguillage à choix multiples",
                content: "L'instruction switch teste une variable contre une série de valeurs case. N'oubliez pas le mot-clé break sous peine d'exécuter tous les blocs suivants (fall-through)."
            },
            {
                type: 'code_example',
                title: "Structure switch en Java",
                codeLanguage: 'java',
                content: `int niveau = 2;\nswitch (niveau) {\n    case 1: System.out.println("Débutant"); break;\n    case 2: System.out.println("Intermédiaire"); break;\n    default: System.out.println("Avancé");\n}`
            }
        ],
        starterCode: `public class Main {\n    public static void main(String[] args) {\n        String statut = "EN_COURS";\n\n        switch (statut) {\n            case "EN_ATTENTE":\n                System.out.println("Le traitement est en file d'attente...");\n                break;\n            case "EN_COURS":\n                System.out.println("Compilation et exécution du code en cours...");\n                break;\n            case "TERMINE":\n                System.out.println("Exercice validé avec succès !");\n                break;\n            default:\n                System.out.println("Statut inconnu");\n        }\n    }\n}`,
        expectedOutput: "Compilation et exécution du code en cours...",
        explication: "Depuis Java 7, les chaînes String sont acceptées dans les instructions switch.",
        exemple: {
            titre: "switch",
            code: `switch (1) { case 1: System.out.println("Un"); break; }`,
            resultat: "Un"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez un case pour 'ERREUR' affichant 'Échec de compilation'.",
            codeDepart: `// Ajoutez case "ERREUR": dans le switch`,
            indice: `case "ERREUR": System.out.println("Échec"); break;`,
            solution: `case "ERREUR":\n    System.out.println("Échec de compilation");\n    break;`
        }
    },
    {
        slug: 'java',
        section: 'Boucles & Tableaux',
        titre: "Les Boucles classiques (for, while, do-while)",
        ordre: 7,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Répéter des blocs d'instructions",
                content: "La boucle for (int i = 0; i < N; i++) s'utilise pour les itérations indexées. while (condition) continue tant que la condition est vérifiée. do { ... } while (condition); garantit que le bloc s'exécute au moins une fois."
            },
            {
                type: 'code_example',
                title: "Boucle for et while",
                codeLanguage: 'java',
                content: `for (int i = 1; i <= 3; i++) {\n    System.out.println("Tour " + i);\n}`
            }
        ],
        starterCode: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Puissances de 2 :");\n        int valeur = 1;\n\n        for (int i = 1; i <= 6; i++) {\n            valeur *= 2;\n            System.out.println("2^" + i + " = " + valeur);\n        }\n    }\n}`,
        expectedOutput: "Puissances de 2 :\n2^1 = 2\n2^2 = 4\n2^3 = 8\n2^4 = 16\n2^5 = 32\n2^6 = 64",
        explication: "La variable de boucle i déclarée dans le for n'existe qu'à l'intérieur de la boucle (portée locale).",
        exemple: {
            titre: "for",
            code: `for (int i=0; i<2; i++) System.out.println(i);`,
            resultat: "0\n1"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Écrivez une boucle for qui affiche les nombres de 1 à 3.",
            codeDepart: `public class Main {\n    public static void main(String[] args) {\n        // Boucle for ici\n    }\n}`,
            indice: "for (int i = 1; i <= 3; i++) System.out.println(i);",
            solution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            System.out.println("Nombre : " + i);\n        }\n    }\n}`
        }
    },
    {
        slug: 'java',
        section: 'Boucles & Tableaux',
        titre: "La Boucle for-each (Enhanced For Loop)",
        ordre: 8,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Parcourir simplement tableaux et collections",
                content: "Introduite en Java 5, la boucle for (Type element : tableau) élimine le besoin de gérer manuellement un index compteur i. Elle évite tout risque d'erreur d'indice ArrayIndexOutOfBoundsException."
            },
            {
                type: 'code_example',
                title: "Boucle for-each",
                codeLanguage: 'java',
                content: `String[] langages = { "HTML", "CSS", "JS", "Java" };\nfor (String lang : langages) {\n    System.out.println("Langage : " + lang);\n}`
            }
        ],
        starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[] notes = { 15, 18, 12, 19, 14 };\n        int somme = 0;\n\n        for (int note : notes) {\n            somme += note;\n        }\n\n        double moyenne = (double) somme / notes.length;\n        System.out.println("Total des points : " + somme);\n        System.out.println("Moyenne calculée : " + moyenne);\n    }\n}`,
        expectedOutput: "Total des points : 78\nMoyenne calculée : 15.6",
        explication: "tableau.length donne la taille du tableau.",
        exemple: {
            titre: "for-each",
            code: `for (int x : new int[]{1, 2}) System.out.println(x);`,
            resultat: "1\n2"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Parcourez un tableau de prénoms String[] avec une boucle for-each.",
            codeDepart: `public class Main {\n    public static void main(String[] args) {\n        String[] amis = { "Bassim", "Ali" };\n        // for-each\n    }\n}`,
            indice: "for (String ami : amis) System.out.println(ami);",
            solution: `public class Main {\n    public static void main(String[] args) {\n        String[] amis = { "Bassim", "Ali" };\n        for (String ami : amis) {\n            System.out.println("Ami : " + ami);\n        }\n    }\n}`
        }
    },
    {
        slug: 'java',
        section: 'Boucles & Tableaux',
        titre: "Tableaux à une Dimension (Arrays [])",
        ordre: 9,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Collections de taille fixe en mémoire",
                content: "Un tableau en Java a une taille fixe immuable définie à l'allocation avec new Type[taille]. Les cases sont initialisées par défaut à 0 pour les nombres, false pour les booléens et null pour les objets."
            },
            {
                type: 'code_example',
                title: "Création et modification de tableau",
                codeLanguage: 'java',
                content: `int[] tab = new int[3]; // Taille 3\ntab[0] = 10;\ntab[1] = 20;\ntab[2] = 30;`
            }
        ],
        starterCode: `import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] entiers = { 50, 10, 40, 20, 30 };\n\n        System.out.println("Tableau initial : " + Arrays.toString(entiers));\n        \n        // Tri avec la classe utilitaire java.util.Arrays\n        Arrays.sort(entiers);\n        System.out.println("Tableau trié : " + Arrays.toString(entiers));\n        System.out.println("Premier élément : " + entiers[0]);\n    }\n}`,
        expectedOutput: "Tableau initial : [50, 10, 40, 20, 30]\nTableau trié : [10, 20, 30, 40, 50]\nPremier élément : 10",
        explication: "Arrays.toString() affiche proprement le contenu du tableau entre crochets.",
        exemple: {
            titre: "Indexation",
            code: `int[] a = {1, 2}; System.out.println(a[1]);`,
            resultat: "2"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Modifiez la première case entiers[0] = 99 et affichez-la.",
            codeDepart: `// entiers[0] = 99;`,
            indice: "entiers[0] = 99; System.out.println(entiers[0]);",
            solution: `entiers[0] = 99;\nSystem.out.println("Nouvelle valeur : " + entiers[0]);`
        }
    },
    {
        slug: 'java',
        section: 'Boucles & Tableaux',
        titre: "Tableaux Multidimensionnels (Matrices [][])",
        ordre: 10,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Grilles et tableaux de tableaux",
                content: "Un tableau à deux dimensions int[][] mat = new int[lignes][colonnes] représente une matrice. On y accède par deux indices : mat[i][j]."
            },
            {
                type: 'code_example',
                title: "Matrice 2x2",
                codeLanguage: 'java',
                content: `int[][] grille = {\n    { 1, 2 },\n    { 3, 4 }\n};\nSystem.out.println(grille[0][1]); // 2`
            }
        ],
        starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[][] matrice = {\n            { 1, 2, 3 },\n            { 4, 5, 6 },\n            { 7, 8, 9 }\n        };\n\n        System.out.println("Affichage de la grille 3x3 :");\n        for (int i = 0; i < matrice.length; i++) {\n            for (int j = 0; j < matrice[i].length; j++) {\n                System.out.print(matrice[i][j] + " ");\n            }\n            System.out.println(); // Saut de ligne\n        }\n    }\n}`,
        expectedOutput: "Affichage de la grille 3x3 :\n1 2 3 \n4 5 6 \n7 8 9 ",
        explication: "Des boucles imbriquées parcourent naturellement les lignes et les colonnes.",
        exemple: {
            titre: "2D Array",
            code: `int[][] m = {{1, 2}}; System.out.println(m[0][0]);`,
            resultat: "1"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Affichez l'élément central matrice[1][1] (le chiffre 5).",
            codeDepart: `// System.out.println(matrice[1][1]);`,
            indice: "System.out.println(matrice[1][1]);",
            solution: `System.out.println("Centre : " + matrice[1][1]);`
        }
    },
    {
        slug: 'java',
        section: 'Méthodes & Programmation Orientée Objet',
        titre: "Définition de Méthodes et Valeur de Retour",
        ordre: 11,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Organiser les traitements en sous-programmes",
                content: "Une méthode comprend un modificateur d'accès (public/private), un statut (static pour une fonction autonome sans objet), un type de retour (int, String, ou void si aucun retour), un nom et des paramètres."
            },
            {
                type: 'code_example',
                title: "Méthode statique",
                codeLanguage: 'java',
                content: `public static int additionner(int a, int b) {\n    return a + b;\n}`
            }
        ],
        starterCode: `public class Main {\n    public static int calculerCarre(int x) {\n        return x * x;\n    }\n\n    public static boolean estMajeur(int age) {\n        return age >= 18;\n    }\n\n    public static void main(String[] args) {\n        System.out.println("Carré de 9 : " + calculerCarre(9));\n        System.out.println("Âge 20 est majeur ? " + estMajeur(20));\n        System.out.println("Âge 15 est majeur ? " + estMajeur(15));\n    }\n}`,
        expectedOutput: "Carré de 9 : 81\nÂge 20 est majeur ? true\nÂge 15 est majeur ? false",
        explication: "Le mot-clé static permet d'appeler la méthode directement sans instancier d'objet avec new.",
        exemple: {
            titre: "Méthode",
            code: `static void bonjour() { System.out.println("Salut"); }`,
            resultat: "Affiche Salut"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Créez une méthode statique cube(int x) qui retourne x * x * x.",
            codeDepart: `// public static int cube(int x) { ... }`,
            indice: "public static int cube(int x) { return x * x * x; }",
            solution: `public static int cube(int x) {\n    return x * x * x;\n}`
        }
    },
    {
        slug: 'java',
        section: 'Méthodes & Programmation Orientée Objet',
        titre: "Surcharge de Méthodes (Method Overloading)",
        ordre: 12,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Un même nom pour des signatures différentes",
                content: "En Java, vous pouvez déclarer plusieurs méthodes portant exactement le même nom dans une même classe, à condition que le nombre ou le type de leurs paramètres soit différent. C'est le polymorphisme statique à la compilation."
            },
            {
                type: 'code_example',
                title: "Surcharge de la méthode addition",
                codeLanguage: 'java',
                content: `static int add(int a, int b) { return a + b; }\nstatic double add(double a, double b) { return a + b; }\nstatic int add(int a, int b, int c) { return a + b + c; }`
            }
        ],
        starterCode: `public class Main {\n    public static int multiplier(int a, int b) {\n        return a * b;\n    }\n\n    public static double multiplier(double a, double b) {\n        return a * b;\n    }\n\n    public static void main(String[] args) {\n        System.out.println("Entiers (4 x 5) : " + multiplier(4, 5));\n        System.out.println("Décimaux (2.5 x 4.0) : " + multiplier(2.5, 4.0));\n    }\n}`,
        expectedOutput: "Entiers (4 x 5) : 20\nDécimaux (2.5 x 4.0) : 10.0",
        explication: "Le compilateur choisit automatiquement la bonne version selon les arguments passés.",
        exemple: {
            titre: "Overload",
            code: `static void p(int i) {}\nstatic void p(String s) {}`,
            resultat: "Surcharge valide"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez une surcharge multiplier(int a, int b, int c) qui multiplie 3 entiers.",
            codeDepart: `// public static int multiplier(int a, int b, int c) { ... }`,
            indice: "public static int multiplier(int a, int b, int c) { return a * b * c; }",
            solution: `public static int multiplier(int a, int b, int c) {\n    return a * b * c;\n}`
        }
    },
    {
        slug: 'java',
        section: 'Méthodes & Programmation Orientée Objet',
        titre: "Classes, Objets et Instanciation avec new",
        ordre: 13,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "L'essence de Java : les classes",
                content: "Une classe définit l'état (les champs / variables d'instance) et le comportement (les méthodes). On instancie un objet concret à partir d'une classe grâce au mot-clé new."
            },
            {
                type: 'code_example',
                title: "Création d'un objet",
                codeLanguage: 'java',
                content: `class Personne {\n    String nom;\n    int age;\n}\n\nPersonne p = new Personne();\np.nom = "Alice";`
            }
        ],
        starterCode: `class Robot {\n    String nom;\n    int batterie;\n\n    void afficherStatut() {\n        System.out.println("Robot " + nom + " | Niveau de batterie : " + batterie + "%");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Robot r1 = new Robot();\n        r1.nom = "Atlas";\n        r1.batterie = 95;\n\n        Robot r2 = new Robot();\n        r2.nom = "Spot";\n        r2.batterie = 70;\n\n        r1.afficherStatut();\n        r2.afficherStatut();\n    }\n}`,
        expectedOutput: "Robot Atlas | Niveau de batterie : 95%\nRobot Spot | Niveau de batterie : 70%",
        explication: "Chaque objet a sa propre copie indépendante des champs d'instance.",
        exemple: {
            titre: "new",
            code: `Robot r = new Robot();`,
            resultat: "Nouvelle instance allouée en mémoire"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Créez un troisième robot 'Cyber' avec 100% de batterie.",
            codeDepart: `// Robot r3 = new Robot(); ...`,
            indice: "Robot r3 = new Robot(); r3.nom = 'Cyber'; r3.batterie = 100; r3.afficherStatut();",
            solution: `Robot r3 = new Robot();\nr3.nom = "Cyber";\nr3.batterie = 100;\nr3.afficherStatut();`
        }
    },
    {
        slug: 'java',
        section: 'Méthodes & Programmation Orientée Objet',
        titre: "Constructeurs et la Référence this",
        ordre: 14,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Initialiser proprement les objets",
                content: "Le constructeur est une méthode spéciale portant le nom exact de la classe, sans type de retour. Il s'exécute automatiquement lors de l'appel à new. Le mot-clé this désigne l'instance actuelle pour différencier les champs des arguments."
            },
            {
                type: 'code_example',
                title: "Constructeur avec this",
                codeLanguage: 'java',
                content: `class Voiture {\n    String marque;\n    Voiture(String marque) {\n        this.marque = marque;\n    }\n}`
            }
        ],
        starterCode: `class CompteBancaire {\n    String titulaire;\n    double solde;\n\n    CompteBancaire(String titulaire, double soldeInitial) {\n        this.titulaire = titulaire;\n        this.solde = soldeInitial;\n    }\n\n    void deposer(double montant) {\n        this.solde += montant;\n        System.out.println("Dépôt de " + montant + "€ effectué. Nouveau solde : " + this.solde + "€");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        CompteBancaire compte = new CompteBancaire("Bassim", 500.0);\n        compte.deposer(150.0);\n    }\n}`,
        expectedOutput: "Dépôt de 150.0€ effectué. Nouveau solde : 650.0€",
        explication: "Si aucun constructeur n'est défini, Java crée un constructeur par défaut sans argument.",
        exemple: {
            titre: "Constructeur",
            code: `class A { A() { System.out.println("Init"); } }`,
            resultat: "Init affiché à l'instanciation"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Déposez 200€ supplémentaires sur le compte.",
            codeDepart: `// compte.deposer(200.0);`,
            indice: "compte.deposer(200.0);",
            solution: `compte.deposer(200.0);`
        }
    },
    {
        slug: 'java',
        section: 'Méthodes & Programmation Orientée Objet',
        titre: "Encapsulation : private, public & Getters / Setters",
        ordre: 15,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Protéger et contrôler l'accès aux données",
                content: "L'encapsulation consiste à rendre les champs private (inaccessibles de l'extérieur) et à fournir des méthodes d'accès publiques : getters pour lire et setters pour modifier avec validation."
            },
            {
                type: 'code_example',
                title: "Pattern Getter et Setter",
                codeLanguage: 'java',
                content: `class Profil {\n    private int age;\n    public int getAge() { return age; }\n    public void setAge(int age) {\n        if (age >= 0) this.age = age;\n    }\n}`
            }
        ],
        starterCode: `class UtilisateurSecurise {\n    private String email;\n\n    public UtilisateurSecurise(String email) {\n        this.setEmail(email);\n    }\n\n    public String getEmail() {\n        return this.email;\n    }\n\n    public void setEmail(String email) {\n        if (email != null && email.contains("@")) {\n            this.email = email;\n        } else {\n            System.out.println("Format d'email invalide rejeté !");\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        UtilisateurSecurise user = new UtilisateurSecurise("contact@sbcode.com");\n        System.out.println("Email enregistré : " + user.getEmail());\n\n        // Test d'un email invalide\n        user.setEmail("adresse_sans_arobase");\n    }\n}`,
        expectedOutput: "Email enregistré : contact@sbcode.com\nFormat d'email invalide rejeté !",
        explication: "Les setters protègent la cohérence des données internes de l'objet.",
        exemple: {
            titre: "Getter",
            code: `public String getNom() { return nom; }`,
            resultat: "Lecture contrôlée"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Changez l'email avec user.setEmail('nouveau@test.fr') et affichez-le.",
            codeDepart: `// user.setEmail("nouveau@test.fr");`,
            indice: "user.setEmail('nouveau@test.fr'); System.out.println(user.getEmail());",
            solution: `user.setEmail("nouveau@test.fr");\nSystem.out.println("Nouvel email : " + user.getEmail());`
        }
    },
    {
        slug: 'java',
        section: 'POO Avancée & Architecture',
        titre: "L'Héritage (extends) et le Mot-clé super",
        ordre: 16,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Étendre les fonctionnalités d'une classe",
                content: "Le mot-clé extends permet à une classe fille de dériver d'une classe mère. super(...) appelle le constructeur de la classe parente. En Java, l'héritage multiple de classes est interdit (une seule classe mère directe)."
            },
            {
                type: 'code_example',
                title: "Héritage simple",
                codeLanguage: 'java',
                content: `class Employe {\n    String nom;\n    Employe(String nom) { this.nom = nom; }\n}\n\nclass Manager extends Employe {\n    Manager(String nom) { super(nom); }\n}`
            }
        ],
        starterCode: `class Vehicule {\n    protected String marque;\n\n    Vehicule(String marque) {\n        this.marque = marque;\n    }\n\n    void klaxonner() {\n        System.out.println("Tut tut !");\n    }\n}\n\nclass VoitureElectrique extends Vehicule {\n    private int autonomieKm;\n\n    VoitureElectrique(String marque, int autonomieKm) {\n        super(marque); // Appel au constructeur de Vehicule\n        this.autonomieKm = autonomieKm;\n    }\n\n    void afficherDetails() {\n        System.out.println("Marque : " + marque + " | Autonomie : " + autonomieKm + " km");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        VoitureElectrique ve = new VoitureElectrique("Tesla", 520);\n        ve.klaxonner();\n        ve.afficherDetails();\n    }\n}`,
        expectedOutput: "Tut tut !\nMarque : Tesla | Autonomie : 520 km",
        explication: "Le modificateur protected permet l'accès aux classes filles dans la même arborescence.",
        exemple: {
            titre: "extends",
            code: `class B extends A {}`,
            resultat: "B est un A"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Instanciez une VoitureElectrique('Renault', 300) et affichez ses détails.",
            codeDepart: `// VoitureElectrique v2 = ...`,
            indice: "VoitureElectrique v2 = new VoitureElectrique('Renault', 300); v2.afficherDetails();",
            solution: `VoitureElectrique v2 = new VoitureElectrique("Renault", 300);\nv2.afficherDetails();`
        }
    },
    {
        slug: 'java',
        section: 'POO Avancée & Architecture',
        titre: "Polymorphisme et Redéfinition (@Override)",
        ordre: 17,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Le même message, des comportements différents",
                content: "Le polymorphisme permet de traiter des objets enfants comme des instances de leur classe parente. L'annotation @Override indique explicitement au compilateur qu'une méthode remplace celle de la classe mère."
            },
            {
                type: 'code_example',
                title: "Tableau polymorphique",
                codeLanguage: 'java',
                content: `class Animal { void crier() { System.out.println("Cri"); } }\nclass Chat extends Animal { @Override void crier() { System.out.println("Miaou"); } }\n\nAnimal a = new Chat();\na.crier(); // Miaou`
            }
        ],
        starterCode: `class Forme {\n    double aire() { return 0.0; }\n}\n\nclass Carre extends Forme {\n    double cote;\n    Carre(double c) { this.cote = c; }\n    @Override\n    double aire() { return cote * cote; }\n}\n\nclass Cercle extends Forme {\n    double rayon;\n    Cercle(double r) { this.rayon = r; }\n    @Override\n    double aire() { return Math.PI * rayon * rayon; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Forme[] formes = { new Carre(5), new Cercle(3) };\n\n        for (Forme f : formes) {\n            System.out.printf("Aire de la forme : %.2f%n", f.aire());\n        }\n    }\n}`,
        expectedOutput: "Aire de la forme : 25.00\nAire de la forme : 28.27",
        explication: "Le polymorphisme résout dynamiquement la bonne méthode à l'exécution (liaison tardive).",
        exemple: {
            titre: "@Override",
            code: `@Override public String toString() { return "Objet"; }`,
            resultat: "Redéfinition propre"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez un Carre(10) au tableau et observez le calcul automatique de son aire (100).",
            codeDepart: `// Forme[] formes = { ... };`,
            indice: "new Carre(10)",
            solution: `Forme grandCarre = new Carre(10);\nSystem.out.println("Aire grand carré : " + grandCarre.aire());`
        }
    },
    {
        slug: 'java',
        section: 'POO Avancée & Architecture',
        titre: "Classes Abstraites et Interfaces (implements)",
        ordre: 18,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Définir des contrats stricts",
                content: "Une interface définit un ensemble de méthodes qu'une classe s'engage à implémenter via le mot-clé implements. Une classe abstraite abstract ne peut pas être instanciée directement mais peut contenir du code partagé."
            },
            {
                type: 'code_example',
                title: "Interface et implémentation",
                codeLanguage: 'java',
                content: `interface Connectable {\n    void connecter();\n}\n\nclass Serveur implements Connectable {\n    public void connecter() {\n        System.out.println("Connecté");\n    }\n}`
            }
        ],
        starterCode: `interface Executable {\n    void executer();\n}\n\nclass TacheCompilation implements Executable {\n    @Override\n    public void executer() {\n        System.out.println("-> Compilation du code Java avec javac terminée.");\n    }\n}\n\nclass TacheExecution implements Executable {\n    @Override\n    public void executer() {\n        System.out.println("-> Lancement de la Machine Virtuelle Java (JVM)...");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Executable[] pipeline = { new TacheCompilation(), new TacheExecution() };\n        \n        for (Executable tache : pipeline) {\n            tache.executer();\n        }\n    }\n}`,
        expectedOutput: "-> Compilation du code Java avec javac terminée.\n-> Lancement de la Machine Virtuelle Java (JVM)...",
        explication: "Une classe peut implémenter plusieurs interfaces (implements A, B, C).",
        exemple: {
            titre: "interface",
            code: `interface Volant { void voler(); }`,
            resultat: "Contrat de vol"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Déclarez une classe TacheNettoyage qui implémente Executable.",
            codeDepart: `// class TacheNettoyage implements Executable { ... }`,
            indice: "class TacheNettoyage implements Executable { public void executer() { System.out.println('Nettoyé'); } }",
            solution: `class TacheNettoyage implements Executable {\n    public void executer() {\n        System.out.println("-> Nettoyage des fichiers temporaires.");\n    }\n}`
        }
    },
    {
        slug: 'java',
        section: 'POO Avancée & Architecture',
        titre: "Gestion des Exceptions avec try, catch, finally",
        ordre: 19,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Traitement robuste des anomalies",
                content: "Lorsqu'une erreur survient, Java jette (throw) un objet Exception. Le bloc try entoure le code à risque, catch attrape l'anomalie, et finally s'exécute quoi qu'il arrive."
            },
            {
                type: 'code_example',
                title: "Attraper une exception",
                codeLanguage: 'java',
                content: `try {\n    int zero = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println("Erreur mathématique : " + e.getMessage());\n} finally {\n    System.out.println("Toujours exécuté");\n}`
            }
        ],
        starterCode: `public class Main {\n    public static void main(String[] args) {\n        String chaineTest = "123a";\n\n        try {\n            System.out.println("Tentative de conversion de '" + chaineTest + "'...");\n            int nombre = Integer.parseInt(chaineTest);\n            System.out.println("Nombre converti : " + nombre);\n        } catch (NumberFormatException e) {\n            System.out.println("Exception attrapée : Impossible de convertir en entier !");\n        } finally {\n            System.out.println("Bloc finally : Nettoyage des ressources.");\n        }\n    }\n}`,
        expectedOutput: "Tentative de conversion de '123a'...\nException attrapée : Impossible de convertir en entier !\nBloc finally : Nettoyage des ressources.",
        explication: "Integer.parseInt() lève une NumberFormatException si la chaîne contient des lettres.",
        exemple: {
            titre: "try/catch",
            code: `try { int[] a = new int[0]; int x = a[1]; } catch(Exception e) { System.out.println("Erreur"); }`,
            resultat: "Erreur"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Testez avec une chaîne valide '456' et observez le résultat.",
            codeDepart: `String chaineTest = "456";`,
            indice: "Remplacez '123a' par '456'",
            solution: `String chaineValide = "456";\nint n = Integer.parseInt(chaineValide);\nSystem.out.println("Résultat valide : " + n);`
        }
    },
    {
        slug: 'java',
        section: 'POO Avancée & Architecture',
        titre: "Les Collections Java : ArrayList et HashMap",
        ordre: 20,
        language: 'java',
        contentBlocks: [
            {
                type: 'text',
                title: "Listes dynamiques et Tables d'association",
                content: "Les tableaux natifs de Java sont de taille fixe. Le framework de collections offre ArrayList<T> (tableau dynamique redimensionnable) et HashMap<K, V> (dictionnaire clé/valeur ultra-rapide)."
            },
            {
                type: 'code_example',
                title: "ArrayList et HashMap",
                codeLanguage: 'java',
                content: `import java.util.*;\n\nList<String> list = new ArrayList<>();\nlist.add("Java");\n\nMap<String, Integer> map = new HashMap<>();\nmap.put("Port", 3000);\nSystem.out.println(map.get("Port"));`
            }
        ],
        starterCode: `import java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class Main {\n    public static void main(String[] args) {\n        // 1. Démonstration de ArrayList\n        ArrayList<String> cours = new ArrayList<>();\n        cours.add("HTML");\n        cours.add("CSS");\n        cours.add("JavaScript");\n        cours.add("Python");\n        cours.add("Java");\n\n        System.out.println("Nombre de cours : " + cours.size());\n        System.out.println("Tous les cours : " + cours);\n\n        // 2. Démonstration de HashMap\n        HashMap<String, String> capitales = new HashMap<>();\n        capitales.put("France", "Paris");\n        capitales.put("Maroc", "Rabat");\n        capitales.put("Japon", "Tokyo");\n\n        System.out.println("Capitale du Maroc : " + capitales.get("Maroc"));\n    }\n}`,
        expectedOutput: "Nombre de cours : 5\nTous les cours : [HTML, CSS, JavaScript, Python, Java]\nCapitale du Maroc : Rabat",
        explication: "size() donne le nombre d'éléments, get() récupère la valeur associée.",
        exemple: {
            titre: "ArrayList",
            code: `List<Integer> l = new ArrayList<>(); l.add(10); System.out.println(l.get(0));`,
            resultat: "10"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez 'Canada' -> 'Ottawa' dans la map capitales et affichez-la.",
            codeDepart: `// capitales.put("Canada", "Ottawa");`,
            indice: "capitales.put('Canada', 'Ottawa'); System.out.println(capitales.get('Canada'));",
            solution: `capitales.put("Canada", "Ottawa");\nSystem.out.println("Capitale du Canada : " + capitales.get("Canada"));`
        }
    }
];
