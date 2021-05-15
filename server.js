require("dotenv").config();
const express = require("express")
const cors = require("cors")
const helmet = require('helmet')
const session = require('express-session')
const db = require("./models")
const allRoutes = require("./controllers")

const app = express();
const PORT = process.env.PORT || 8080


//Middleware
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//local config
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}))
app.use(session({
  secret: process.env.SECRET_CODE,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 2*60*60*1000
  }
}))

//deployed config
// app.use(cors({
//   origin: ["https://av-rentals-2.herokuapp.com/"],
//   credentials: true
// }))
// app.use(session({
//   secret: "secretcode",
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     maxAge: 2*60*60*1000,
//     sameSite: "none",
//     secure: true
//   }
// }))

//Routes
app.use("/", allRoutes)

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, () => console.log(`App listening on ${PORT}`))
})
