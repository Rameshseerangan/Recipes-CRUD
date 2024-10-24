import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import RecipeRoutter from './Routters/RecipeRoutter.js'
import connectdb from './database/DBconfig.js';

dotenv.config();

connectdb();

const app = express();
app.use(express.json())



app.use(cors({}));

app.get ("/",(req,res)=>{
    res.status(200).send("wlcome to api RAMESH")
})


app.use('/api/recipe',RecipeRoutter)

const port = process.env.PORT ||5000;

app.listen(port,()=>{
    console.log("serever stared ramesh");
    
})