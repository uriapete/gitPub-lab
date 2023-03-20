import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

const foodModel = require("../models/food");
const food = foodModel.food;

// index route
router.get("/food", (req: Request, res: Response) => {
    res.render("food_index", { food });
})

// show route
router.get("/food/:foodID", (req: Request, res: Response) => {
    res.render("food_show", { food: food[parseInt(req.params.foodID)] });
})

module.exports = router;