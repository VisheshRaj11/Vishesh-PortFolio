import type {Request, Response} from "express";
import express from "express";
import cors from "cors";
import { contactRouter } from "./routes/contact.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST']
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/',(req:Request, res:Response) => {
    res.json({message:"Hellow from home"});
})

app.use('/api',contactRouter);

app.listen(PORT,() => {
    console.log(`💀http://localhost:${PORT}`);
})