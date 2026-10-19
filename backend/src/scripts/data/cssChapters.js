// 20 Chapitres Essentiels pour le cours CSS
export const cssChapters = [
    {
        slug: 'css',
        section: 'Fondations du Style',
        titre: "Syntaxe CSS & Sélecteurs Fondamentaux",
        ordre: 1,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Anatomie d'une règle CSS",
                content: "Une règle CSS se compose d'un sélecteur et d'un bloc de déclarations entre accolades {}. Chaque déclaration est une paire propriété: valeur; terminée par un point-virgule. On sélectionne les balises directement (p), les classes par un point (.bouton) et les identifiants par un dièse (#menu)."
            },
            {
                type: 'code_example',
                title: "Les 3 sélecteurs de base",
                codeLanguage: 'css',
                content: `/* 1. Sélecteur de balise */\nh1 {\n  color: #2563eb;\n}\n\n/* 2. Sélecteur de classe */\n.important {\n  font-weight: bold;\n}\n\n/* 3. Sélecteur d'identifiant */\n#header-principal {\n  background-color: #0f172a;\n}`
            },
            {
                type: 'tip',
                title: "Priorité de spécificité",
                content: "L'identifiant #id est plus fort que la classe .classe, qui est elle-même plus forte que la balise. Privilégiez les classes pour un code réutilisable !"
            }
        ],
        starterCode: `/* Définissez vos styles CSS ici */\n.titre {\n  color: #3b82f6;\n  font-size: 24px;\n  text-align: center;\n}\n\n.btn {\n  background-color: #10b981;\n  color: white;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n}`,
        expectedOutput: "Titre bleu ciel centré et bouton vert arrondi dans l'aperçu.",
        explication: "Apprenez à cibler et styliser n'importe quel élément de votre page web.",
        exemple: {
            titre: "Règle de base",
            code: `.texte { color: crimson; }`,
            resultat: "Texte rouge foncé"
        },
        tryYourSelf: {
            titre: "Exercice pratique",
            consigne: "Changez la couleur de .titre en violet (#8b5cf6).",
            codeDepart: `.titre {\n  color: #3b82f6;\n}`,
            indice: "Remplacez #3b82f6 par #8b5cf6",
            solution: `.titre {\n  color: #8b5cf6;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Fondations du Style',
        titre: "Couleurs et Arrière-plans",
        ordre: 2,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Exprimer des couleurs en CSS",
                content: "Vous pouvez spécifier les couleurs par des noms prédéfinis (red), en hexadécimal (#2563eb), en RGB (rgb(37, 99, 235)) ou en HSL (hsl(217, 91%, 60%)). La fonction rgba() permet d'ajouter un canal alpha pour la transparence."
            },
            {
                type: 'code_example',
                title: "Arrière-plans et dégradés",
                codeLanguage: 'css',
                content: `.carte {\n  background-color: #1e293b;\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.degrade {\n  background: linear-gradient(135deg, #3b82f6, #8b5cf6);\n}`
            }
        ],
        starterCode: `.boite-coloree {\n  background: linear-gradient(to right, #4f46e5, #06b6d4);\n  color: white;\n  padding: 30px;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);\n}`,
        expectedOutput: "Magnifique dégradé de violet vers cyan avec ombre portée.",
        explication: "Les dégradés linéaires apportent une touche visuelle contemporaine.",
        exemple: {
            titre: "Couleur de fond",
            code: `body { background-color: #0f172a; }`,
            resultat: "Fond bleu nuit"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Appliquez un fond semi-transparent noir rgba(0, 0, 0, 0.5) sur .boite-coloree.",
            codeDepart: `.boite-coloree {\n  /* modifiez le background */\n}`,
            indice: "background: rgba(0, 0, 0, 0.5);",
            solution: `.boite-coloree {\n  background: rgba(0, 0, 0, 0.5);\n}`
        }
    },
    {
        slug: 'css',
        section: 'Fondations du Style',
        titre: "Typographie & Polices d'Écriture",
        ordre: 3,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Maîtriser le texte",
                content: "font-family définit la liste des polices ordonnées par priorité. font-size règle la taille, font-weight la graisse (400 = normal, 700 = bold), et line-height l'interligne pour aérer la lecture."
            },
            {
                type: 'code_example',
                title: "Configuration typographique",
                codeLanguage: 'css',
                content: `body {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  font-weight: 400;\n}`
            }
        ],
        starterCode: `.titre-typographie {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 28px;\n  font-weight: 800;\n  letter-spacing: -0.5px;\n  color: #1e293b;\n  line-height: 1.2;\n}`,
        expectedOutput: "Titre imposant avec typographie soignée et interligne ajusté.",
        explication: "Une bonne hiérarchie typographique améliore drastiquement le confort de lecture.",
        exemple: {
            titre: "Interligne",
            code: `p { line-height: 1.8; }`,
            resultat: "Paragraphe aéré et lisible"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Passez la taille de police à 36px et font-weight à 300 (fin).",
            codeDepart: `.titre {\n  font-size: 20px;\n}`,
            indice: "font-size: 36px; font-weight: 300;",
            solution: `.titre {\n  font-size: 36px;\n  font-weight: 300;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Fondations du Style',
        titre: "Mise en Forme de Textes & Alignements",
        ordre: 4,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Aligner et décorer le texte",
                content: "text-align aligne le texte (left, center, right, justify). text-decoration contrôle le soulignement ou le barré. text-transform change la casse (uppercase, lowercase, capitalize)."
            },
            {
                type: 'code_example',
                title: "Effets textuels",
                codeLanguage: 'css',
                content: `.entete {\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\n.lien-propre {\n  text-decoration: none;\n}`
            }
        ],
        starterCode: `.titre-centre {\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  text-decoration: underline wavy #3b82f6;\n  color: #0f172a;\n}`,
        expectedOutput: "Titre centré, en lettres majuscules avec soulignement ondulé bleu.",
        explication: "La propriété letter-spacing permet d'espacer élégamment les lettres des titres.",
        exemple: {
            titre: "Majuscules",
            code: `h2 { text-transform: uppercase; }`,
            resultat: "Texte converti en majuscules"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Enlevez le soulignement d'un lien avec text-decoration: none.",
            codeDepart: `a {\n  /* désactivez le soulignement */\n}`,
            indice: "text-decoration: none;",
            solution: `a {\n  text-decoration: none;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Le Modèle de Boîte (Box Model)',
        titre: "Comprendre le Box Model (padding, border, margin)",
        ordre: 5,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Le cœur de la géométrie CSS",
                content: "Tout élément HTML est une boîte rectangulaire composée de 4 couches concentriques : le contenu (content), la marge intérieure (padding), la bordure (border), et la marge extérieure (margin) qui sépare l'élément de ses voisins."
            },
            {
                type: 'code_example',
                title: "Application des marges et bordures",
                codeLanguage: 'css',
                content: `.boite {\n  width: 250px;\n  padding: 20px;         /* Espace interne */\n  border: 2px solid red; /* Bordure */\n  margin: 15px auto;     /* Espace externe centré */\n}`
            }
        ],
        starterCode: `.carte-box-model {\n  background-color: #f8fafc;\n  padding: 24px;\n  border: 3px solid #3b82f6;\n  margin: 20px auto;\n  max-width: 400px;\n  border-radius: 8px;\n  text-align: center;\n}`,
        expectedOutput: "Carte avec 24px d'espace intérieur et bordure bleue centrée horizontalement.",
        explication: "padding repousse le contenu vers l'intérieur, margin repousse les éléments extérieurs.",
        exemple: {
            titre: "Marges",
            code: `.boite { margin-bottom: 20px; padding: 10px; }`,
            resultat: "Espace sous l'élément et autour du texte"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Donnez un padding de 30px et une bordure verte pointillée (3px dashed green).",
            codeDepart: `.boite {\n  /* appliquez le style */\n}`,
            indice: "padding: 30px; border: 3px dashed green;",
            solution: `.boite {\n  padding: 30px;\n  border: 3px dashed green;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Le Modèle de Boîte (Box Model)',
        titre: "La Propriété Magique : box-sizing: border-box",
        ordre: 6,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Pourquoi vos boîtes débordent ?",
                content: "Par défaut (content-box), ajouter du padding ou des bordures augmente la largeur totale de votre boîte (width + padding + border), brisant souvent la mise en page. Avec box-sizing: border-box, la largeur spécifiée inclut le padding et les bordures !"
            },
            {
                type: 'code_example',
                title: "Reset universel recommandé",
                codeLanguage: 'css',
                content: `*, *::before, *::after {\n  box-sizing: border-box;\n}`
            }
        ],
        starterCode: `* {\n  box-sizing: border-box;\n}\n\n.boite-parfaite {\n  width: 100%;\n  padding: 30px;\n  border: 5px solid #2563eb;\n  background: #eff6ff;\n}`,
        expectedOutput: "Boîte occupant exactement 100% sans dépasser de l'écran.",
        explication: "border-box simplifie tous vos calculs de dimensions CSS.",
        exemple: {
            titre: "border-box",
            code: `.card { box-sizing: border-box; width: 300px; padding: 20px; }`,
            resultat: "Largeur totale = 300px exactement"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Activez box-sizing: border-box sur la classe .element.",
            codeDepart: `.element {\n  width: 200px;\n  padding: 20px;\n}`,
            indice: "box-sizing: border-box;",
            solution: `.element {\n  box-sizing: border-box;\n  width: 200px;\n  padding: 20px;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Mise en Page & Positionnement',
        titre: "La Propriété display (block, inline, inline-block)",
        ordre: 7,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Comportement naturel des flux",
                content: "display: block prend toute la largeur disponible et force un retour à la ligne. display: inline ne prend que la largeur du texte et n'accepte ni width ni height. display: inline-block se place sur la même ligne tout en acceptant des dimensions personnalisées !"
            },
            {
                type: 'code_example',
                title: "Éléments côte à côte",
                codeLanguage: 'css',
                content: `.badge {\n  display: inline-block;\n  width: 120px;\n  text-align: center;\n  padding: 6px;\n  background: #f1f5f9;\n}`
            }
        ],
        starterCode: `.bouton-inline-block {\n  display: inline-block;\n  width: 140px;\n  padding: 10px;\n  margin-right: 12px;\n  background-color: #3b82f6;\n  color: white;\n  text-align: center;\n  border-radius: 6px;\n}`,
        expectedOutput: "Boutons rectangulaires alignés horizontalement.",
        explication: "inline-block est la solution historique pour aligner des boîtes côte à côte.",
        exemple: {
            titre: "Cacher",
            code: `.masque { display: none; }`,
            resultat: "Élément entièrement retiré de l'affichage"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Transformez un span en bloc avec display: block pour qu'il prenne toute la largeur.",
            codeDepart: `span {\n  /* display block */\n}`,
            indice: "display: block;",
            solution: `span {\n  display: block;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Mise en Page & Positionnement',
        titre: "Positionnement CSS (relative, absolute, fixed, sticky)",
        ordre: 8,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Déplacer les éléments dans l'espace",
                content: "relative permet de décaler un élément sans perturber le flux. absolute positionne l'élément par rapport à son plus proche parent en position: relative. fixed fige l'élément sur l'écran (ex: navbar). sticky se comporte normalement jusqu'à atteindre un seuil au scroll."
            },
            {
                type: 'code_example',
                title: "Parent relative et Enfant absolute",
                codeLanguage: 'css',
                content: `.conteneur-parent {\n  position: relative;\n  height: 200px;\n}\n\n.pastille-badge {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}`
            }
        ],
        starterCode: `.parent {\n  position: relative;\n  height: 180px;\n  background: #1e293b;\n  border-radius: 8px;\n  padding: 20px;\n}\n\n.pastille-notif {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: #ef4444;\n  color: white;\n  padding: 4px 8px;\n  border-radius: 9999px;\n  font-size: 11px;\n}`,
        expectedOutput: "Cadre sombre avec pastille rouge calée précisément dans le coin supérieur droit.",
        explication: "Ce duo position: relative / absolute est indispensable pour les badges et icônes superposées.",
        exemple: {
            titre: "Menu fixe",
            code: `.nav { position: fixed; top: 0; left: 0; width: 100%; }`,
            resultat: "Barre clouée en haut de l'écran"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Placez la pastille dans le coin inférieur gauche avec bottom: 12px et left: 12px.",
            codeDepart: `.pastille-notif {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}`,
            indice: "Remplacez top/right par bottom/left",
            solution: `.pastille-notif {\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Mise en Page & Positionnement',
        titre: "Gestion du Débordement (overflow)",
        ordre: 9,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Contrôler le contenu qui dépasse",
                content: "Lorsque le texte ou une image est trop grand pour sa boîte, overflow contrôle le résultat : visible (dépasse par dessus), hidden (coupe ce qui dépasse), scroll (ajoute toujours des barres de défilement) ou auto (ajoute une barre uniquement si nécessaire)."
            },
            {
                type: 'code_example',
                title: "Boîte à défilement interne",
                codeLanguage: 'css',
                content: `.terminal {\n  height: 150px;\n  overflow-y: auto;\n  background: black;\n  color: #22c55e;\n  padding: 10px;\n}`
            }
        ],
        starterCode: `.boite-scroll {\n  width: 100%;\n  height: 120px;\n  background: #f8fafc;\n  border: 2px solid #cbd5e1;\n  padding: 16px;\n  overflow-y: auto;\n  border-radius: 8px;\n  font-family: sans-serif;\n}`,
        expectedOutput: "Boîte haute de 120px avec barre de défilement fluide.",
        explication: "overflow-y: auto est parfait pour les terminaux et les zones de logs.",
        exemple: {
            titre: "Masquer",
            code: `.avatar { overflow: hidden; border-radius: 50%; }`,
            resultat: "Image découpée en cercle parfait"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Masquez complètement tout débordement avec overflow: hidden.",
            codeDepart: `.boite {\n  /* overflow hidden */\n}`,
            indice: "overflow: hidden;",
            solution: `.boite {\n  overflow: hidden;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Mise en Page & Positionnement',
        titre: "Les Unités CSS Modernes (px, rem, em, %, vh, vw)",
        ordre: 10,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Unités absolues vs Unités relatives",
                content: "Les pixels (px) sont fixes. Le rem est relatif à la taille de police racine du document (généralement 16px). Le % est relatif au parent. vh et vw représentent 1% de la hauteur et largeur de la fenêtre du navigateur."
            },
            {
                type: 'code_example',
                title: "Design proportionnel en rem",
                codeLanguage: 'css',
                content: `h1 {\n  font-size: 2rem;    /* 2 x 16px = 32px */\n  margin-bottom: 1rem;/* 16px */\n}\n\n.section-hero {\n  min-height: 80vh;   /* 80% de la hauteur de l'écran */\n}`
            }
        ],
        starterCode: `.hero-banniere {\n  min-height: 40vh;\n  font-size: 1.25rem;\n  padding: 2rem;\n  background: #312e81;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n}`,
        expectedOutput: "Bannière dynamique occupant 40% de la hauteur de l'écran.",
        explication: "Utiliser rem pour les tailles et marges permet de respecter les réglages d'accessibilité de l'utilisateur.",
        exemple: {
            titre: "rem",
            code: `p { font-size: 1.125rem; }`,
            resultat: "18px relatif"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Définissez un padding de 3rem.",
            codeDepart: `.element {\n  padding: 1rem;\n}`,
            indice: "padding: 3rem;",
            solution: `.element {\n  padding: 3rem;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Flexbox Moderne',
        titre: "Flexbox : Le Conteneur (display: flex)",
        ordre: 11,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Enclencher le moteur Flexbox",
                content: "Dès que vous appliquez display: flex sur un parent, tous ses enfants directs deviennent des éléments flex et s'alignent automatiquement en ligne horizontale. flex-direction permet de basculer en colonne, et gap définit l'espace entre chaque enfant sans marge complexe."
            },
            {
                type: 'code_example',
                title: "Conteneur Flex basique",
                codeLanguage: 'css',
                content: `.conteneur-flex {\n  display: flex;\n  flex-direction: row;\n  gap: 16px;\n}`
            }
        ],
        starterCode: `.menu-flex {\n  display: flex;\n  gap: 12px;\n  background: #0f172a;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.item {\n  background: #2563eb;\n  color: white;\n  padding: 10px 16px;\n  border-radius: 6px;\n}`,
        expectedOutput: "Barre de navigation avec 3 boutons alignés côte à côte et espacés par un gap de 12px.",
        explication: "Flexbox résout 90% des problématiques d'alignement web moderne.",
        exemple: {
            titre: "Flex column",
            code: `.liste { display: flex; flex-direction: column; gap: 8px; }`,
            resultat: "Éléments empilés verticalement"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Passez la direction en colonne avec flex-direction: column.",
            codeDepart: `.menu-flex {\n  display: flex;\n}`,
            indice: "flex-direction: column;",
            solution: `.menu-flex {\n  display: flex;\n  flex-direction: column;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Flexbox Moderne',
        titre: "Flexbox : Justify-Content & Align-Items",
        ordre: 12,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Centrer parfaitement un élément",
                content: "justify-content distribue les enfants sur l'axe principal (flex-start, center, flex-end, space-between, space-around). align-items les aligne sur l'axe secondaire perpendiculaire (stretch, center, flex-start)."
            },
            {
                type: 'code_example',
                title: "Le centrage absolu en 3 lignes",
                codeLanguage: 'css',
                content: `.centrage-parfait {\n  display: flex;\n  justify-content: center; /* horizontal */\n  align-items: center;     /* vertical */\n  height: 250px;\n}`
            }
        ],
        starterCode: `.barre-navigation {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #1e293b;\n  padding: 16px 24px;\n  border-radius: 8px;\n  color: white;\n}`,
        expectedOutput: "Header avec logo à gauche et boutons d'action poussés à l'extrême droite.",
        explication: "space-between place automatiquement le premier élément à gauche et le dernier à droite.",
        exemple: {
            titre: "Centrage",
            code: `.center { display: flex; justify-content: center; align-items: center; }`,
            resultat: "Élément pile au milieu"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Centre tous les éléments avec justify-content: center et align-items: center.",
            codeDepart: `.conteneur {\n  display: flex;\n  height: 200px;\n}`,
            indice: "justify-content: center; align-items: center;",
            solution: `.conteneur {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Flexbox Moderne',
        titre: "Flexbox : flex-grow, flex-shrink et align-self",
        ordre: 13,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Donner de l'élasticité aux enfants",
                content: "Les enfants flex peuvent grandir ou rétrécir pour remplir l'espace. flex-grow: 1 indique à un enfant de s'étirer pour prendre tout l'espace vide restant. align-self permet à un seul enfant de déroger à l'align-items du parent !"
            },
            {
                type: 'code_example',
                title: "Champ de recherche étirable",
                codeLanguage: 'css',
                content: `.barre {\n  display: flex;\n  gap: 8px;\n}\n\n.input-recherche {\n  flex-grow: 1; /* Remplit tout l'espace disponible */\n}`
            }
        ],
        starterCode: `.rangee-recherche {\n  display: flex;\n  gap: 10px;\n}\n\n.champ-etirable {\n  flex-grow: 1;\n  padding: 10px 14px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n}\n\n.bouton-fixe {\n  padding: 10px 20px;\n  background: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 6px;\n}`,
        expectedOutput: "Champ de texte qui s'adapte dynamiquement à toute la largeur disponible.",
        explication: "flex-grow: 1 crée des interfaces réactives fluides qui s'adaptent aux redimensionnements.",
        exemple: {
            titre: "flex-grow",
            code: `.main-content { flex-grow: 1; }`,
            resultat: "Prend tout l'espace libre"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Appliquez flex-grow: 1 sur la classe .element-central.",
            codeDepart: `.element-central {\n  /* faites grandir l'element */\n}`,
            indice: "flex-grow: 1;",
            solution: `.element-central {\n  flex-grow: 1;\n}`
        }
    },
    {
        slug: 'css',
        section: 'CSS Grid',
        titre: "CSS Grid : Définir la Grille (display: grid)",
        ordre: 14,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "La mise en page bi-dimensionnelle",
                content: "Alors que Flexbox est conçu pour une dimension (ligne OU colonne), CSS Grid gère les lignes ET les colonnes simultanément. grid-template-columns: repeat(3, 1fr) crée une grille de 3 colonnes égales grâce à l'unité fractionnelle 'fr'."
            },
            {
                type: 'code_example',
                title: "Grille de cartes",
                codeLanguage: 'css',
                content: `.grille {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}`
            }
        ],
        starterCode: `.grille-cartes {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n\n.carte-item {\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  padding: 24px;\n  text-align: center;\n  border-radius: 8px;\n  font-weight: bold;\n}`,
        expectedOutput: "Grille parfaite de 3 colonnes avec espacement régulier.",
        explication: "L'unité 1fr représente une part équitable de l'espace disponible.",
        exemple: {
            titre: "repeat",
            code: `.grid { grid-template-columns: repeat(4, 1fr); }`,
            resultat: "4 colonnes identiques"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Passez la grille à 2 colonnes avec repeat(2, 1fr).",
            codeDepart: `.grille-cartes {\n  grid-template-columns: repeat(3, 1fr);\n}`,
            indice: "repeat(2, 1fr)",
            solution: `.grille-cartes {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}`
        }
    },
    {
        slug: 'css',
        section: 'CSS Grid',
        titre: "CSS Grid : Placement de Cellules (grid-column)",
        ordre: 15,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Étirer des éléments sur plusieurs colonnes",
                content: "Grâce à grid-column: span 2, un élément peut s'étendre sur 2 colonnes de la grille. grid-row: span 2 fait de même verticalement, idéal pour les mises en page de type 'Dashboard' ou 'Magazine'."
            },
            {
                type: 'code_example',
                title: "Élément vedette étendu",
                codeLanguage: 'css',
                content: `.carte-hero {\n  grid-column: span 2;\n  background: #1e293b;\n  color: white;\n}`
            }
        ],
        starterCode: `.bento-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n\n.bento-item {\n  background: #e2e8f0;\n  padding: 20px;\n  border-radius: 8px;\n}\n\n.bento-hero {\n  grid-column: span 2;\n  background: #2563eb;\n  color: white;\n}`,
        expectedOutput: "Grille asymétrique moderne où la première carte est 2 fois plus large.",
        explication: "Le style Bento Box d'Apple et des SaaS modernes repose sur ce placement Grid.",
        exemple: {
            titre: "Span",
            code: `.large { grid-column: span 3; }`,
            resultat: "Occupe 3 colonnes"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Faites occuper 3 colonnes entières à .bento-hero avec grid-column: span 3.",
            codeDepart: `.bento-hero {\n  grid-column: span 2;\n}`,
            indice: "grid-column: span 3;",
            solution: `.bento-hero {\n  grid-column: span 3;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Interactivité & Sélecteurs Avancés',
        titre: "Pseudo-Classes d'État (:hover, :focus, :active)",
        ordre: 16,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Réagir aux actions de l'utilisateur",
                content: "Les pseudo-classes ciblent un élément dans un état précis : :hover quand la souris survole l'élément, :focus quand un champ a le focus clavier, et :active pendant le clic de souris."
            },
            {
                type: 'code_example',
                title: "Bouton réactif",
                codeLanguage: 'css',
                content: `.btn {\n  background: #2563eb;\n  color: white;\n}\n\n.btn:hover {\n  background: #1d4ed8;\n}\n\n.btn:active {\n  transform: scale(0.98);\n}`
            }
        ],
        starterCode: `.bouton-interactif {\n  background: #3b82f6;\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.bouton-interactif:hover {\n  background: #1d4ed8;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);\n  transform: translateY(-2px);\n}`,
        expectedOutput: "Bouton bleu qui s'élève et fonce au survol de la souris.",
        explication: "Le survol :hover donne un retour visuel indispensable à l'utilisateur.",
        exemple: {
            titre: "Focus",
            code: `input:focus { border-color: blue; outline: none; }`,
            resultat: "Bordure bleue à la saisie"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez un état :active qui change le fond en vert (#10b981).",
            codeDepart: `.bouton-interactif:active {\n  /* votre code */\n}`,
            indice: "background: #10b981;",
            solution: `.bouton-interactif:active {\n  background: #10b981;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Interactivité & Sélecteurs Avancés',
        titre: "Pseudo-Classes Structurelles (:nth-child)",
        ordre: 17,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Cibler selon la position",
                content: ":first-child cible le premier enfant, :last-child le dernier, et :nth-child(n) permet de cibler des lignes alternées grâce à :nth-child(even) (pairs) ou :nth-child(odd) (impairs) pour des tableaux zébrés parfaits !"
            },
            {
                type: 'code_example',
                title: "Tableau rayé",
                codeLanguage: 'css',
                content: `tr:nth-child(even) {\n  background-color: #f8fafc;\n}\n\nli:first-child {\n  font-weight: bold;\n}`
            }
        ],
        starterCode: `ul.liste-stylisee {\n  list-style: none;\n  padding: 0;\n  max-width: 300px;\n}\n\nul.liste-stylisee li {\n  padding: 10px 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n\nul.liste-stylisee li:nth-child(odd) {\n  background-color: #f1f5f9;\n}\n\nul.liste-stylisee li:first-child {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  font-weight: bold;\n}`,
        expectedOutput: "Liste alternée (une ligne grise, une ligne blanche) avec premier élément en gras.",
        explication: "nth-child permet de colorer automatiquement des listes dynamiques.",
        exemple: {
            titre: "Dernier enfant",
            code: `li:last-child { border-bottom: none; }`,
            resultat: "Supprime la bordure finale"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Appliquez une couleur de texte bleue (#2563eb) uniquement au 3ème élément avec :nth-child(3).",
            codeDepart: `li:nth-child(3) {\n  /* couleur bleue */\n}`,
            indice: "color: #2563eb;",
            solution: `li:nth-child(3) {\n  color: #2563eb;\n  font-weight: bold;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Interactivité & Sélecteurs Avancés',
        titre: "Pseudo-Éléments (::before et ::after)",
        ordre: 18,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Injecter du contenu décoratif",
                content: "::before et ::after créent des éléments virtuels au début ou à la fin d'une balise sans modifier le HTML ! Ils nécessitent impérativement la propriété content: \"\"; même si elle est vide."
            },
            {
                type: 'code_example',
                title: "Puce personnalisée",
                codeLanguage: 'css',
                content: `.titre-deco::before {\n  content: "🚀 ";\n}\n\n.badge-nouveau::after {\n  content: " (Nouveau)";\n  color: #ef4444;\n}`
            }
        ],
        starterCode: `.citation {\n  position: relative;\n  font-style: italic;\n  padding: 20px 40px;\n  background: #f8fafc;\n  border-left: 4px solid #3b82f6;\n}\n\n.citation::before {\n  content: "“";\n  font-size: 50px;\n  color: #94a3b8;\n  position: absolute;\n  left: 10px;\n  top: -10px;\n}`,
        expectedOutput: "Bloc citation élégant orné d'un guillemet géant injecté en CSS pur.",
        explication: "Les pseudo-éléments évitent de polluer le DOM HTML avec des balises purement décoratives.",
        exemple: {
            titre: "Pastille",
            code: `.item::after { content: "•"; color: green; }`,
            resultat: "Puce verte ajoutée en fin de ligne"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Ajoutez content: \"★ \"; en doré sur la classe .etoile::before.",
            codeDepart: `.etoile::before {\n  /* inserez l'étoile */\n}`,
            indice: "content: \"★ \"; color: gold;",
            solution: `.etoile::before {\n  content: "★ ";\n  color: gold;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Design Moderne & Animations',
        titre: "Variables CSS (Custom Properties)",
        ordre: 19,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Thématisation et code maintenable",
                content: "Les variables CSS permettent de définir des valeurs réutilisables (couleurs, polices, rayons). On les déclare avec deux tirets --nom dans le sélecteur :root, et on les utilise avec var(--nom). Idéal pour créer un mode sombre !"
            },
            {
                type: 'code_example',
                title: "Déclaration et utilisation de variables",
                codeLanguage: 'css',
                content: `:root {\n  --couleur-primaire: #2563eb;\n  --rayon-carte: 12px;\n}\n\n.bouton {\n  background: var(--couleur-primaire);\n  border-radius: var(--rayon-carte);\n}`
            }
        ],
        starterCode: `:root {\n  --theme-bg: #0f172a;\n  --theme-accent: #38bdf8;\n  --theme-text: #ffffff;\n}\n\n.carte-theme {\n  background-color: var(--theme-bg);\n  color: var(--theme-text);\n  border: 2px solid var(--theme-accent);\n  padding: 24px;\n  border-radius: 12px;\n  text-align: center;\n}`,
        expectedOutput: "Carte utilisant des variables globales pour une cohérence graphique absolue.",
        explication: "Modifier une seule variable dans :root met à jour tout votre site instantanément.",
        exemple: {
            titre: "var()",
            code: `.txt { color: var(--main-color, black); }`,
            resultat: "Applique la couleur de la variable"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Changez la valeur de --theme-accent pour du vert (#4ade80).",
            codeDepart: `:root {\n  --theme-accent: #38bdf8;\n}`,
            indice: "--theme-accent: #4ade80;",
            solution: `:root {\n  --theme-accent: #4ade80;\n}`
        }
    },
    {
        slug: 'css',
        section: 'Design Moderne & Animations',
        titre: "Transitions & Animations (@keyframes, transform)",
        ordre: 20,
        language: 'css',
        contentBlocks: [
            {
                type: 'text',
                title: "Donner vie à vos composants",
                content: "transition anime en douceur le changement d'une propriété. transform permet de faire pivoter (rotate), agrandir (scale) ou déplacer (translate). @keyframes crée des animations complexes en boucle sans une seule ligne de JavaScript."
            },
            {
                type: 'code_example',
                title: "Animation de pulsation",
                codeLanguage: 'css',
                content: `@keyframes pulsation {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.1); }\n  100% { transform: scale(1); }\n}\n\n.coeur {\n  animation: pulsation 1.5s infinite;\n}`
            }
        ],
        starterCode: `@keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.chargeur-spinner {\n  width: 48px;\n  height: 48px;\n  border: 5px solid #e2e8f0;\n  border-top-color: #3b82f6;\n  border-radius: 50%;\n  animation: rotation 1s linear infinite;\n  margin: 30px auto;\n}`,
        expectedOutput: "Spinner de chargement rotatif fluide et continu en CSS pur.",
        explication: "Les animations CSS utilisent l'accélération matérielle du GPU pour une fluidité à 60 FPS.",
        exemple: {
            titre: "Transition",
            code: `.box { transition: transform 0.3s; }\n.box:hover { transform: scale(1.05); }`,
            resultat: "Agrandissement fluide au survol"
        },
        tryYourSelf: {
            titre: "Exercice",
            consigne: "Accélérez l'animation du spinner à 0.5s par tour.",
            codeDepart: `.chargeur-spinner {\n  animation: rotation 1s linear infinite;\n}`,
            indice: "animation: rotation 0.5s linear infinite;",
            solution: `.chargeur-spinner {\n  animation: rotation 0.5s linear infinite;\n}`
        }
    }
];
