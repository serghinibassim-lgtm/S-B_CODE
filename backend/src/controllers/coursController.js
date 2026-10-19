import mongoose from 'mongoose';
import modelCours from '../../mongoos/schemas/model_Cours.js';
import modelChapitre from '../../mongoos/schemas/model_Chapitre.js';

// Helper pour trouver un cours par slug OU par ObjectId
const findCourseBySlugOrId = async (param) => {
    if (mongoose.Types.ObjectId.isValid(param)) {
        const byId = await modelCours.findById(param);
        if (byId) return byId;
    }
    return await modelCours.findOne({ slug: param.toLowerCase() });
};

// GET /api/courses (ou /api/cours) : liste des cours
export const getCours = async (req, res) => {
    try {
        const cours = await modelCours.find({ actif: true }).sort({ ordre: 1 });
        res.status(200).json({ success: true, count: cours.length, data: cours });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// GET /api/courses/:slugOrId : détails d'un cours avec ses chapitres
export const getCoursBySlugOrId = async (req, res) => {
    const { slugOrId } = req.params;
    try {
        const cours = await findCourseBySlugOrId(slugOrId);
        if (!cours) {
            return res.status(404).json({ success: false, message: 'Cours introuvable' });
        }

        const chapitres = await modelChapitre
            .find({ cours: cours._id })
            .sort({ ordre: 1 });

        const coursObj = cours.toObject();
        coursObj.chapitres = chapitres;

        res.status(200).json({ success: true, data: coursObj });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// GET /api/courses/:slugOrId/chapters : liste des chapitres pour la sidebar
export const getChapitresByCours = async (req, res) => {
    const { slugOrId } = req.params;
    try {
        const cours = await findCourseBySlugOrId(slugOrId);
        if (!cours) {
            return res.status(404).json({ success: false, message: 'Cours introuvable' });
        }

        const chapitres = await modelChapitre
            .find({ cours: cours._id })
            .select('titre title section ordre order language starterCode')
            .sort({ ordre: 1 });

        res.status(200).json({ success: true, data: chapitres });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// GET /api/chapters/:id (ou /api/chapitres/:id) : chapitre complet
export const getChapitreById = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Identifiant invalide' });
        }

        const chapitre = await modelChapitre
            .findById(id)
            .populate('cours', 'titre title slug couleur icon introduction');

        if (!chapitre) {
            return res.status(404).json({ success: false, message: 'Chapitre introuvable' });
        }

        res.status(200).json({ success: true, data: chapitre });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// POST /api/courses : créer un cours (admin)
export const createCours = async (req, res) => {
    try {
        const newCours = new modelCours(req.body);
        const savedCours = await newCours.save();
        res.status(201).json({ success: true, data: savedCours });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// POST /api/chapters : créer un chapitre (admin)
export const createChapitre = async (req, res) => {
    try {
        const newChapitre = new modelChapitre(req.body);
        const savedChapitre = await newChapitre.save();
        res.status(201).json({ success: true, data: savedChapitre });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
