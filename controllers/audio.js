const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Audio routes here");
});

module.exports = router;