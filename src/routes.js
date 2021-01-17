const express = require("express")
const routes = express.Router()

const index = require("./app/controllers/index")

routes.get("/", index.login)
routes.post("/login", index.postlogin)
routes.get("/signup", index.signup)
routes.post("/signup", index.postsignup)
routes.post("/createuser", index.createuser)

module.exports = routes