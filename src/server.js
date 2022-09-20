require("express-async-errors")
const migrationsRun = require("./database/sqlite/migrations")
const AppError =  require("./utils/appError.js")
const uploadConfig = require("./configs/upload")

const express = require("express")
const routes = require("./routes")


migrationsRun()

const app = express()
app.use(express.json())

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes)


app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: "error",
      statusCode: error.message
    })
  }

  console.error(error)
  return response.status(500).json({
    message: "error",
    statusCode: "Internal server error"
  })
})


const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))