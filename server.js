const express = require("express");
const cors = require("cors")
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 8080;
const allRoutes = require("./controllers");

app.use(helmet());
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use("/", allRoutes);

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, () => console.log(`App listening on ${PORT}`));
});
