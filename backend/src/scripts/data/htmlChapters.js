// 20 Chapitres Essentiels pour le cours HTML
export const htmlChapters = [
    {
        slug: 'html',
        section: 'Fondations du Web',
        titre: "Structure Minimale d'une Page HTML",
        ordre: 1,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "L'anatomie d'un document HTML",
                content: "Tout document HTML moderne commence par la déclaration <!DOCTYPE html>, suivie de la balise racine <html> qui englobe deux parties essentielles : le <head> (métadonnées, titre de l'onglet) et le <body> (contenu visible)."
            },
            {
                type: 'code_example',
                title: "Structure standard HTML5",
                codeLanguage: 'html',
                content: `<!DOCTYPE html>\n<html lang="fr">\n<head>\n  <meta charset="UTF-8">\n  <title>Ma Première Page</title>\n</head>\n<body>\n  <h1>Bienvenue sur le Web !</h1>\n  <p>Ceci est le corps visible de la page.</p>\n</body>\n</html>`
            },
            {
                type: 'tip',
                title: "Bonne pratique",
                content: "N'oubliez jamais l'attribut lang=\"fr\" sur la balise <html> : il aide les lecteurs d'écran et les moteurs de recherche à identifier la langue du document."
            }
        ],
        starterCode: `<!DOCTYPE html>\n<html lang="fr">\n<head>\n  <title>Mon Site</title>\n</head>\n<body>\n  <h1>Bonjour à tous !</h1>\n  <p>Commencez à modifier ce texte dans l'éditeur.</p>\n</body>\n</html>`,
        expectedOutput: "Rendu visuel d'un titre h1 et d'un paragraphe.",
        explication: "Découvrez la structure de base obligatoire de tout document HTML.",
        exemple: {
            titre: "Page minimale",
            code: `<h1>Bonjour le monde</h1>`,
            resultat: "Bonjour le monde"
        },
        tryYourSelf: {
            titre: "Exercice pratique",
            consigne: "Ajoutez un second paragraphe <p> avec votre prénom.",
            codeDepart: `<h1>Mon Titre</h1>\n<p>Premier paragraphe</p>`,
            indice: "Utilisez <p>Mon texte</p>",
            solution: `<h1>Mon Titre</h1>\n<p>Premier paragraphe</p>\n<p>Je m'appelle Bassim</p>`
        }
    },
    {
        slug: 'html',
        section: 'Fondations du Web',
        titre: "Hiérarchie des Titres (h1 à h6)",
        ordre: 2,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Structurer avec des niveaux de titres",
                content: "HTML propose 6 niveaux de titres, de <h1> (le plus important) à <h6> (le sous-titre le plus spécifique). Les titres créent le plan sémantique de votre document."
            },
            {
                type: 'code_example',
                title: "Exemple de hiérarchie logique",
                codeLanguage: 'html',
                content: `<h1>Guide du Développeur</h1>\n<h2>1. Les Bases du Frontend</h2>\n<h3>1.1 Le langage HTML</h3>\n<h3>1.2 Les styles avec CSS</h3>\n<h2>2. Le Backend</h2>`
            },
            {
                type: 'warning',
                title: "Règle SEO & Accessibilité",
                content: "Il ne doit y avoir qu'un seul <h1> par page web. Ne sautez jamais de niveau (par exemple passer de <h1> directement à <h3>)."
            }
        ],
        starterCode: `<h1>Titre Principal (H1)</h1>\n<h2>Section Importante (H2)</h2>\n<h3>Sous-section (H3)</h3>\n<h4>Détail technique (H4)</h4>`,
        expectedOutput: "4 niveaux de titres avec des tailles de police décroissantes.",
        explication: "Les balises h1 à h6 définissent la hiérarchie du document.",
        exemple: {
            titre: "Titres",
            code: `<h1>Titre 1</h1>\n<h2>Titre 2</h2>`,
            resultat: "Titre 1 en grand, Titre 2 en moyen."
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Créez une structure avec un h1, deux h2 et un h3 sous le premier h2.",
            codeDepart: `<!-- Créez votre plan ici -->`,
            indice: "<h1>Cours</h1> <h2>Chapitre 1</h2> <h3>Leçon 1.1</h3> <h2>Chapitre 2</h2>",
            solution: `<h1>Mon Cours</h1>\n<h2>Chapitre 1</h2>\n<h3>Leçon 1</h3>\n<h2>Chapitre 2</h2>`
        }
    },
    {
        slug: 'html',
        section: 'Fondations du Web',
        titre: "Paragraphes, Sauts de ligne & Typographie",
        ordre: 3,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Mettre en forme le texte",
                content: "La balise <p> délimite des paragraphes. La balise auto-fermante <br> force un saut de ligne. <strong> indique une importance forte (gras sémantique) tandis que <em> indique une emphase (italique sémantique)."
            },
            {
                type: 'code_example',
                title: "Exemple de texte enrichi",
                codeLanguage: 'html',
                content: `<p>Apprendre le code demande de la <strong>rigueur</strong> et de la <em>patience</em>.</p>\n<p>Adresse :<br>10 rue du Web<br>75000 Paris</p>`
            },
            {
                type: 'note',
                title: "Sémantique vs Visuel",
                content: "Privilégiez <strong> et <em> plutôt que <b> et <i> : ils apportent un sens compris par les lecteurs d'écran pour malvoyants."
            }
        ],
        starterCode: `<p>Le langage <strong>HTML</strong> structure vos pages web.<br>Il est <em>simple</em> et intuitif à prendre en main.</p>`,
        expectedOutput: "Paragraphe avec mots en gras, italique et retour à la ligne.",
        explication: "Les balises textuelles de base permettent d'aérer et de donner du relief à votre contenu.",
        exemple: {
            titre: "Formatage",
            code: `<p>Texte <strong>important</strong> et <em>en emphase</em>.</p>`,
            resultat: "Texte important et en emphase."
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Écrivez une phrase contenant un mot en <strong> et un mot en <em> avec un saut de ligne <br>.",
            codeDepart: `<p>Mon texte ici</p>`,
            indice: "Utilisez <strong>mot</strong> et <em>autre mot</em>",
            solution: `<p>Ce texte est <strong>crucial</strong>.<br>Lisez-le avec <em>attention</em>.</p>`
        }
    },
    {
        slug: 'html',
        section: 'Fondations du Web',
        titre: "Liens Hypertextes et Navigation",
        ordre: 4,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "L'essence même du Web : les liens",
                content: "La balise <a> (ancre) permet de créer un lien cliquable vers une autre page ou un site externe grâce à l'attribut href. L'attribut target=\"_blank\" ouvre la page dans un nouvel onglet."
            },
            {
                type: 'code_example',
                title: "Exemple de liens",
                codeLanguage: 'html',
                content: `<a href="https://developer.mozilla.org" target="_blank" rel="noopener">Consulter la documentation MDN</a>\n<br>\n<a href="#section2">Aller directement à la section 2</a>`
            },
            {
                type: 'tip',
                title: "Sécurité",
                content: "Lorsque vous utilisez target=\"_blank\", ajoutez toujours rel=\"noopener noreferrer\" pour éviter les failles de sécurité de navigation."
            }
        ],
        starterCode: `<h2>Ressources indispensables</h2>\n<p>\n  Visitez <a href="https://google.com" target="_blank" rel="noopener">Google</a> pour faire vos recherches.\n</p>`,
        expectedOutput: "Lien cliquable ouvrant Google dans un nouvel onglet.",
        explication: "L'élément <a> connecte vos pages entre elles et au monde entier.",
        exemple: {
            titre: "Lien simple",
            code: `<a href="https://example.com">Visiter le site</a>`,
            resultat: "Lien bleu souligné"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Créez un lien qui pointe vers 'https://wikipedia.org' avec le texte 'Encyclopédie'.",
            codeDepart: `<!-- Créez votre lien ici -->`,
            indice: `<a href="URL">Texte</a>`,
            solution: `<a href="https://wikipedia.org" target="_blank">Encyclopédie</a>`
        }
    },
    {
        slug: 'html',
        section: 'Fondations du Web',
        titre: "Images et Attribut d'Accessibilité (alt)",
        ordre: 5,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Afficher des images",
                content: "La balise auto-fermante <img /> insère une image. Elle requiert deux attributs fondamentaux : src (source de l'image) et alt (texte alternatif décrivant l'image)."
            },
            {
                type: 'code_example',
                title: "Insertion d'une image",
                codeLanguage: 'html',
                content: `<img src="https://picsum.photos/300/200" alt="Paysage aléatoire" width="300" height="200">`
            },
            {
                type: 'warning',
                title: "L'attribut alt est obligatoire",
                content: "Le texte alt s'affiche si l'image ne charge pas et est lu à voix haute par les technologies d'assistance pour personnes aveugles."
            }
        ],
        starterCode: `<h3>Galerie de photos</h3>\n<img src="https://picsum.photos/350/200" alt="Exemple de photo de démonstration" style="border-radius: 8px;">`,
        expectedOutput: "Affichage d'une image avec des coins arrondis.",
        explication: "L'élément img enrichit vos pages avec des illustrations et graphiques.",
        exemple: {
            titre: "Balise image",
            code: `<img src="https://picsum.photos/200" alt="Image de test">`,
            resultat: "Une image carrée de 200px"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez une image de dimensions 400x250 avec un texte alt pertinent.",
            codeDepart: `<!-- Insérez votre balise img -->`,
            indice: `<img src="https://picsum.photos/400/250" alt="...">`,
            solution: `<img src="https://picsum.photos/400/250" alt="Superbe paysage naturel">`
        }
    },
    {
        slug: 'html',
        section: 'Organisation du Contenu',
        titre: "Listes à Puces et Listes Numérotées",
        ordre: 6,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Organiser des données séquentielles",
                content: "Pour une liste non-ordonnée (à puces), utilisez <ul>. Pour une liste ordonnée (numérotée de 1 à N), utilisez <ol>. Chaque entrée de la liste est représentée par la balise <li>."
            },
            {
                type: 'code_example',
                title: "Listes ordonnées et non-ordonnées",
                codeLanguage: 'html',
                content: `<h3>Technologies Web :</h3>\n<ul>\n  <li>HTML5</li>\n  <li>CSS3</li>\n  <li>JavaScript</li>\n</ul>\n\n<h3>Étapes de démarrage :</h3>\n<ol>\n  <li>Ouvrir l'éditeur</li>\n  <li>Écrire le code</li>\n  <li>Tester dans le navigateur</li>\n</ol>`
            }
        ],
        starterCode: `<h2>Recette de Crêpes</h2>\n<h3>Ingrédients (ul) :</h3>\n<ul>\n  <li>250g de farine</li>\n  <li>4 œufs</li>\n  <li>500ml de lait</li>\n</ul>\n\n<h3>Préparation (ol) :</h3>\n<ol>\n  <li>Mélanger la farine et les œufs</li>\n  <li>Ajouter le lait progressivement</li>\n  <li>Cuire à la poêle</li>\n</ol>`,
        expectedOutput: "Deux listes : une à puces et une numérotée.",
        explication: "Les listes permettent de structurer et d'énumérer proprement des informations.",
        exemple: {
            titre: "Liste simple",
            code: `<ul><li>Item 1</li><li>Item 2</li></ul>`,
            resultat: "Liste à 2 puces"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Créez une liste ordonnée <ol> avec 3 étapes pour apprendre à coder.",
            codeDepart: `<ol>\n  <!-- Vos <li> ici -->\n</ol>`,
            indice: "Placez <li>Étape</li> dans <ol>",
            solution: `<ol>\n  <li>Apprendre la théorie</li>\n  <li>Pratiquer quotidiennement</li>\n  <li>Créer des projets</li>\n</ol>`
        }
    },
    {
        slug: 'html',
        section: 'Organisation du Contenu',
        titre: "Tableaux de Données Simples",
        ordre: 7,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Afficher des grilles de données",
                content: "Un tableau se définit avec <table>. Chaque ligne est un <tr> (table row). Les cellules d'en-tête sont des <th> (table header, en gras et centrées par défaut), et les cellules normales sont des <td> (table data)."
            },
            {
                type: 'code_example',
                title: "Tableau simple",
                codeLanguage: 'html',
                content: `<table border="1">\n  <tr>\n    <th>Langage</th>\n    <th>Niveau</th>\n  </tr>\n  <tr>\n    <td>HTML</td>\n    <td>Débutant</td>\n  </tr>\n  <tr>\n    <td>JavaScript</td>\n    <td>Intermédiaire</td>\n  </tr>\n</table>`
            }
        ],
        starterCode: `<table border="1" style="width: 100%; border-collapse: collapse; text-align: left;">\n  <tr style="background: #1e293b; color: white;">\n    <th style="padding: 8px;">Produit</th>\n    <th style="padding: 8px;">Prix</th>\n  </tr>\n  <tr>\n    <td style="padding: 8px;">Clavier mécanique</td>\n    <td style="padding: 8px;">89 €</td>\n  </tr>\n  <tr>\n    <td style="padding: 8px;">Souris sans fil</td>\n    <td style="padding: 8px;">45 €</td>\n  </tr>\n</table>`,
        expectedOutput: "Tableau HTML avec 2 colonnes et 2 lignes de données.",
        explication: "Les balises table, tr, th et td permettent d'afficher des données tabulaires.",
        exemple: {
            titre: "Mini tableau",
            code: `<table><tr><th>A</th><th>B</th></tr><tr><td>1</td><td>2</td></tr></table>`,
            resultat: "Tableau de 2x2 cases"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez une troisième ligne pour un 'Écran 4K' à '350 €'.",
            codeDepart: `<!-- Ajoutez un <tr> avec deux <td> -->`,
            indice: "<tr><td>Écran 4K</td><td>350 €</td></tr>",
            solution: `<tr>\n  <td style="padding: 8px;">Écran 4K</td>\n  <td style="padding: 8px;">350 €</td>\n</tr>`
        }
    },
    {
        slug: 'html',
        section: 'Organisation du Contenu',
        titre: "Tableaux Structurés Avancés (thead, tbody, colspan)",
        ordre: 8,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Sémantique et fusion de cellules",
                content: "Les balises <thead>, <tbody> et <tfoot> séparent logiquement la tête, le corps et le pied d'un tableau. L'attribut colspan fusionne plusieurs colonnes horizontalement, et rowspan fusionne verticalement."
            },
            {
                type: 'code_example',
                title: "Fusion avec colspan",
                codeLanguage: 'html',
                content: `<table border="1">\n  <thead>\n    <tr><th>Nom</th><th>Poste</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Sophie</td><td>Développeuse</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><td colspan="2">Total : 1 employé</td></tr>\n  </tfoot>\n</table>`
            }
        ],
        starterCode: `<table border="1" style="width: 100%; border-collapse: collapse;">\n  <thead>\n    <tr style="background: #334155; color: white;">\n      <th>Mois</th>\n      <th>Ventes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td>Janvier</td><td>12 000 €</td></tr>\n    <tr><td>Février</td><td>15 000 €</td></tr>\n  </tbody>\n  <tfoot>\n    <tr style="background: #f1f5f9; font-weight: bold;">\n      <td colspan="2">Total trimestriel : 27 000 €</td>\n    </tr>\n  </tfoot>\n</table>`,
        expectedOutput: "Tableau structuré avec pied de page fusionné sur 2 colonnes.",
        explication: "thead, tbody et tfoot améliorent la lisibilité et l'impression des grands tableaux.",
        exemple: {
            titre: "Fusion",
            code: `<td colspan="2">Cellule large</td>`,
            resultat: "Une cellule qui occupe 2 colonnes"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Modifiez le tfoot pour qu'il affiche la moyenne avec colspan=\"2\".",
            codeDepart: `<tfoot>\n  <tr>\n    <!-- Votre td avec colspan ici -->\n  </tr>\n</tfoot>`,
            indice: `<td colspan="2">Moyenne : 13 500 €</td>`,
            solution: `<tfoot>\n  <tr>\n    <td colspan="2">Moyenne : 13 500 €</td>\n  </tr>\n</tfoot>`
        }
    },
    {
        slug: 'html',
        section: 'Organisation du Contenu',
        titre: "Balises Sémantiques Structurelles",
        ordre: 9,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Donner du sens à la structure HTML5",
                content: "Au lieu d'utiliser des <div> pour tout, HTML5 introduit des éléments sémantiques explicites : <header> (en-tête), <nav> (navigation), <main> (contenu principal unique), <section> (partie thématique), <article> (contenu autonome) et <footer> (pied de page)."
            },
            {
                type: 'code_example',
                title: "Architecture sémantique d'une page",
                codeLanguage: 'html',
                content: `<header>\n  <h1>Mon Blog Tech</h1>\n  <nav>\n    <a href="/">Accueil</a> | <a href="/articles">Articles</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>Pourquoi apprendre HTML en 2026</h2>\n    <p>Le HTML reste le fondement universel...</p>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 - Tous droits réservés.</p>\n</footer>`
            }
        ],
        starterCode: `<header style="border-bottom: 2px solid #2563eb; padding-bottom: 10px;">\n  <h2>Portail Développeur</h2>\n  <nav><a href="#cours">Cours</a> | <a href="#contact">Contact</a></nav>\n</header>\n<main style="padding: 20px 0;">\n  <section>\n    <h3>Section Apprentissage</h3>\n    <p>Le code sémantique facilite le référencement naturel.</p>\n  </section>\n</main>\n<footer style="color: gray; font-size: 12px;">\n  Plateforme S-B CODE\n</footer>`,
        expectedOutput: "Page structurée avec en-tête, navigation, section principale et pied de page.",
        explication: "Les balises sémantiques rendent le code plus clair pour les développeurs et les robots d'indexation.",
        exemple: {
            titre: "Structure",
            code: `<header>Logo</header><main>Contenu</main><footer>Copyright</footer>`,
            resultat: "Squelette ordonné"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez un élément <article> avec un <h4> et un <p> à l'intérieur du <main>.",
            codeDepart: `<main>\n  <!-- Ajoutez l'article ici -->\n</main>`,
            indice: "<article><h4>Titre</h4><p>Texte</p></article>",
            solution: `<main>\n  <article>\n    <h4>Mon premier article</h4>\n    <p>Voici le contenu autonome de mon article.</p>\n  </article>\n</main>`
        }
    },
    {
        slug: 'html',
        section: 'Organisation du Contenu',
        titre: "Conteneurs Génériques : div et span",
        ordre: 10,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Blocs vs Éléments en ligne",
                content: "Lorsque aucune balise sémantique ne convient, on utilise <div> (conteneur de type 'block', qui démarre sur une nouvelle ligne) ou <span> (conteneur de type 'inline', inséré directement au cœur d'une phrase)."
            },
            {
                type: 'code_example',
                title: "Différence entre div et span",
                codeLanguage: 'html',
                content: `<div class="carte" style="background: #f1f5f9; padding: 10px;">\n  <p>Le statut est <span style="color: green; font-weight: bold;">En ligne</span>.</p>\n</div>`
            }
        ],
        starterCode: `<div style="background: #1e293b; color: white; padding: 20px; border-radius: 8px;">\n  <h3>Carte Utilisateur</h3>\n  <p>Rôle : <span style="background: #3b82f6; padding: 2px 6px; border-radius: 4px;">Admin</span></p>\n</div>`,
        expectedOutput: "Boîte sombre avec badge bleu inséré dans la ligne grâce à un span.",
        explication: "div regroupe des blocs entiers, span stylise un fragment de texte en ligne.",
        exemple: {
            titre: "span",
            code: `<p>Un mot en <span style="color: red;">rouge</span>.</p>`,
            resultat: "Un mot en rouge"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Enveloppez le mot 'Actif' dans un span stylisé en vert.",
            codeDepart: `<p>Statut du compte : Actif</p>`,
            indice: `<span style="color: green;">Actif</span>`,
            solution: `<p>Statut du compte : <span style="color: green;">Actif</span></p>`
        }
    },
    {
        slug: 'html',
        section: 'Formulaires & Entrées Utilisateur',
        titre: "Formulaires de Base (form, label, input)",
        ordre: 11,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Collecter des informations",
                content: "La balise <form> encapsule les champs de saisie. Chaque champ <input> doit être lié à son <label> grâce à l'attribut for qui cible l'id de l'input. Cela permet de cliquer sur le texte pour donner le focus au champ !"
            },
            {
                type: 'code_example',
                title: "Liaison label et input",
                codeLanguage: 'html',
                content: `<form action="/submit" method="POST">\n  <label for="pseudo">Votre pseudo :</label>\n  <input type="text" id="pseudo" name="pseudo" placeholder="Ex: dev99">\n  <button type="submit">Valider</button>\n</form>`
            }
        ],
        starterCode: `<form style="display: flex; flex-direction: column; gap: 10px; max-width: 300px;">\n  <label for="nom">Nom complet :</label>\n  <input type="text" id="nom" name="nom" placeholder="Jean Dupont">\n  \n  <button type="submit" style="background: #2563eb; color: white; padding: 8px; border: none; border-radius: 4px;">\n    Envoyer\n  </button>\n</form>`,
        expectedOutput: "Formulaire de saisie vertical avec label, input et bouton.",
        explication: "Associer systématiquement un label à son input est fondamental pour l'accessibilité.",
        exemple: {
            titre: "Champ texte",
            code: `<label for="x">Texte</label><input id="x" type="text">`,
            resultat: "Label cliquable et champ"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez un champ prénom avec son label associé au dessus du bouton.",
            codeDepart: `<form>\n  <!-- Ajoutez le label et l'input prénom ici -->\n</form>`,
            indice: `<label for="prenom">Prénom :</label><input type="text" id="prenom">`,
            solution: `<label for="prenom">Prénom :</label>\n<input type="text" id="prenom" name="prenom">`
        }
    },
    {
        slug: 'html',
        section: 'Formulaires & Entrées Utilisateur',
        titre: "Types d'Inputs Modernes (email, password, number)",
        ordre: 12,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Inputs spécialisés HTML5",
                content: "L'attribut type modifie le comportement du champ : type=\"password\" masque les caractères, type=\"email\" vérifie la présence d'un @, type=\"number\" ouvre un pavé numérique sur mobile, type=\"date\" affiche un calendrier, et type=\"color\" un sélecteur de couleur !"
            },
            {
                type: 'code_example',
                title: "Diversité des types",
                codeLanguage: 'html',
                content: `<input type="email" placeholder="test@mail.com">\n<input type="password" placeholder="Mot de passe">\n<input type="number" min="1" max="100">\n<input type="date">\n<input type="color">`
            }
        ],
        starterCode: `<form style="display: flex; flex-direction: column; gap: 8px; max-width: 320px;">\n  <label>Email :</label>\n  <input type="email" placeholder="vous@exemple.com">\n\n  <label>Mot de passe :</label>\n  <input type="password" placeholder="••••••••">\n\n  <label>Âge :</label>\n  <input type="number" min="18" max="99" value="25">\n\n  <label>Couleur préférée :</label>\n  <input type="color" value="#3b82f6">\n</form>`,
        expectedOutput: "Formulaire complet avec masquage de mot de passe et sélecteur de couleur.",
        explication: "Les types spécialisés améliorent l'expérience utilisateur sur mobile et PC.",
        exemple: {
            titre: "Mot de passe",
            code: `<input type="password" value="secret">`,
            resultat: "Points noirs masqués"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez un champ de type 'date' pour la date de naissance.",
            codeDepart: `<form>\n  <!-- Ajoutez le champ date ici -->\n</form>`,
            indice: `<label>Date de naissance :</label><input type="date">`,
            solution: `<label>Date de naissance :</label>\n<input type="date" name="naissance">`
        }
    },
    {
        slug: 'html',
        section: 'Formulaires & Entrées Utilisateur',
        titre: "Boutons Radio et Cases à Cocher",
        ordre: 13,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Choix exclusif vs Choix multiple",
                content: "type=\"checkbox\" permet de cocher plusieurs options indépendantes. type=\"radio\" permet de choisir une seule option parmi plusieurs : pour que les boutons radio s'excluent mutuellement, ils doivent obligatoirement partager le même attribut name !"
            },
            {
                type: 'code_example',
                title: "Radios et Checkbox",
                codeLanguage: 'html',
                content: `<p>Niveau d'études :</p>\n<input type="radio" id="licence" name="diplome" value="licence">\n<label for="licence">Licence</label>\n\n<input type="radio" id="master" name="diplome" value="master">\n<label for="master">Master</label>\n\n<p>Options :</p>\n<input type="checkbox" id="newsletter" name="news">\n<label for="newsletter">S'abonner à la newsletter</label>`
            }
        ],
        starterCode: `<fieldset style="border: 1px solid #ccc; padding: 15px; border-radius: 8px;">\n  <legend>Mode de livraison</legend>\n  <input type="radio" id="domicile" name="livraison" value="domicile" checked>\n  <label for="domicile">À domicile (48h)</label><br>\n  \n  <input type="radio" id="relais" name="livraison" value="relais">\n  <label for="relais">Point Relais (gratuit)</label><br><br>\n\n  <input type="checkbox" id="cgu" name="cgu">\n  <label for="cgu">J'accepte les conditions générales</label>\n</fieldset>`,
        expectedOutput: "Groupe de boutons radio avec exclusion mutuelle et case à cocher.",
        explication: "Le même attribut name lie les boutons radio ensemble pour n'en sélectionner qu'un.",
        exemple: {
            titre: "Checkbox",
            code: `<input type="checkbox" checked> Coche`,
            resultat: "Case cochée par défaut"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez une troisième option radio 'Express 24h' sous le même name='livraison'.",
            codeDepart: `<!-- Ajoutez le radio Express ici -->`,
            indice: `<input type="radio" id="express" name="livraison"><label for="express">Express</label>`,
            solution: `<input type="radio" id="express" name="livraison" value="express">\n<label for="express">Express 24h</label>`
        }
    },
    {
        slug: 'html',
        section: 'Formulaires & Entrées Utilisateur',
        titre: "Menus Déroulants (select, option, optgroup)",
        ordre: 14,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Sélectionner dans une liste prédéfinie",
                content: "La balise <select> crée un menu déroulant. Chaque choix possible est défini par <option>. On peut regrouper les options thématiquement avec <optgroup>."
            },
            {
                type: 'code_example',
                title: "Menu avec groupes",
                codeLanguage: 'html',
                content: `<select name="langage">\n  <option value="">-- Choisissez un cours --</option>\n  <optgroup label="Frontend">\n    <option value="html">HTML</option>\n    <option value="css">CSS</option>\n    <option value="js">JavaScript</option>\n  </optgroup>\n  <optgroup label="Backend">\n    <option value="py">Python</option>\n    <option value="java">Java</option>\n  </optgroup>\n</select>`
            }
        ],
        starterCode: `<label for="pays">Votre pays de résidence :</label><br><br>\n<select id="pays" name="pays" style="padding: 6px 12px; border-radius: 6px;">\n  <option value="fr">France</option>\n  <option value="ca">Canada</option>\n  <option value="be">Belgique</option>\n  <option value="ch">Suisse</option>\n  <option value="ma" selected>Maroc</option>\n</select>`,
        expectedOutput: "Menu déroulant affichant par défaut l'option 'Maroc' sélectionnée.",
        explication: "L'attribut selected permet de présélectionner une valeur par défaut.",
        exemple: {
            titre: "Select simple",
            code: `<select><option>Option 1</option><option>Option 2</option></select>`,
            resultat: "Menu déroulant à 2 choix"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez l'option 'Sénégal' (value='sn') au menu déroulant.",
            codeDepart: `<select id="pays">\n  <!-- Ajoutez l'option ici -->\n</select>`,
            indice: `<option value="sn">Sénégal</option>`,
            solution: `<option value="sn">Sénégal</option>`
        }
    },
    {
        slug: 'html',
        section: 'Formulaires & Entrées Utilisateur',
        titre: "Zone de Texte Multi-lignes (textarea)",
        ordre: 15,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Saisir de longs paragraphes",
                content: "Contrairement à <input type=\"text\"> qui est strictement mono-ligne, <textarea> permet la saisie de textes longs, comme un message ou un commentaire. Elle accepte les attributs rows (hauteur en lignes) et cols (largeur)."
            },
            {
                type: 'code_example',
                title: "Zone de commentaire",
                codeLanguage: 'html',
                content: `<label for="bio">Votre biographie :</label><br>\n<textarea id="bio" name="bio" rows="4" cols="50" placeholder="Décrivez votre parcours..."></textarea>`
            }
        ],
        starterCode: `<div style="max-width: 400px;">\n  <h3>Laissez-nous un message</h3>\n  <textarea \n    rows="5" \n    style="width: 100%; padding: 10px; border-radius: 8px; font-family: sans-serif;"\n    placeholder="Écrivez votre message ici...">\n  </textarea>\n  <br><br>\n  <button style="background: #10b981; color: white; padding: 8px 16px; border: none; border-radius: 4px;">\n    Publier\n  </button>\n</div>`,
        expectedOutput: "Zone de texte multi-lignes redimensionnable.",
        explication: "textarea prend une balise fermante </textarea> et son texte initial se place entre les deux.",
        exemple: {
            titre: "Textarea",
            code: `<textarea rows="2">Mon texte par défaut</textarea>`,
            resultat: "Boîte de texte haute de 2 lignes"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Définissez un textarea avec rows=\"6\" et un placeholder=\"Votre avis d'expert...\".",
            codeDepart: `<!-- Créez votre textarea ici -->`,
            indice: `<textarea rows="6" placeholder="..."></textarea>`,
            solution: `<textarea rows="6" placeholder="Votre avis d'expert..."></textarea>`
        }
    },
    {
        slug: 'html',
        section: 'Formulaires & Entrées Utilisateur',
        titre: "Validation Native et Attributs de Contrainte",
        ordre: 16,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Valider sans JavaScript",
                content: "HTML5 intègre un puissant moteur de validation automatique grâce à des attributs déclaratifs : required (obligatoire), minlength / maxlength (longueur), min / max (bornes numériques) et pattern (expression régulière regex)."
            },
            {
                type: 'code_example',
                title: "Contraintes strictes",
                codeLanguage: 'html',
                content: `<form>\n  <input type="text" required minlength="3" maxlength="15" placeholder="Pseudo (3-15 car.)">\n  <input type="number" min="0" max="100" required>\n  <button type="submit">Valider</button>\n</form>`
            }
        ],
        starterCode: `<form style="display: flex; flex-direction: column; gap: 10px; max-width: 320px;">\n  <label>Code Postal (5 chiffres obligatoires) :</label>\n  <input type="text" required pattern="[0-9]{5}" placeholder="75001" title="Entrez 5 chiffres">\n  \n  <label>Mot de passe (8 caractères minimum) :</label>\n  <input type="password" required minlength="8" placeholder="Au moins 8 caractères">\n\n  <button type="submit" style="background: #2563eb; color: white; padding: 8px; border: none; border-radius: 4px;">\n    Soumettre le test\n  </button>\n</form>`,
        expectedOutput: "Formulaire qui bloque l'envoi si le format n'est pas respecté.",
        explication: "L'attribut required empêche l'envoi du formulaire si la case est vide.",
        exemple: {
            titre: "Champ requis",
            code: `<input type="text" required>`,
            resultat: "Message d'erreur du navigateur si vide"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez required à un champ email.",
            codeDepart: `<input type="email" placeholder="Email">`,
            indice: `<input type="email" required>`,
            solution: `<input type="email" placeholder="Email" required>`
        }
    },
    {
        slug: 'html',
        section: 'Multimédia & Médias Modernes',
        titre: "Audio et Vidéo HTML5",
        ordre: 17,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Intégration multimédia native",
                content: "Fini les plugins Flash ! Les balises <audio> et <video> lisent des médias directement dans le navigateur. L'attribut controls affiche les boutons lecture, pause et volume."
            },
            {
                type: 'code_example',
                title: "Balise vidéo avec contrôles",
                codeLanguage: 'html',
                content: `<video controls width="320">\n  <source src="video.mp4" type="video/mp4">\n  Votre navigateur ne supporte pas la balise vidéo.\n</video>`
            }
        ],
        starterCode: `<div style="text-align: center; font-family: sans-serif;">\n  <h3>Lecteur Vidéo Démo</h3>\n  <video controls width="100%" style="max-width: 480px; border-radius: 8px;" poster="https://picsum.photos/480/270">\n    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">\n    Votre navigateur ne supporte pas la vidéo HTML5.\n  </video>\n</div>`,
        expectedOutput: "Lecteur vidéo fonctionnel avec affiche miniature et contrôles.",
        explication: "L'attribut poster affiche une image d'attente avant le lancement de la vidéo.",
        exemple: {
            titre: "Audio",
            code: `<audio controls src="audio.mp3"></audio>`,
            resultat: "Barre de lecture sonore"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez l'attribut muted pour couper le son par défaut.",
            codeDepart: `<video controls src="film.mp4"></video>`,
            indice: `<video controls muted src="film.mp4"></video>`,
            solution: `<video controls muted src="film.mp4"></video>`
        }
    },
    {
        slug: 'html',
        section: 'Multimédia & Médias Modernes',
        titre: "Éléments Interactifs : details et summary",
        ordre: 18,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Créer un accordéon sans JavaScript",
                content: "La balise <details> crée un volet repliable nativement. À l'intérieur, <summary> définit le titre cliquable toujours visible. Cliquez dessus pour déplier le contenu !"
            },
            {
                type: 'code_example',
                title: "FAQ en accordéon",
                codeLanguage: 'html',
                content: `<details>\n  <summary>Combien coûte la formation ?</summary>\n  <p>La plateforme est 100% gratuite et open-source.</p>\n</details>`
            }
        ],
        starterCode: `<div style="font-family: sans-serif; max-width: 450px;">\n  <h2>Foire Aux Questions</h2>\n  \n  <details style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px; margin-bottom: 8px;">\n    <summary style="font-weight: bold; cursor: pointer;">Les cours sont-ils adaptés aux débutants ?</summary>\n    <p style="margin-top: 8px; color: #475569;">Oui, chaque chapitre démarre de zéro avec un éditeur de test interactif.</p>\n  </details>\n\n  <details style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px;">\n    <summary style="font-weight: bold; cursor: pointer;">Puis-je exécuter le code en direct ?</summary>\n    <p style="margin-top: 8px; color: #475569;">Oui, grâce à notre intégration de Monaco Editor en temps réel.</p>\n  </details>\n</div>`,
        expectedOutput: "Menu déroulant interactif pliable / dépliable au clic.",
        explication: "L'attribut open sur details permet de laisser le volet ouvert au chargement.",
        exemple: {
            titre: "Volet ouvert",
            code: `<details open><summary>Titre</summary><p>Ouvert</p></details>`,
            resultat: "Volet déplié immédiatement"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Créez un volet <details> avec pour titre 'Voir la solution' et un texte caché.",
            codeDepart: `<!-- Créez le details ici -->`,
            indice: "<details><summary>Voir la solution</summary><p>Solution</p></details>",
            solution: `<details>\n  <summary>Voir la solution</summary>\n  <p>Voici l'explication détaillée.</p>\n</details>`
        }
    },
    {
        slug: 'html',
        section: 'Multimédia & Médias Modernes',
        titre: "Intégration Externe avec les Iframes",
        ordre: 19,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Intégrer une page dans une page",
                content: "La balise <iframe> (Inline Frame) permet d'embarquer un document HTML externe au cœur de la page actuelle (ex: vidéos YouTube, cartes Google Maps ou aperçu de code en bac à sable)."
            },
            {
                type: 'code_example',
                title: "Intégration d'iframe sécurisée",
                codeLanguage: 'html',
                content: `<iframe \n  src="https://example.com" \n  width="100%" \n  height="300" \n  sandbox="allow-scripts" \n  title="Aperçu externe">\n</iframe>`
            }
        ],
        starterCode: `<div style="font-family: sans-serif;">\n  <h3>Aperçu d'une Iframe intégrée</h3>\n  <iframe \n    srcdoc="<h2 style='color: #2563eb;'>Bonjour depuis l'iframe !</h2><p>Ce document est totalement isolé du reste du site.</p>"\n    style="width: 100%; height: 180px; border: 2px dashed #94a3b8; border-radius: 8px;"\n    title="Exemple sandbox">\n  </iframe>\n</div>`,
        expectedOutput: "Cadre isolé affichant le contenu HTML spécifié dans srcdoc.",
        explication: "L'attribut title est indispensable pour l'accessibilité des lecteurs d'écran.",
        exemple: {
            titre: "Iframe",
            code: `<iframe src="https://example.com" title="Test"></iframe>`,
            resultat: "Cadre rectangulaire affichant le site"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Définissez une iframe avec width=\"100%\" et height=\"250\".",
            codeDepart: `<iframe title="Ma frame"></iframe>`,
            indice: `<iframe width="100%" height="250" title="..."></iframe>`,
            solution: `<iframe width="100%" height="250" title="Cadre personnalisé"></iframe>`
        }
    },
    {
        slug: 'html',
        section: 'Multimédia & Médias Modernes',
        titre: "Métadonnées et En-tête du Document (<head>)",
        ordre: 20,
        language: 'html',
        contentBlocks: [
            {
                type: 'text',
                title: "Configurer le document pour les moteurs et réseaux",
                content: "La balise <head> contient des informations invisibles pour l'utilisateur mais capitales pour le navigateur et le référencement : encodage <meta charset=\"UTF-8\">, balise responsive <meta name=\"viewport\">, et balises Open Graph pour les aperçus Facebook/LinkedIn."
            },
            {
                type: 'code_example',
                title: "Un en-tête moderne et complet",
                codeLanguage: 'html',
                content: `<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Plateforme d'apprentissage du code">\n  <title>S-B_CODE | Apprendre à programmer</title>\n  <link rel="icon" href="/favicon.ico">\n</head>`
            }
        ],
        starterCode: `<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="author" content="S-B_CODE">\n  <title>Mon Portfolio Développeur</title>\n</head>\n<body style="font-family: sans-serif; padding: 20px;">\n  <h1>Portfolio Prêt pour la Production</h1>\n  <p>Toutes les métadonnées essentielles sont configurées dans le head.</p>\n</body>\n</html>`,
        expectedOutput: "Document complet avec head professionnel.",
        explication: "La balise viewport garantit que le site s'adapte à la largeur de l'écran des smartphones.",
        exemple: {
            titre: "Description SEO",
            code: `<meta name="description" content="Mon super site">`,
            resultat: "Affiché sous le titre dans les résultats Google"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez une balise meta pour la description de votre choix.",
            codeDepart: `<head>\n  <!-- Ajoutez la balise meta description ici -->\n</head>`,
            indice: `<meta name="description" content="...">`,
            solution: `<meta name="description" content="Cours interactif pour maîtriser HTML">`
        }
    }
];
