import { Request, Response } from "express";

const express = require("express");
const app = express();

const PORT:number = 4000;

app.get("/",(req:Request,res:Response)=>{
    res.send("Welcome to the GitPub App!");
})

app.listen(PORT,()=>{
    console.log(`Server now running! Listening on port ${PORT}`);
})