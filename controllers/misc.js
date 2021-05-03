const express = require("express");
const router = express.Router();
const db = require("../models")

router.get("/", (req, res) => {
  db.MiscAV.findAll().then(miscs => {
    res.json(miscs)
  }).catch(err => {
    console.log(err);
    res.status(500).end()
  })
});

router.post("/", (req,res) => {
  db.Misc.create({
    model: req.body.model,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description
  }).then(newMisc => {
    res.json(newMisc)
  }).catch(err => {
    console.log(err);
    res.status(500).end()
  })
})

module.exports = router;