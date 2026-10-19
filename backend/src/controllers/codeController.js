import { runCodeService } from "../services/pistonService.js";

export const runCode = async (req, res) => {
    const { language, code } = req.body;

    if (!code || !code.trim()) {
        return res.status(400).json({
            success: false,
            message: "Le code fourni est vide"
        });
    }

    try {
        const result = await runCodeService(language, code);

        if (result && result.run) {
            return res.json({
                success: true,
                stdout: result.run.stdout || "",
                stderr: result.run.stderr || "",
                output: result.run.output || (result.run.stdout + (result.run.stderr ? "\n" + result.run.stderr : "")),
                exitCode: result.run.code
            });
        }

        res.status(500).json({
            success: false,
            message: "Réponse vide du moteur d'exécution"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.response?.data?.message || error.message || "Erreur de communication avec le moteur d'exécution"
        });
    }
};
