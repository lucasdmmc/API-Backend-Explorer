const { Router } = require("express")
const usersRouter = Router()

const UserController = require("../controllers/UserController.js")
const userController = new UserController()
 
usersRouter.post("/", userController.create)
usersRouter.put("/:id", userController.update)

module.exports = usersRouter
