import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MONGO"))
  .catch((err) => console.log(err));

const app = express();

app.listen(process.env.PORT, (err) => {
  if (!err) {
    console.log("Server is Running on port 3000");
  } else {
    console.log("Error on Running on port 3000");
  }
});

app.use(express.json());

app.use(cookieParser());

app.use('/api/user',userRouter);

app.use('/api/auth',authRouter);

app.use('/api/listing', listingRouter);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})