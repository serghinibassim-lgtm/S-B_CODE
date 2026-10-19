import jwt from 'jsonwebtoken';
import modelUser from '../../mongoos/schemas/model_User.js';

const JWT_SECRET = process.env.JWT_SECRET || 'hhhh';

// Middleware obligatoire : vérifie le cookie HttpOnly 'jwt'
export const requireAuthe = async (req, res, next) => {
    let token = req.cookies?.jwt;

    // Fallback éventuel sur l'en-tête Authorization
    if (!token && req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Accès refusé : vous devez être connecté pour accéder à ce cours.'
        });
    }

    try {
        const decodedToken = jwt.verify(token, JWT_SECRET);
        const user = await modelUser.findById(decodedToken.id).select('-password');
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Session invalide : utilisateur introuvable.'
            });
        }
        req.user = user;
        res.locals.user = user;
        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: 'Session expirée ou invalide. Veuillez vous reconnecter.'
        });
    }
};

// Middleware optionnel : attache l'utilisateur s'il est authentifié via cookie
export const checkuser = async (req, res, next) => {
    let token = req.cookies?.jwt;
    if (!token && req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (token) {
        try {
            const decodedToken = jwt.verify(token, JWT_SECRET);
            const user = await modelUser.findById(decodedToken.id).select('-password');
            req.user = user || null;
            res.locals.user = user || null;
        } catch {
            req.user = null;
            res.locals.user = null;
        }
    } else {
        req.user = null;
        res.locals.user = null;
    }
    next();
};