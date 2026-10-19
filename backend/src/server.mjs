import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import router from './routes/authRoute.js';
import coursRoutes from './routes/coursRoutes.js';
import codeRoutes from './routes/codeRoutes.js';
import { connectDB } from './config/db.js';

const server = express();

const allowedOrigins = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5174',
    'http://localhost:3000'
];

server.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(null, true); // Dev flexible
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));

server.use(cookieParser());
server.use(express.json());

// Routes d'authentification
server.use(router);

// API des cours et chapitres (/api/courses, /api/chapters, /api/cours, /api/chapitres)
server.use('/api', coursRoutes);

// API d'exécution de code (/api/code/run, /api/code/execute, /api/execute)
server.use('/api/code', codeRoutes);
server.use('/api/execute', codeRoutes);

const PORT = process.env.SERVER_PORT || 3000;

const startServer = async () => {
    await connectDB();

    server.listen(PORT, () => {
        console.log(`Server running at: http://localhost:${PORT}`);
    });
};

const shutdown = async (signal) => {
    console.log(`${signal} reçu : fermeture de la connexion MongoDB`);
    await mongoose.connection.close();
    process.exit(0);
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

startServer();
