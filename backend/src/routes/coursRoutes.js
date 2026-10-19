import Router from 'express';
import {
    getCours,
    getCoursBySlugOrId,
    getChapitresByCours,
    getChapitreById,
    createCours,
    createChapitre
} from '../controllers/coursController.js';
import { requireAuthe } from '../middleware/authmiddleware.js';

const router = Router();

// 1. Liste des langages pour la vitrine / navbar (accessible publiquement)
router.get('/courses', getCours);
router.get('/cours', getCours);

// 2. Accès aux contenus de cours, chapitres et détails : STRICTEMENT PROTÉGÉ PAR JWT HTTPONLY
router.get('/courses/:slugOrId', requireAuthe, getCoursBySlugOrId);
router.get('/cours/:slugOrId', requireAuthe, getCoursBySlugOrId);

router.get('/courses/:slugOrId/chapters', requireAuthe, getChapitresByCours);
router.get('/cours/:slugOrId/chapitres', requireAuthe, getChapitresByCours);

router.get('/chapters/:id', requireAuthe, getChapitreById);
router.get('/chapitres/:id', requireAuthe, getChapitreById);

// 3. Création de cours et chapitres (protégé)
router.post('/courses', requireAuthe, createCours);
router.post('/cours', requireAuthe, createCours);
router.post('/chapters', requireAuthe, createChapitre);
router.post('/chapitres', requireAuthe, createChapitre);

export default router;
