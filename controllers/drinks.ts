import { Request,Response } from "express";

const express = require("express");
const router = express.Router();

const drinkModel = require("../models/Drinks")
const drinks = drinkModel.drinks;

// index route
router.get("/drinks", (req: Request, res: Response) => {
    res.render("drinks_index", {drinks});
})

// show route
router.get("/drinks/:drinkID", (req: Request, res: Response) => {
    res.send(req.params.drinkID)
    // res.render("drinks_index", {drinks});
})

module.exports = router;