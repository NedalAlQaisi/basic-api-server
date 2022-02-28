"use strict";

const express = require("express");

const { Food } = require("../models/index.js");

const router = express.Router();

router.post("/food", addFood);
router.get("/food", getFood);
router.get("/food/:id", getOneFood);
router.put("/food/:id", updateFood);
router.delete("/food/:id", deleteOneFood);


async function addFood(req, res) {
    let reqBody = req.body;
    let addedFood = await Food.create(reqBody);
    res.status(201).json(addedFood);
}


async function getFood(req, res) {
    let food = await Food.findAll();
    res.status(200).json(food);
}


async function getOneFood(req, res) {
    let id = parseInt(req.params.id);
    let food = await Food.findOne({ where: { id: id } });
    res.status(200).json(food);
}


async function updateFood(req, res) {
    let id = parseInt(req.params.id);
    let reqBody = req.body;
    await Food.update(reqBody, { where: { id: id } });
    res.status(201).json(await Food.findOne({ where: { id: id } }));
}


async function deleteOneFood(req, res) {
    let id = parseInt(req.params.id);
    await Food.destroy({ where: { id: id } });
    res.status(200).send(await Food.findOne({ where: { id: id } }));
}

module.exports = router;