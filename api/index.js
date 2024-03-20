import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();


mongoose
    .connect(process.env.MONGO) 
    .then(()=>console.log('Connected to MONGO'))
    .catch((err)=>console.log(err));


app.listen(process.env.PORT,(err)=>{
    if (!err)
    {
        console.log('Server is Running on port 3000');
    }
    else{
        console.log('Error on Running on port 3000');
    }
})