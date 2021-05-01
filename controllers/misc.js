const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Misc AV routes here");
});

module.exports = router;