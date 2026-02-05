import express from "express";
import codeRoutes from "./routes/codeRoutes.js";
import { Result } from "postcss";
import { executeCode } from "./services/pistonService.js";


const app = express();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send(executeCode)
})

export default app;
