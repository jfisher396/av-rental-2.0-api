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

module.exports = router;