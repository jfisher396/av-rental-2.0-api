const express = require("express")
const cors = require("cors")
const helmet = require('helmet')
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const cookieParser = require('cookie-parser')
const becrypt = require('bcryptjs')
const session = require('express-session')
// const bodyParser = require('body-parser')
const db = require("./models")
const allRoutes = require("./controllers")

const app = express();
const PORT = process.env.PORT || 8080


//Middleware
app.use(helmet())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))
app.use(session({
  secret: "secretcode",
  resave: true,
  saveUninitialized: true
}))
app.use(cookieParser("secretcode"))


//Routes
app.use("/", allRoutes)

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, () => console.log(`App listening on ${PORT}`))
})
