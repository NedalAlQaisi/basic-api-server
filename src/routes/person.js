"use strict";

const express = require("express");

const { Person } = require("../models/index.js");

const router = express.Router();


router.post("/person", addPerson);
router.get("/person", getPerson);
router.get("/person/:id", getOnePerson);
router.put("/person/:id", updatePerson);
router.delete("/person/:id", deleteOnePerson);



async function addPerson(req, res) {
    let reqBody = req.body;
    let addedPerson = await Person.create(reqBody);
    res.status(201).json(addedPerson);
}


async function getPerson(req, res) {
    let people = await Person.findAll();
    res.status(200).json(people);
}


async function getOnePerson(req, res) {
    let id = parseInt(req.params.id);
    let person = await Person.findOne({ where: { id: id } });
    res.status(200).json(person);
}


async function updatePerson(req, res) {
    let id = parseInt(req.params.id);
    let reqBody = req.body;
    await Person.update(reqBody, { where: { id: id } });
    res.status(201).json(await Person.findOne({ where: { id: id } }));
}


async function deleteOnePerson(req, res) {
    let id = parseInt(req.params.id);
    await Person.destroy({ where: { id: id } });
    res.status(200).send(Person.findOne({ where: { id: id } }));
}

module.exports = router;