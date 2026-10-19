import { executeCodeLocal } from './codeRunnerService.js';

export const runCodeService = async (language, code) => {
    // Exécution rapide, fiable et sécurisée sur l'environnement local
    return await executeCodeLocal(language, code);
};
