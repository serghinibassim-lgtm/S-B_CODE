import { runCodeService } from "../services/pistonService.js";

export const runCode = async (req, res) => {
  const { language, code } = req.body;

  if (!code || !code.trim()) {
    return res.status(400).json({
      success: false,
      message: "Code vide"
    });
  }

  try {
    const result = await runCodeService(language, code);

    if (result.run) {
      return res.json({
        success: true,
        stdout: result.run.stdout || "",
        stderr: result.run.stderr || ""
      });
    }

    res.status(500).json({
      success: false,
      message: "Run vide"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
