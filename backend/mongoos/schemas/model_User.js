import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const progressionItemSchema = new mongoose.Schema(
    {
        coursId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cours'
        },
        chapitreId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chapitre'
        },
        completedAt: {
            type: Date,
            default: Date.now
        }
    },
    { _id: false }
);

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            default: function () {
                return this.fullname || '';
            }
        },
        fullname: {
            type: String,
            trim: true,
            default: ''
        },
        email: {
            type: String,
            required: [true, 'Email obligatoire'],
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, 'Mot de passe obligatoire'],
            minlength: [4, 'Le mot de passe doit comporter au moins 4 caractères']
        },
        role: {
            type: String,
            enum: ['etudiant', 'administrateur'],
            default: 'etudiant'
        },
        progression: {
            type: [progressionItemSchema],
            default: []
        }
    },
    { timestamps: true }
);

// Hachage du mot de passe uniquement s'il a été modifié
userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Méthode statique de connexion (supporte email ou username)
userSchema.statics.login = async function (identifier, password) {
    const user = await this.findOne({
        $or: [
            { email: identifier?.toLowerCase() },
            { username: identifier }
        ]
    });

    if (!user) {
        throw new Error('Email incorrect');
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
        throw new Error('Mot de passe incorrect');
    }

    return user;
};

const modelUser = mongoose.model('User', userSchema);
export default modelUser;