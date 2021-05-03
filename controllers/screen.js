const express = require("express");
const router = express.Router();
const db = require("../models")

router.get("/", (req, res) => {
  db.Screen.findAll().then(screens => {
    res.json(screens)
  }).catch(err => {
    console.log(err);
    res.status(500).end()
  })
});

router.post("/", (req,res) => {
  db.Screen.create({
    model: req.body.model,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description
  }).then(newScreen => {
    res.json(newScreen)
  }).catch(err => {
    console.log(err);
    res.status(500).end()
  })
})

module.exports = router;