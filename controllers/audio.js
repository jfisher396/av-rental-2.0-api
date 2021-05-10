const express = require("express");
const router = express.Router();
const db = require("../models")

router.get("/", (req, res) => {
  db.Audio.findAll().then(audio => {
    res.json(audio)
  }).catch(err => {
    console.log(err);
    res.status(500).end()
  })
});

module.exports = router;