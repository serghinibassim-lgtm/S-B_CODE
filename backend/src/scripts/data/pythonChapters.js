// 20 Chapitres Essentiels pour le cours Python
export const pythonChapters = [
    {
        slug: 'python',
        section: 'Fondamentaux de Python',
        titre: "Syntaxe, Indentation & Premier Programme",
        ordre: 1,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "La philosophie de Python",
                content: "Python est réputé pour sa clarté syntaxique. Contrairement à d'autres langages qui utilisent des accolades {}, Python utilise l'indentation (généralement 4 espaces) pour délimiter les blocs de code. Les commentaires débutent par un dièse #."
            },
            {
                type: 'code_example',
                title: "Premier script Python",
                codeLanguage: 'python',
                content: `# Mon premier script Python\nnom = "Bassim"\nprint("Bonjour", nom)\nprint("Bienvenue sur la plateforme S-B_CODE !")`
            },
            {
                type: 'tip',
                title: "Attention à l'indentation",
                content: "Ne mélangez jamais les tabulations et les espaces. Configurez votre éditeur pour convertir la touche Tab en 4 espaces."
            }
        ],
        starterCode: `# Débuter avec Python\nlangage = "Python"\nversion = "3.14"\n\nprint(f"Bienvenue dans l'environnement {langage} {version} !")\nprint("Le code s'exécute directement sur le serveur.")`,
        expectedOutput: "Bienvenue dans l'environnement Python 3.14 !\nLe code s'exécute directement sur le serveur.",
        explication: "print() est la fonction intégrée pour afficher des messages dans la console.",
        exemple: {
            titre: "Hello",
            code: `print("Hello World")`,
            resultat: "Hello World"
        },
        tryYourSelf: {
            titre: "Exercice pratique",
            consigne: "Affichez votre prénom et votre objectif d'apprentissage avec print().",
            codeDepart: `# Écrivez votre code ici`,
            indice: `print("Je m'appelle ... et j'apprends Python")`,
            solution: `print("Je m'appelle Bassim et je maîtrise Python !")`
        }
    },
    {
        slug: 'python',
        section: 'Fondamentaux de Python',
        titre: "Variables et Typage Dynamique",
        ordre: 2,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Pas besoin de déclarer les types",
                content: "En Python, le typage est dynamique et fort : vous n'avez pas besoin d'indiquer le type lors de la déclaration, Python le déduit automatiquement. Les 4 types primitifs fondamentaux sont int (entier), float (décimal), str (chaîne) et bool (True ou False)."
            },
            {
                type: 'code_example',
                title: "Inspection des types avec type()",
                codeLanguage: 'python',
                content: `x = 42          # int\npi = 3.14       # float\nmessage = "Dev" # str\nactif = True    # bool (avec majuscule)\n\nprint(type(x))\nprint(type(pi))`
            }
        ],
        starterCode: `titre_cours = "Formation Python Complète"\nnombre_chapitres = 20\ntaux_reussite = 98.5\nest_certifiant = True\n\nprint("Type de titre_cours :", type(titre_cours))\nprint("Type de nombre_chapitres :", type(nombre_chapitres))\nprint("Type de taux_reussite :", type(taux_reussite))\nprint("Type de est_certifiant :", type(est_certifiant))`,
        expectedOutput: "Type de titre_cours : <class 'str'>\nType de nombre_chapitres : <class 'int'>\nType de taux_reussite : <class 'float'>\nType de est_certifiant : <class 'bool'>",
        explication: "type() permet de vérifier le type d'une variable à l'exécution.",
        exemple: {
            titre: "bool",
            code: `en_ligne = False; print(type(en_ligne))`,
            resultat: "<class 'bool'>"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Créez une variable temperature = 37.2 et affichez son type.",
            codeDepart: `# Déclarez temperature et inspectez son type`,
            indice: "temperature = 37.2; print(type(temperature))",
            solution: `temperature = 37.2\nprint("Type de temperature :", type(temperature))`
        }
    },
    {
        slug: 'python',
        section: 'Fondamentaux de Python',
        titre: "Opérations Arithmétiques et Conversions de Type",
        ordre: 3,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Calculs et puissances",
                content: "Python gère les calculs arithmétiques standards, ainsi que la division entière // (sans décimale), le modulo % et la puissance **. Pour convertir des types (casting), utilisez int(), float() ou str()."
            },
            {
                type: 'code_example',
                title: "Opérations avancées",
                codeLanguage: 'python',
                content: `print(7 // 2) # Division entière : 3\nprint(7 % 2)  # Reste : 1\nprint(2 ** 8) # 2 puissance 8 : 256\n\nage_texte = "20"\nage_nombre = int(age_texte) + 5 # 25`
            }
        ],
        starterCode: `a = 17\nb = 5\n\nprint("Division normale :", a / b)\nprint("Division entière :", a // b)\nprint("Reste (Modulo) :", a % b)\nprint("Puissance (2^10) :", 2 ** 10)`,
        expectedOutput: "Division normale : 3.4\nDivision entière : 3\nReste (Modulo) : 2\nPuissance (2^10) : 1024",
        explication: "** remplace avantageusement la fonction pow() des autres langages.",
        exemple: {
            titre: "Conversion",
            code: `prix = float("19.99"); print(prix * 2)`,
            resultat: "39.98"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Calculez 3 puissance 4 avec l'opérateur **.",
            codeDepart: `# Calculez 3 puissance 4`,
            indice: "print(3 ** 4)",
            solution: `resultat = 3 ** 4\nprint("3^4 =", resultat)`
        }
    },
    {
        slug: 'python',
        section: 'Fondamentaux de Python',
        titre: "Manipulation de Chaînes & F-Strings",
        ordre: 4,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Le formatage moderne avec les f-strings",
                content: "Les f-strings (introduites en Python 3.6) préfixées par 'f' permettent d'intégrer des expressions directement entre accolades {}. Les chaînes supportent également des méthodes puissantes comme upper(), lower(), strip() et split()."
            },
            {
                type: 'code_example',
                title: "Exemple de F-String et formatage",
                codeLanguage: 'python',
                content: `utilisateur = "Bassim"\nscore = 19.4567\nprint(f"Bravo {utilisateur.upper()}, votre score est {score:.2f}/20")`
            }
        ],
        starterCode: `produit = "MacBook Pro M3"\nprix_ht = 1899.00\ntva = 0.20\nprix_ttc = prix_ht * (1 + tva)\n\nprint(f"Article : {produit}")\nprint(f"Prix TTC formaté : {prix_ttc:.2f} €")\nprint(f"Majuscules : {produit.upper()}")`,
        expectedOutput: "Article : MacBook Pro M3\nPrix TTC formaté : 2278.80 €\nMajuscules : MACBOOK PRO M3",
        explication: "{valeur:.2f} arrondit automatiquement un nombre à 2 décimales.",
        exemple: {
            titre: "f-string",
            code: `x = 5; print(f"Le double est {x * 2}")`,
            resultat: "Le double est 10"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Créez une f-string affichant 'Bonjour [nom], vous avez [age] ans'.",
            codeDepart: `nom = "Sarah"\nage = 22\n# Votre print avec f-string ici`,
            indice: `print(f"Bonjour {nom}, vous avez {age} ans")`,
            solution: `nom = "Sarah"\nage = 22\nprint(f"Bonjour {nom}, vous avez {age} ans")`
        }
    },
    {
        slug: 'python',
        section: 'Fondamentaux de Python',
        titre: "Structures Conditionnelles : if, elif, else",
        ordre: 5,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Tester des conditions",
                content: "La structure conditionnelle en Python utilise if, elif (contraction de else if) et else. Les opérateurs logiques s'écrivent en toutes lettres : and, or, not (contrairement à && et || en JS/Java)."
            },
            {
                type: 'code_example',
                title: "Logique conditionnelle",
                codeLanguage: 'python',
                content: `age = 20\npermis = True\n\nif age >= 18 and permis:\n    print("Autorisé à conduire")\nelif age >= 18 and not permis:\n    print("En cours d'apprentissage")\nelse:\n    print("Trop jeune")`
            }
        ],
        starterCode: `temperature = 22\n\nif temperature > 30:\n    print("Il fait très chaud ☀️")\nelif temperature >= 20:\n    print("Le climat est idéal et tempéré 🌤️")\nelif temperature >= 10:\n    print("Un peu frais, prévoyez une veste 🧥")\nelse:\n    print("Il fait froid ❄️")`,
        expectedOutput: "Le climat est idéal et tempéré 🌤️",
        explication: "L'alignement par indentation définit strictement quel code appartient au bloc.",
        exemple: {
            titre: "if simple",
            code: `if 5 > 2: print("Vrai")`,
            resultat: "Vrai"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Écrivez une condition qui teste si un nombre est positif, négatif ou nul.",
            codeDepart: `nombre = -8\n# if / elif / else`,
            indice: "if nombre > 0: ... elif nombre < 0: ... else: ...",
            solution: `nombre = -8\nif nombre > 0:\n    print("Positif")\nelif nombre < 0:\n    print("Négatif")\nelse:\n    print("Zéro")`
        }
    },
    {
        slug: 'python',
        section: 'Boucles & Fonctions',
        titre: "La Boucle for et la Fonction range()",
        ordre: 6,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Parcourir des séquences et intervalles",
                content: "La boucle for de Python itère directement sur les éléments d'une séquence. range(debut, fin, pas) génère une suite de nombres (la borne supérieure est toujours exclue !)."
            },
            {
                type: 'code_example',
                title: "Utilisation de range()",
                codeLanguage: 'python',
                content: `# De 0 à 4\nfor i in range(5):\n    print(i)\n\n# De 10 à 30 de 5 en 5\nfor i in range(10, 31, 5):\n    print(i)`
            }
        ],
        starterCode: `print("Compter les nombres pairs de 2 à 10 :")\n\nfor i in range(2, 11, 2):\n    print(f"-> Nombre pair : {i}")`,
        expectedOutput: "Compter les nombres pairs de 2 à 10 :\n-> Nombre pair : 2\n-> Nombre pair : 4\n-> Nombre pair : 6\n-> Nombre pair : 8\n-> Nombre pair : 10",
        explication: "range(2, 11, 2) commence à 2, s'arrête avant 11, par pas de 2.",
        exemple: {
            titre: "range",
            code: `for i in range(3): print(i)`,
            resultat: "0\n1\n2"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Affichez la table de multiplication de 6 de 1 à 5 avec range(1, 6).",
            codeDepart: `for i in range(1, 6):\n    # print(...)`,
            indice: "print(f'6 x {i} = {6 * i}')",
            solution: `for i in range(1, 6):\n    print(f"6 x {i} = {6 * i}")`
        }
    },
    {
        slug: 'python',
        section: 'Boucles & Fonctions',
        titre: "La Boucle while et Mots-clés break & continue",
        ordre: 7,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Répéter sous condition dynamique",
                content: "while répète son bloc tant que la condition reste True. break interrompt immédiatement la boucle, et continue saute au tour de boucle suivant sans exécuter la suite."
            },
            {
                type: 'code_example',
                title: "Contrôle de flux dans une boucle",
                codeLanguage: 'python',
                content: `compteur = 0\nwhile True:\n    compteur += 1\n    if compteur == 3:\n        continue # Saute le chiffre 3\n    if compteur > 5:\n        break    # Arrête la boucle\n    print(compteur)`
            }
        ],
        starterCode: `solde = 100\nretrait = 25\nretraits_effectues = 0\n\nwhile solde >= retrait:\n    solde -= retrait\n    retraits_effectues += 1\n    print(f"Retrait #{retraits_effectues} de {retrait}€ effectué. Solde restant : {solde}€")\n\nprint("Fonds insuffisants pour un nouveau retrait.")`,
        expectedOutput: "Retrait #1 de 25€ effectué. Solde restant : 75€\nRetrait #2 de 25€ effectué. Solde restant : 50€\nRetrait #3 de 25€ effectué. Solde restant : 25€\nRetrait #4 de 25€ effectué. Solde restant : 0€\nFonds insuffisants pour un nouveau retrait.",
        explication: "Attention à toujours modifier la variable de condition pour éviter les boucles infinies.",
        exemple: {
            titre: "while",
            code: `x = 3\nwhile x > 0: print(x); x -= 1`,
            resultat: "3\n2\n1"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Écrivez une boucle while qui compte de 1 à 3.",
            codeDepart: `i = 1\nwhile i <= 3:\n    # print et incrémentation`,
            indice: "print(i); i += 1",
            solution: `i = 1\nwhile i <= 3:\n    print(i)\n    i += 1`
        }
    },
    {
        slug: 'python',
        section: 'Boucles & Fonctions',
        titre: "Définition de Fonctions avec def et return",
        ordre: 8,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Modulariser son code",
                content: "Le mot-clé def introduit une fonction. Les arguments sont définis entre parenthèses et return spécifie la valeur de sortie. Si aucun return n'est présent, la fonction renvoie implicitement None."
            },
            {
                type: 'code_example',
                title: "Fonction de calcul",
                codeLanguage: 'python',
                content: `def calculer_tva(montant_ht, taux=0.20):\n    \"\"\"Calcule le montant de la TVA.\"\"\"\n    return montant_ht * taux\n\nprint(calculer_tva(100)) # 20.0`
            }
        ],
        starterCode: `def convertir_celsius_en_fahrenheit(celsius):\n    return (celsius * 9/5) + 32\n\ntemperatures_c = [0, 20, 37, 100]\n\nfor temp in temperatures_c:\n    temp_f = convertir_celsius_en_fahrenheit(temp)\n    print(f"{temp}°C équivaut à {temp_f:.1f}°F")`,
        expectedOutput: "0°C équivaut à 32.0°F\n20°C équivaut à 68.0°F\n37°C équivaut à 98.6°F\n100°C équivaut à 212.0°F",
        explication: "Les docstrings entre triples guillemets documentent le rôle de la fonction.",
        exemple: {
            titre: "Fonction def",
            code: `def carre(x): return x * x\nprint(carre(5))`,
            resultat: "25"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Créez une fonction multiplier(a, b) qui retourne a * b et affichez multiplier(6, 7).",
            codeDepart: `# def multiplier(a, b): ...`,
            indice: "def multiplier(a, b): return a * b",
            solution: `def multiplier(a, b):\n    return a * b\n\nprint("6 x 7 =", multiplier(6, 7))`
        }
    },
    {
        slug: 'python',
        section: 'Boucles & Fonctions',
        titre: "Arguments Flexibles : *args et **kwargs",
        ordre: 9,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Accepter un nombre variable de paramètres",
                content: "*args capture un nombre arbitraire d'arguments positionnels sous forme de tuple. **kwargs (keyword arguments) capture les arguments nommés sous forme de dictionnaire."
            },
            {
                type: 'code_example',
                title: "Fonction ultra-flexible",
                codeLanguage: 'python',
                content: `def afficher_infos(titre, *notes, **details):\n    print(f"Titre : {titre}")\n    print(f"Notes : {notes}")\n    print(f"Détails : {details}")\n\nafficher_infos("Exam", 15, 18, 12, matiere="Python", mention=True)`
            }
        ],
        starterCode: `def somme_illimitee(*nombres):\n    total = sum(nombres)\n    return total\n\nprint("Somme de 3 nombres :", somme_illimitee(10, 20, 30))\nprint("Somme de 6 nombres :", somme_illimitee(1, 2, 3, 4, 5, 6))`,
        expectedOutput: "Somme de 3 nombres : 60\nSomme de 6 nombres : 21",
        explication: "sum() est une fonction native très rapide pour additionner des itérables.",
        exemple: {
            titre: "*args",
            code: `def f(*a): print(len(a))\nf(1, 2, 3)`,
            resultat: "3"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Créez une fonction moyenne(*notes) qui retourne sum(notes) / len(notes).",
            codeDepart: `def moyenne(*notes):\n    # votre calcul`,
            indice: "return sum(notes) / len(notes)",
            solution: `def moyenne(*notes):\n    return sum(notes) / len(notes)\n\nprint("Moyenne :", moyenne(12, 14, 16))`
        }
    },
    {
        slug: 'python',
        section: 'Boucles & Fonctions',
        titre: "Fonctions Lambda & Programmation Fonctionnelle",
        ordre: 10,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Fonctions anonymes en une ligne",
                content: "Les fonctions lambda permettent de créer de petites fonctions jetables sans nom avec la syntaxe lambda arguments: expression. Elles sont couramment utilisées avec map(), filter() ou sorted()."
            },
            {
                type: 'code_example',
                title: "Tri personnalisé avec lambda",
                codeLanguage: 'python',
                content: `etudiants = [("Bassim", 18), ("Sarah", 15), ("Marc", 19)]\n# Trier par la note (deuxième élément)\netudiants_tries = sorted(etudiants, key=lambda e: e[1], reverse=True)\nprint(etudiants_tries)`
            }
        ],
        starterCode: `nombres = [1, 2, 3, 4, 5]\n\n# Doubler les nombres avec map et lambda\ndoubles = list(map(lambda x: x * 2, nombres))\n\n# Filtrer les pairs\npairs = list(filter(lambda x: x % 2 == 0, nombres))\n\nprint("Nombres originaux :", nombres)\nprint("Nombres doublés :", doubles)\nprint("Nombres pairs :", pairs)`,
        expectedOutput: "Nombres originaux : [1, 2, 3, 4, 5]\nNombres doublés : [2, 4, 6, 8, 10]\nNombres pairs : [2, 4]",
        explication: "map et filter renvoient des itérateurs générateurs, convertis en liste avec list().",
        exemple: {
            titre: "lambda",
            code: `carre = lambda x: x**2; print(carre(6))`,
            resultat: "36"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Créez une lambda pour calculer le triple d'un nombre (x * 3).",
            codeDepart: `triple = lambda x: # votre formule\nprint(triple(7))`,
            indice: "triple = lambda x: x * 3",
            solution: `triple = lambda x: x * 3\nprint("Triple de 7 :", triple(7))`
        }
    },
    {
        slug: 'python',
        section: 'Collections de Données',
        titre: "Les Listes : Indexation, Découpage (Slicing) et Méthodes",
        ordre: 11,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "La collection ordonnée et modifiable",
                content: "Les listes s'écrivent avec des crochets []. Le découpage (slicing) [debut:fin:pas] extrait des sous-parties de la liste. L'indexation négative [-1] accède directement au dernier élément !"
            },
            {
                type: 'code_example',
                title: "Slicing puissant",
                codeLanguage: 'python',
                content: `lettres = ['a', 'b', 'c', 'd', 'e']\nprint(lettres[1:4])  # ['b', 'c', 'd']\nprint(lettres[-1])   # 'e' (dernier)\nprint(lettres[::-1]) # Inverser la liste !`
            }
        ],
        starterCode: `langages = ["Python", "JavaScript", "Java", "C++", "Rust"]\n\n# Ajouter à la fin\nlangages.append("Go")\n\n# Trier par ordre alphabétique\nlangages.sort()\n\nprint("Catalogue complet :", langages)\nprint("Les 3 premiers :", langages[:3])\nprint("Le dernier langage :", langages[-1])`,
        expectedOutput: "Catalogue complet : ['C++', 'Go', 'Java', 'JavaScript', 'Python', 'Rust']\nLes 3 premiers : ['C++', 'Go', 'Java']\nLe dernier langage : Rust",
        explication: "append() modifie la liste sur place et ne renvoie rien.",
        exemple: {
            titre: "Slicing",
            code: `t = [1, 2, 3, 4]; print(t[0:2])`,
            resultat: "[1, 2]"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Inversez la liste nombres = [1, 2, 3] avec le slicing [::-1].",
            codeDepart: `nombres = [1, 2, 3]\n# print de la liste inversée`,
            indice: "print(nombres[::-1])",
            solution: `nombres = [1, 2, 3]\nprint("Inversé :", nombres[::-1])`
        }
    },
    {
        slug: 'python',
        section: 'Collections de Données',
        titre: "Les Tuples et le Déballage (Unpacking)",
        ordre: 12,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Des collections immuables et légères",
                content: "Les tuples se définissent avec des parenthèses (). Contrairement aux listes, un tuple ne peut plus être modifié une fois créé (pas de append ou de modification par index). Ils sont plus rapides en mémoire et protègent l'intégrité des données."
            },
            {
                type: 'code_example',
                title: "Déballage de tuple",
                codeLanguage: 'python',
                content: `point = (10, 20)\nx, y = point # Déballage (Unpacking)\nprint(f"X: {x}, Y: {y}")`
            }
        ],
        starterCode: `coordonnees_gps = (48.8566, 2.3522)\nlatitude, longitude = coordonnees_gps\n\nprint(f"Latitude : {latitude}")\nprint(f"Longitude : {longitude}")\nprint("Nombre d'éléments dans le tuple :", len(coordonnees_gps))`,
        expectedOutput: "Latitude : 48.8566\nLongitude : 2.3522\nNombre d'éléments dans le tuple : 2",
        explication: "Une fonction qui renvoie plusieurs valeurs renvoie en réalité un tuple.",
        exemple: {
            titre: "Tuple",
            code: `t = (1, 2); print(t[0])`,
            resultat: "1"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Déballez le tuple rgb = (255, 128, 0) dans r, g, b.",
            codeDepart: `rgb = (255, 128, 0)\n# r, g, b = ...`,
            indice: "r, g, b = rgb; print(r, g, b)",
            solution: `rgb = (255, 128, 0)\nr, g, b = rgb\nprint(f"R: {r}, G: {g}, B: {b}")`
        }
    },
    {
        slug: 'python',
        section: 'Collections de Données',
        titre: "Les Dictionnaires : Clés, Valeurs et Méthodes",
        ordre: 13,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Associer des clés à des valeurs",
                content: "Le dictionnaire dict associe des clés uniques à des valeurs entre accolades {}. La méthode get('cle', defaut) évite les erreurs KeyError si la clé n'existe pas. On itère avec la méthode items()."
            },
            {
                type: 'code_example',
                title: "Manipulation d'un dictionnaire",
                codeLanguage: 'python',
                content: `user = {"nom": "Bassim", "role": "admin"}\nprint(user.get("age", 25)) # Valeur de secours 25\n\nfor cle, valeur in user.items():\n    print(f"{cle} -> {valeur}")`
            }
        ],
        starterCode: `serveur = {\n    "hote": "127.0.0.1",\n    "port": 3000,\n    "ssl": False,\n    "framework": "Express"\n}\n\n# Ajout d'une nouvelle clé\nserveur["base_de_donnees"] = "MongoDB"\n\nprint("Configuration du serveur :")\nfor cle, val in serveur.items():\n    print(f"  • {cle.upper()} : {val}")`,
        expectedOutput: "Configuration du serveur :\n  • HOTE : 127.0.0.1\n  • PORT : 3000\n  • SSL : False\n  • FRAMEWORK : Express\n  • BASE_DE_DONNEES : MongoDB",
        explication: "Les clés d'un dictionnaire doivent être des types immuables (str, int, tuple).",
        exemple: {
            titre: "dict",
            code: `d = {"a": 1}; print(d["a"])`,
            resultat: "1"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Utilisez .get('cle', 'Non renseigné') sur un dictionnaire vide.",
            codeDepart: `d = {}\n# print(d.get(...))`,
            indice: "print(d.get('email', 'Non renseigné'))",
            solution: `d = {}\nprint("Email :", d.get("email", "Non renseigné"))`
        }
    },
    {
        slug: 'python',
        section: 'Collections de Données',
        titre: "Les Ensembles (Sets) et Éléments Uniques",
        ordre: 14,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Supprimer les doublons instantanément",
                content: "Un set {} est une collection non ordonnée d'éléments uniques. Passer une liste dans set() élimine immédiatement tous les doublons. Les sets supportent les opérations mathématiques comme l'union (|) et l'intersection (&)."
            },
            {
                type: 'code_example',
                title: "Opérations ensemblistes",
                codeLanguage: 'python',
                content: `devs_frontend = {"Alice", "Bob", "Charlie"}\ndevs_backend = {"Bob", "David", "Charlie"}\n\n# Qui fait du Fullstack ? (Intersection)\nfullstack = devs_frontend & devs_backend # {'Bob', 'Charlie'}`
            }
        ],
        starterCode: `visiteurs = ["Jean", "Sarah", "Jean", "Bassim", "Sarah", "Alice"]\n\nvisiteurs_uniques = set(visiteurs)\n\nprint("Total visites :", len(visiteurs))\nprint("Visiteurs uniques :", len(visiteurs_uniques))\nprint("Liste dédoublonnée :", sorted(list(visiteurs_uniques)))`,
        expectedOutput: "Total visites : 6\nVisiteurs uniques : 4\nListe dédoublonnée : ['Alice', 'Bassim', 'Jean', 'Sarah']",
        explication: "La recherche d'appartenance ('valeur in set') est instantanée O(1).",
        exemple: {
            titre: "set",
            code: `s = {1, 1, 2}; print(s)`,
            resultat: "{1, 2}"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Trouvez les éléments communs entre {1, 2, 3} et {2, 3, 4} avec l'opérateur &.",
            codeDepart: `s1 = {1, 2, 3}\ns2 = {2, 3, 4}\n# print(s1 & s2)`,
            indice: "print(s1 & s2)",
            solution: `s1 = {1, 2, 3}\ns2 = {2, 3, 4}\nprint("Éléments communs :", s1 & s2)`
        }
    },
    {
        slug: 'python',
        section: 'Collections de Données',
        titre: "Compréhensions de Listes (List Comprehensions)",
        ordre: 15,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "La syntaxe la plus appréciée de Python",
                content: "Une compréhension de liste permet de générer, filtrer et transformer une liste en une seule ligne élégante et ultra-performante : [expression for item in iterable if condition]."
            },
            {
                type: 'code_example',
                title: "Compréhension avec filtre",
                codeLanguage: 'python',
                content: `# Carrés des nombres pairs de 0 à 9\ncarres_pairs = [x**2 for x in range(10) if x % 2 == 0]\nprint(carres_pairs) # [0, 4, 16, 36, 64]`
            }
        ],
        starterCode: `mots = ["python", "javascript", "html", "css", "java"]\n\n# Filtrer les mots de plus de 3 lettres et les mettre en majuscules\nmots_longs = [mot.upper() for mot in mots if len(mot) > 3]\n\nprint("Tous les mots :", mots)\nprint("Mots > 3 lettres en majuscules :", mots_longs)`,
        expectedOutput: "Tous les mots : ['python', 'javascript', 'html', 'css', 'java']\nMots > 3 lettres en majuscules : ['PYTHON', 'JAVASCRIPT', 'HTML', 'JAVA']",
        explication: "Les compréhensions sont plus rapides à l'exécution qu'une boucle for avec append().",
        exemple: {
            titre: "Comprehension",
            code: `[x*2 for x in [1, 2, 3]]`,
            resultat: "[2, 4, 6]"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Créez une liste contenant les carrés de 1 à 5 avec [x**2 for x in range(1, 6)].",
            codeDepart: `# carres = [x**2 ...]`,
            indice: "[x**2 for x in range(1, 6)]",
            solution: `carres = [x**2 for x in range(1, 6)]\nprint("Carrés de 1 à 5 :", carres)`
        }
    },
    {
        slug: 'python',
        section: 'Programmation Avancée & POO',
        titre: "Gestion des Exceptions : try, except, finally",
        ordre: 16,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Éviter les plantages inopinés",
                content: "Lorsqu'une erreur survient, Python lève une exception. Le bloc try intercepte l'erreur, except la traite proprement, et finally s'exécute quoi qu'il arrive (idéal pour libérer des ressources)."
            },
            {
                type: 'code_example',
                title: "Interception spécifique",
                codeLanguage: 'python',
                content: `try:\n    resultat = 10 / 0\nexcept ZeroDivisionError:\n    print("Impossible de diviser par zéro !")\nfinally:\n    print("Nettoyage terminé.")`
            }
        ],
        starterCode: `def diviser_securise(a, b):\n    try:\n        res = a / b\n        return f"Résultat : {res}"\n    except ZeroDivisionError:\n        return "Erreur : Division par zéro impossible."\n    except TypeError:\n        return "Erreur : Nombres requis pour le calcul."\n\nprint(diviser_securise(20, 4))\nprint(diviser_securise(10, 0))\nprint(diviser_securise(10, "deux"))`,
        expectedOutput: "Résultat : 5.0\nErreur : Division par zéro impossible.\nErreur : Nombres requis pour le calcul.",
        explication: "Interceptez toujours des exceptions spécifiques plutôt qu'un except général nu.",
        exemple: {
            titre: "try/except",
            code: `try: int("abc")\nexcept ValueError: print("Erreur conversion")`,
            resultat: "Erreur conversion"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Interceptez un ValueError lors de la conversion de 'bonjour' en int().",
            codeDepart: `try:\n    val = int("bonjour")\nexcept ValueError:\n    # affichez un message`,
            indice: "except ValueError: print('Conversion impossible')",
            solution: `try:\n    val = int("bonjour")\nexcept ValueError:\n    print("Texte non numérique.")`
        }
    },
    {
        slug: 'python',
        section: 'Programmation Avancée & POO',
        titre: "Manipulation de Fichiers & Context Managers (with)",
        ordre: 17,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Fermeture automatique garantie",
                content: "L'instruction with open(...) as f garantit que le fichier sera fermé proprement dès la sortie du bloc, même si une exception survient. Les modes principaux sont 'r' (lecture), 'w' (écriture avec écrasement) et 'a' (ajout à la fin)."
            },
            {
                type: 'code_example',
                title: "Écriture et lecture de fichier",
                codeLanguage: 'python',
                content: `# Écriture\nwith open("test.txt", "w", encoding="utf-8") as f:\n    f.write("Ligne 1\\nLigne 2")\n\n# Lecture\nwith open("test.txt", "r", encoding="utf-8") as f:\n    contenu = f.read()`
            }
        ],
        starterCode: `# Démonstration en mémoire avec io.StringIO pour simuler un fichier\nimport io\n\nfichier_virtuel = io.StringIO()\nfichier_virtuel.write("Ligne 1 : Configuration active\\nLigne 2 : Port 3000\\n")\n\n# Lecture du contenu simulé\nfichier_virtuel.seek(0)\nfor num, ligne in enumerate(fichier_virtuel, 1):\n    print(f"[{num}] {ligne.strip()}")`,
        expectedOutput: "[1] Ligne 1 : Configuration active\n[2] Ligne 2 : Port 3000",
        explication: "Le mot-clé with gère le protocole context manager (__enter__ et __exit__).",
        exemple: {
            titre: "with",
            code: `with open('a.txt', 'w') as f: f.write('OK')`,
            resultat: "Fichier écrit et fermé"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Utilisez .strip() pour supprimer les retours à la ligne superflus d'une chaîne.",
            codeDepart: `chaine = "  Bonjour  \\n"\n# print(chaine.strip())`,
            indice: "print(chaine.strip())",
            solution: `chaine = "  Bonjour  \\n"\nprint(f"Nettoyé : '{chaine.strip()}'")`
        }
    },
    {
        slug: 'python',
        section: 'Programmation Avancée & POO',
        titre: "Programmation Orientée Objet : Classes & __init__",
        ordre: 18,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Créer des modèles personnalisés",
                content: "Une classe est un moule qui définit des attributs et des méthodes. Le constructeur __init__(self, ...) initialise les propriétés de chaque nouvel objet. self fait référence à l'instance courante de l'objet."
            },
            {
                type: 'code_example',
                title: "Définition d'une classe",
                codeLanguage: 'python',
                content: `class Developpeur:\n    def __init__(self, nom, langage):\n        self.nom = nom\n        self.langage = langage\n\n    def coder(self):\n        return f"{self.nom} écrit du code en {self.langage}."`
            }
        ],
        starterCode: `class Utilisateur:\n    def __init__(self, pseudo, email, role="etudiant"):\n        self.pseudo = pseudo\n        self.email = email\n        self.role = role\n\n    def se_presenter(self):\n        return f"Compte {self.pseudo} ({self.role}) - Contact : {self.email}"\n\nu1 = Utilisateur("Bassim", "bassim@sbcode.com", "admin")\nu2 = Utilisateur("Sarah", "sarah@sbcode.com")\n\nprint(u1.se_presenter())\nprint(u2.se_presenter())`,
        expectedOutput: "Compte Bassim (admin) - Contact : bassim@sbcode.com\nCompte Sarah (etudiant) - Contact : sarah@sbcode.com",
        explication: "self doit impérativement être le premier paramètre de toute méthode d'instance.",
        exemple: {
            titre: "Classe simple",
            code: `class A: def __init__(self, v): self.v = v\na = A(10); print(a.v)`,
            resultat: "10"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez une méthode est_admin(self) qui renvoie True si self.role == 'admin'.",
            codeDepart: `class Utilisateur:\n    # ajoutez def est_admin(self):`,
            indice: "def est_admin(self): return self.role == 'admin'",
            solution: `class Utilisateur:\n    def __init__(self, role): self.role = role\n    def est_admin(self):\n        return self.role == "admin"\n\nu = Utilisateur("admin")\nprint("Est admin :", u.est_admin())`
        }
    },
    {
        slug: 'python',
        section: 'Programmation Avancée & POO',
        titre: "POO : Héritage et la Méthode super()",
        ordre: 19,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Réutiliser et spécialiser des classes",
                content: "L'héritage permet à une classe fille de récupérer tous les attributs et méthodes d'une classe parente. La fonction super().__init__(...) appelle le constructeur parent pour éviter la duplication."
            },
            {
                type: 'code_example',
                title: "Classe parente et enfant",
                codeLanguage: 'python',
                content: `class Animal:\n    def __init__(self, nom):\n        self.nom = nom\n\nclass Chien(Animal):\n    def aboyer(self):\n        return f"{self.nom} fait Wouf !"`
            }
        ],
        starterCode: `class Cours:\n    def __init__(self, titre, duree_heures):\n        self.titre = titre\n        self.duree_heures = duree_heures\n\n    def description(self):\n        return f"Cours '{self.titre}' ({self.duree_heures}h)"\n\nclass CoursInteractif(Cours):\n    def __init__(self, titre, duree_heures, editeur):\n        super().__init__(titre, duree_heures)\n        self.editeur = editeur\n\n    def description(self):\n        # Redéfinition (override)\n        return f"{super().description()} avec environnement {self.editeur}"\n\ncours = CoursInteractif("Python", 20, "Monaco Editor")\nprint(cours.description())`,
        expectedOutput: "Cours 'Python' (20h) avec environnement Monaco Editor",
        explication: "super() permet d'enrichir une méthode existante sans réécrire sa logique de base.",
        exemple: {
            titre: "Héritage",
            code: `class B(A): pass`,
            resultat: "B hérite de A"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Instanciez un Cours classique de 15h et affichez sa description.",
            codeDepart: `c = Cours("HTML", 15)\n# print(c.description())`,
            indice: "print(c.description())",
            solution: `c = Cours("HTML", 15)\nprint(c.description())`
        }
    },
    {
        slug: 'python',
        section: 'Programmation Avancée & POO',
        titre: "Modules & la Bibliothèque Standard (math, json, random)",
        ordre: 20,
        language: 'python',
        contentBlocks: [
            {
                type: 'text',
                title: "Batteries Incluses dans Python",
                content: "Python est célèbre pour sa philosophie 'Batteries Included' : sa bibliothèque standard regorge de modules natifs puissants comme math (fonctions scientifiques), json (sérialisation de données web) ou random (génération aléatoire)."
            },
            {
                type: 'code_example',
                title: "Modules intégrés",
                codeLanguage: 'python',
                content: `import json\nimport math\n\ndonnees = {"nom": "Python", "version": 3.14}\ntexte_json = json.dumps(donnees) # Conversion en JSON string\nprint(math.sqrt(16))            # Racine carrée : 4.0`
            }
        ],
        starterCode: `import math\nimport json\n\n# Calcul mathématique\nrayon = 5\naire_cercle = math.pi * (rayon ** 2)\n\n# Création et encodage JSON\nrapport = {\n    "statut": "Succès",\n    "calcul": {\n        "rayon": rayon,\n        "aire": round(aire_cercle, 2)\n    }\n}\n\njson_output = json.dumps(rapport, indent=2, ensure_ascii=False)\nprint("Données formatées en JSON :")\nprint(json_output)`,
        expectedOutput: "Données formatées en JSON :\n{\n  \"statut\": \"Succès\",\n  \"calcul\": {\n    \"rayon\": 5,\n    \"aire\": 78.54\n  }\n}",
        explication: "json.dumps() avec indent=2 formate les données pour une lecture humaine parfaite.",
        exemple: {
            titre: "math",
            code: `import math; print(math.ceil(4.2))`,
            resultat: "5"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Importez random et affichez un entier aléatoire entre 1 et 10 avec random.randint(1, 10).",
            codeDepart: `import random\n# print(random.randint(1, 10))`,
            indice: "print(random.randint(1, 10))",
            solution: `import random\nprint("Nombre aléatoire :", random.randint(1, 10))`
        }
    }
];
