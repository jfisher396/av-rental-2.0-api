const express = require("express");
const router = express.Router();
const db = require("../models")

router.get("/", (req, res) => {
  db.Projector.findAll().then(projectors => {
    res.json(projectors)
  }).catch(err => {
    console.log(err);
    res.status(500).end()
  })
});

router.post("/", (req,res) => {
  db.Projector.create({
    model: req.body.model,
    price: req.body.price
  }).then(newProjector => {
    res.json(newProjector)
  }).catch(err => {
    console.log(err);
    res.status(500).end()
  })
})

module.exports = router;