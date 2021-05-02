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

module.exports = router;