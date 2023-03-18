import { Request,Response } from "express";

const express = require("express");
const router = express.Router();

const drinkModel = require("../models/Drinks")
const drinks = drinkModel.drinks;

router.get("/drinks", (req: Request, res: Response) => {
    res.render("drinks_index", {drinks});
})

module.exports = router;