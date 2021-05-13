const express = require("express");
const router = express.Router();

const projectorRoutes = require("./projector");
const screenRoutes = require("./screen");
const computerRoutes = require("./computer");
const audioRoutes = require("./audio");
const miscRoutes = require("./misc");
const userRoutes = require("./user");

router.get("/", (req, res) => {
  res.send("Here fishy fishy.");
});

router.use("/api/projectors", projectorRoutes);
router.use("/api/screens", screenRoutes);
router.use("/api/computers", computerRoutes);
router.use("/api/audio", audioRoutes);
router.use("/api/miscav", miscRoutes);
router.use("/api/users", userRoutes);

module.exports = router;