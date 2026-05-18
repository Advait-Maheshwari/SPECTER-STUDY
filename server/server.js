const express = require("express")
const cors = require("cors")
require("dotenv").config()

const subjectRoutes = require("./routes/subjects")
const progressRoutes = require("./routes/progress")
const testRoutes = require("./routes/tests")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "SPECTER STUDY API RUNNING"
  })
})

app.use("/api/subjects", subjectRoutes)
app.use("/api/progress", progressRoutes)
app.use("/api/tests", testRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})