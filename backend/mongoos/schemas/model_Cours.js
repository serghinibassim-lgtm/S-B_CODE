import mongoose from 'mongoose';

// Modèle Cours / Langage (HTML, CSS, JavaScript, Python, Java...)
const coursSchema = new mongoose.Schema(
    {
        titre: {
            type: String,
            required: [true, 'Titre du cours obligatoire'],
            unique: true,
            trim: true
        },
        slug: {
            type: String,
            required: [true, 'Slug du cours obligatoire'],
            unique: true,
            lowercase: true,
            trim: true
        },
        description: {
            type: String,
            default: ''
        },
        introduction: {
            definition: {
                type: String,
                default: ''
            },
            paradigmes: {
                type: String,
                default: ''
            },
            historique: {
                type: String,
                default: ''
            },
            casUsage: {
                type: [String],
                default: []
            }
        },
        icon: {
            type: String,
            default: ''
        },
        badge: {
            type: String,
            default: 'Populaire'
        },
        couleur: {
            type: String,
            default: '#3b82f6'
        },
        ordre: {
            type: Number,
            default: 0
        },
        actif: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);

// Alias virtuel 'title' vers 'titre'
coursSchema.virtual('title').get(function () {
    return this.titre;
});

// Récupération de tous les chapitres d'un cours
coursSchema.virtual('chapitres', {
    ref: 'Chapitre',
    localField: '_id',
    foreignField: 'cours'
});

coursSchema.set('toJSON', { virtuals: true });
coursSchema.set('toObject', { virtuals: true });

const modelCours = mongoose.model('Cours', coursSchema);
export default modelCours;
