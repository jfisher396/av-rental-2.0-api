const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Projector routes here");
});

module.exports = router;