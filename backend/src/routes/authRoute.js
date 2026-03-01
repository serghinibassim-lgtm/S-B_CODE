import Router from 'express'
import {Login_post, Login_get, Signup_post, Signup_get, Logout_get} from "../controllers/authController.js";

const router=Router();

router.get('/SignUp',Signup_get)
router.post('/SignUp',Signup_post)

//________________________________________________________________

router.get('/login',Login_get)
router.post('/login',Login_post)
//__________________
router.get('/logout',Logout_get)
export default router;
