import express from'express';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from'./src/routes/userRoutes';
import tourRouter from './src/routes/tourRoutes';
dotenv.config("./.env");

const app=express();
app.use(bodyParser.json());

app.use("/user",userRouter);
app.use('/tours',tourRouter);

app.use("/",(req,res)=>res.status(200).json({
    message:"This is Tour "
}));
const dburl=process.env.DATABASEURL;
mongoose.connect(dburl).then (()=> console.log("Database connected successful"));
const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`server is running on Port ${port}`);
})


export default app;