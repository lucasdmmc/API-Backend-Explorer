require("express-async-errors")

const migrationsRun = require("./database/sqlite/migrations")

const express = require("express")
const routes = require("./routes")
migrationsRun()

const AppError =  require("./utils/appError.js")


const app = express()
app.use(express.json())

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