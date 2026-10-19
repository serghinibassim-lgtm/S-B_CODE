import express from "express";
import { runCode } from "../controllers/codeController.js";
import { requireAuthe } from "../middleware/authmiddleware.js";

const router = express.Router();

// Exécution de code : réservé aux utilisateurs authentifiés
router.post("/run", requireAuthe, runCode);
router.post("/execute", requireAuthe, runCode);

export default router;
