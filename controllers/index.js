const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Here fishy fishy.");
});

module.exports = router;
