import Router from 'express';
import {
    Login_post,
    Signup_post,
    Logout_get,
    Get_Me,
    Update_Progression
} from '../controllers/authController.js';
import { requireAuthe } from '../middleware/authmiddleware.js';

const router = Router();

// Routes d'authentification API normalisées
router.post('/api/auth/register', Signup_post);
router.post('/api/auth/signup', Signup_post);
router.post('/api/auth/login', Login_post);
router.post('/api/auth/logout', Logout_get);
router.get('/api/auth/logout', Logout_get);
router.get('/api/auth/me', requireAuthe, Get_Me);
router.post('/api/auth/progress/:chapterId', requireAuthe, Update_Progression);

// Rétrocompatibilité avec les anciennes routes directes
router.post('/SignUp', Signup_post);
router.post('/login', Login_post);
router.get('/logout', Logout_get);

export default router;
