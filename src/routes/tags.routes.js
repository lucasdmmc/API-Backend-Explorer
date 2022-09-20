const { Router } = require("express")
const tagsRoutes = Router()

const TagsController = require("../controllers/TagsController.js")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tagsController = new TagsController()
 
tagsRoutes.get("/", ensureAuthenticated, tagsController.index)

module.exports = tagsRoutes
