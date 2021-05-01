const express = require("express");
const router = express.Router();

const projectorRoutes = require("./projector");
const screenRoutes = require("./screen");
const computerRoutes = require("./computer");
const audioRoutes = require("./audio");
const miscRoutes = require("./misc");

router.get("/", (req, res) => {
  res.send("Here fishy fishy.");
});

router.use("/api/projector", projectorRoutes);
router.use("/api/screen", screenRoutes);
router.use("/api/computer", computerRoutes);
router.use("/api/audio", audioRoutes);
router.use("/api/misc", miscRoutes)

module.exports = router;
