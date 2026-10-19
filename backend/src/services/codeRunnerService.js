import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

/**
 * Exécute du code de façon isolée avec timeout et nettoyage automatique
 * Supporte : python, java, javascript (node), cpp, c
 */
export const executeCodeLocal = async (languageKey, code) => {
    const key = (languageKey || 'python').toLowerCase().trim();
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), `sb_exec_${key}_`));

    try {
        let command = '';
        let fileName = '';
        let fileContent = code;

        if (key === 'python' || key === 'python3' || key === 'py') {
            fileName = 'main.py';
            command = 'python3 -u main.py';
        } else if (key === 'java') {
            fileName = 'Main.java';
            // Si le code n'inclut pas de classe, on l'enveloppe dans une classe Main
            if (!code.includes('class Main') && !code.includes('public class')) {
                fileContent = `public class Main {\n    public static void main(String[] args) {\n        ${code}\n    }\n}`;
            } else if (code.includes('public class') && !code.includes('public class Main')) {
                // Remplacer le nom de la classe publique par Main pour matcher Main.java
                fileContent = code.replace(/public\s+class\s+([A-Za-z0-9_]+)/, 'public class Main');
            }
            command = 'javac Main.java && java Main';
        } else if (key === 'javascript' || key === 'js' || key === 'node') {
            fileName = 'index.js';
            command = 'node index.js';
        } else if (key === 'cpp' || key === 'c++') {
            fileName = 'main.cpp';
            command = 'g++ -O2 main.cpp -o main && ./main';
        } else if (key === 'c') {
            fileName = 'main.c';
            command = 'gcc -O2 main.c -o main && ./main';
        } else {
            throw new Error(`Langage non pris en charge : ${languageKey}`);
        }

        const filePath = path.join(tempDir, fileName);
        await fs.writeFile(filePath, fileContent, 'utf-8');

        // Exécution avec timeout strict de 7 secondes
        const { stdout, stderr } = await execPromise(command, {
            cwd: tempDir,
            timeout: 7000,
            maxBuffer: 1024 * 512, // 512KB
            env: {
                PATH: process.env.PATH,
                LANG: 'en_US.UTF-8',
                PYTHONUNBUFFERED: '1'
            }
        });

        return {
            run: {
                stdout: stdout || '',
                stderr: stderr || '',
                output: (stdout || '') + (stderr ? (stdout ? '\n' : '') + stderr : ''),
                code: 0
            }
        };

    } catch (err) {
        const stdout = err.stdout || '';
        const stderr = err.stderr || err.message || '';
        return {
            run: {
                stdout: stdout,
                stderr: stderr,
                output: (stdout ? stdout + '\n' : '') + stderr,
                code: err.code || 1
            }
        };
    } finally {
        // Nettoyage garanti du répertoire temporaire
        try {
            await fs.rm(tempDir, { recursive: true, force: true });
        } catch {
            // Silencieux si déjà supprimé
        }
    }
};
