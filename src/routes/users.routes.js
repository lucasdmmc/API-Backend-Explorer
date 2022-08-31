const { Router } = require("express")
const usersRouter = Router()

const UserController = require("../controllers/userController.js")
const userController = new UserController()
 
usersRouter.post("/", userController.create)

module.exports = usersRouter
