import { Request, Response } from "express";

const express = require("express");
const app = express();

const ejs = require("ejs");

const drinkModel = require("./models/drinks");
const drinks = drinkModel.drinks;

const drinksController = require("./controllers/drinks")

app.set("view engine", "ejs");

app.use(express.static("public"));

const PORT: number = 4000;

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the GitPub App!");
})

app.use("",drinksController)

app.listen(PORT, () => {
    console.log(`Server now running! Listening on port ${PORT}`);
})