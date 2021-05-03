const express = require("express");
const router = express.Router();
const db = require("../models")

router.get("/", (req, res) => {
  db.Computer.findAll().then(computers => {
    res.json(computers)
  }).catch(err => {
    console.log(err);
    res.status(500).end()
  })
});

router.post("/", (req,res) => {
  db.Computer.create({
    model: req.body.model,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description
  }).then(newComputer => {
    res.json(newComputer)
  }).catch(err => {
    console.log(err);
    res.status(500).end()
  })
})

module.exports = router;