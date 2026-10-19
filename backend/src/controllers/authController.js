import modelUser from '../../mongoos/schemas/model_User.js';
import modelChapitre from '../../mongoos/schemas/model_Chapitre.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'hhhh';
const MAX_AGE = 3 * 24 * 60 * 60; // 3 jours en secondes

const COOKIE_CONFIG = {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: MAX_AGE * 1000,
    path: '/',
    secure: process.env.NODE_ENV === 'production'
};

const createToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: MAX_AGE });
};

const handleErrors = (err) => {
    let errors = { username: '', email: '', password: '' };

    if (err.message === 'Email incorrect') {
        errors.email = 'Cet email ou nom d\'utilisateur est introuvable';
        return errors;
    }
    if (err.message === 'Mot de passe incorrect') {
        errors.password = 'Mot de passe incorrect';
        return errors;
    }

    if (err.code === 11000) {
        if (err.keyPattern?.email) errors.email = 'Cet email est déjà enregistré';
        if (err.keyPattern?.username) errors.username = 'Ce nom d\'utilisateur est déjà pris';
        return errors;
    }

    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach((properties) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

// Inscription (Sign Up / Register)
export const Signup_post = async (req, res) => {
    const { username, fullname, email, password, role } = req.body;

    try {
        const newUser = new modelUser({
            username: username || fullname || email?.split('@')[0],
            fullname: fullname || username || '',
            email,
            password,
            role: role === 'administrateur' ? 'administrateur' : 'etudiant',
            progression: []
        });

        const savedUser = await newUser.save();
        const token = createToken(savedUser._id);

        // Définition stricte du cookie HttpOnly
        res.cookie('jwt', token, COOKIE_CONFIG);

        res.status(201).json({
            success: true,
            token,
            user: {
                _id: savedUser._id,
                username: savedUser.username,
                fullname: savedUser.fullname,
                email: savedUser.email,
                role: savedUser.role,
                progression: savedUser.progression
            }
        });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ success: false, errors, message: err.message });
    }
};

// Connexion (Login)
export const Login_post = async (req, res) => {
    const { email, identifier, password } = req.body;
    const userIdentifier = email || identifier;

    try {
        const user = await modelUser.login(userIdentifier, password);
        const token = createToken(user._id);

        // Définition stricte du cookie HttpOnly
        res.cookie('jwt', token, COOKIE_CONFIG);

        res.status(200).json({
            success: true,
            token,
            user: {
                _id: user._id,
                username: user.username,
                fullname: user.fullname,
                email: user.email,
                role: user.role,
                progression: user.progression
            }
        });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ success: false, errors, message: err.message });
    }
};

// Obtenir le profil de l'utilisateur connecté via cookie HttpOnly
export const Get_Me = async (req, res) => {
    try {
        const user = await modelUser.findById(req.user._id).select('-password');
        if (!user) {
            return res.status(401).json({ success: false, message: 'Utilisateur introuvable' });
        }
        res.status(200).json({ success: true, user });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Enregistrer la complétion d'un chapitre
export const Update_Progression = async (req, res) => {
    const { chapterId } = req.params;
    try {
        const chapter = await modelChapitre.findById(chapterId);
        if (!chapter) {
            return res.status(404).json({ success: false, message: 'Chapitre introuvable' });
        }

        const user = await modelUser.findById(req.user._id);
        const alreadyDone = user.progression.some(
            (p) => p.chapitreId?.toString() === chapterId.toString()
        );

        if (!alreadyDone) {
            user.progression.push({
                coursId: chapter.cours,
                chapitreId: chapter._id,
                completedAt: new Date()
            });
            await user.save();
        }

        res.status(200).json({
            success: true,
            progression: user.progression,
            message: 'Progression mise à jour'
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Déconnexion : suppression garantie du cookie HttpOnly
export const Logout_get = (req, res) => {
    res.clearCookie('jwt', {
        httpOnly: true,
        sameSite: 'lax',
        path: '/'
    });
    res.cookie('jwt', '', {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        expires: new Date(0)
    });
    res.status(200).json({ success: true, message: 'Déconnexion réussie' });
};
