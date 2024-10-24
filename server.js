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
    res.status(200).send("welcome to api RAMESH,enter these links on search bar for sample results =>  https://recipes-crud-backend.onrender.com//api/recipe/getrecipe/671a60e2a53f7f1a38dd996e")
    
})


app.use('/api/recipe',RecipeRoutter)

const port = process.env.PORT ||5000;

app.listen(port,()=>{
    console.log("serever stared ramesh");
    
})