import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';

app.use(cors({
    origin: process.env.CORS_ORIGIN     //allowed Frontend port, important for connection with frontend
}))
app.use(express.json({limit:"16kb"}));   //limit of 16kb for json data
app.use(express.urlencoded({extended:true,limit:"16kb"}));    //limit of 16kb for urlencoded data
app.use(express.static("public"));   //to store public assets
app.use(cookieParser());  //to parse cookies from request
const app=express();


export {app};