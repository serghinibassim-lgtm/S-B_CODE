import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import router from './routes/authRoute.js'
import {connectDB} from './config/db.js'
import {checkuser} from "./middleware/authmiddleware.js";

const server=express();

server.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))
server.use(cookieParser())
server.use(express.json())

server.use(router)
//server.get('*',checkuser)

const PORT=process.env.SERVER_PORT||3000;

const startServer = async () => {
    await connectDB()

    server.listen(PORT,()=>{
        console.log(`server backend runing in :http://localhost:${PORT}`)
    })
}

const shutdown = async (signal) => {
    console.log(`${signal} reçu : fermeture de la connexion MongoDB`)
    await mongoose.connection.close()
    process.exit(0)
}

process.on('SIGINT',()=>shutdown('SIGINT'))
process.on('SIGTERM',()=>shutdown('SIGTERM'))

startServer()
