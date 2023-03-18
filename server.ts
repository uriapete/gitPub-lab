import { Request, Response } from "express";

const express = require("express");
const app = express();

const drinkModel = require("./models/drinks");
const drinks = drinkModel.drinks;

const PORT:number = 4000;

app.get("/",(req:Request,res:Response)=>{
    res.send("Welcome to the GitPub App!");
})

app.get("/drinks",(req:Request,res:Response)=>{
    res.send(drinks);
})

app.listen(PORT,()=>{
    console.log(`Server now running! Listening on port ${PORT}`);
})