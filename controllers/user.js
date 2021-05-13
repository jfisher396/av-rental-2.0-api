const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  db.User.findAll()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.post("/signup", (req, res) => {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

module.exports = router;
