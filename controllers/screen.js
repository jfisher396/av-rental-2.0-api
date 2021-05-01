const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Screen routes here");
});

module.exports = router;