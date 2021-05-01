const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Computer routes here");
});

module.exports = router;