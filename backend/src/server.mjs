import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import router from './routes/authRoute.js'
import {checkuser} from "./middleware/authmiddleware.js";
const server=express();

server.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))
server.use(cookieParser())
server.use(express.json())
const PORT=3000;



server.use(router)
//server.get('*',checkuser)
mongoose.connect('mongodb://localhost/platformDevCodeDb').then(()=>{
    console.log('platformDevCodeDb et connecter avec succsse')
}).catch((err)=>{
    console.log('ERR dans la connection a platformDevCodeDb :',err)

})





server.listen(PORT,()=>{
    console.log(`server backend runing in :http://localhost:${PORT}`)
})