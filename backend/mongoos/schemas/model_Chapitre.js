import mongoose from 'mongoose';

const contentBlockSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ['text', 'code_example', 'note', 'tip', 'warning'],
            default: 'text'
        },
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        codeLanguage: {
            type: String,
            default: ''
        }
    },
    { _id: false }
);

// Schéma pour les 4 QCM de validation du chapitre
const quizQuestionSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true
        },
        codeSnippet: {
            type: String,
            default: ''
        },
        options: {
            type: [String],
            required: true
        },
        correctAnswer: {
            type: Number,
            required: true // Index de 0 à 3
        },
        explanation: {
            type: String,
            default: ''
        }
    },
    { _id: false }
);

const chapitreSchema = new mongoose.Schema(
    {
        cours: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cours',
            required: [true, 'Le chapitre doit être lié à un cours']
        },
        section: {
            type: String,
            default: 'Général'
        },
        titre: {
            type: String,
            required: [true, 'Titre du chapitre obligatoire'],
            minlength: [2, 'Le titre doit avoir au moins 2 caractères']
        },
        ordre: {
            type: Number,
            default: 0
        },
        language: {
            type: String,
            required: [true, 'Le langage est obligatoire'],
            enum: {
                values: ['html', 'css', 'javascript', 'python', 'java'],
                message: 'Langage non supporté ({VALUE})'
            }
        },
        // Tableau de blocs explicatifs structurés
        contentBlocks: {
            type: [contentBlockSchema],
            default: []
        },
        // Quiz de validation obligatoire (4 QCM)
        quiz: {
            type: [quizQuestionSchema],
            default: []
        },
        // Code pré-chargé dans Monaco Editor
        starterCode: {
            type: String,
            default: ''
        },
        // Sortie attendue dans la console / le terminal (optionnel)
        expectedOutput: {
            type: String,
            default: ''
        },
        // Champs historiques pour rétrocompatibilité
        explication: {
            type: String,
            default: ''
        },
        exemple: {
            titre: { type: String, default: 'Exemple' },
            code: { type: String, default: '' },
            resultat: { type: String, default: '' }
        },
        tryYourSelf: {
            titre: { type: String, default: 'Exercice' },
            consigne: { type: String, default: '' },
            codeDepart: { type: String, default: '' },
            indice: { type: String, default: '' },
            solution: { type: String, default: '' }
        }
    },
    { timestamps: true }
);

// Alias virtuels pour la compatibilité avec la nomenclature anglophone
chapitreSchema.virtual('title').get(function () {
    return this.titre;
});
chapitreSchema.virtual('courseId').get(function () {
    return this.cours;
});
chapitreSchema.virtual('order').get(function () {
    return this.ordre;
});

// Assure que starterCode a au moins une valeur par défaut si non renseigné
chapitreSchema.pre('save', function () {
    if (!this.starterCode) {
        this.starterCode = this.tryYourSelf?.codeDepart || this.exemple?.code || '';
    }
});

chapitreSchema.set('toJSON', { virtuals: true });
chapitreSchema.set('toObject', { virtuals: true });

const modelChapitre = mongoose.model('Chapitre', chapitreSchema);
export default modelChapitre;
