const express = require("express")
const routes = express.Router()

const index = require("./app/controllers/index")

routes.get("/", index.login)
routes.post("/login", index.postlogin)
routes.get("/signup", index.signup)
routes.post("/signup", index.postsignup)
routes.post("/createuser", index.createuser)

routes.get("/user", index.user)

routes.get("/new-opportunity", index.newopportunity)
routes.get("/user_partner", index.user_partner)
routes.post("/createopportunity", index.createopportunity)

routes.get("/opportunities", index.opportunities)

module.exports = routes