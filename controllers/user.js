const express = require("express");
const router = express.Router();
const db = require("../models")

router.get("/", (req, res) => {
  db.User.findAll().then(user => {
    res.json(user)
  }).catch(err => {
    console.log(err);
    res.status(500).end()
  })
});

module.exports = router;