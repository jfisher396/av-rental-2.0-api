const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");

//Route to create a new user
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

//Route to check is user exists and login if it does
router.post('/login', (req, res) => {
    db.User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user) {
            res.status(404).send("No user found with that email.");
        } else {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                req.session.user = {
                    email: user.email,
                    id: user.id
                }
                res.json(req.session);
            } else {
                res.status(401).send("Incorrect password")
            }
        }
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
})

//route to view active session
router.get('/readsessions', (req,res) => {
  res.json(req.session)
})

//route to get data on current user
router.get("/currentuserdata", (req, res) => {
  if (!req.session.user) {
    res.status(401).send("Login required!");
  } else {
    db.User.findOne({
      where: {
        id: req.session.user.id,
      },
    })
      .then((userData) => {
        res.json(userData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  }
});

router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.send("You are now logged out.")
})

module.exports = router;
