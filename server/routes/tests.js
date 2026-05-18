const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {

  res.json([
    {
      difficulty: "Easy",
      questions: 20
    },
    {
      difficulty: "Medium",
      questions: 25
    },
    {
      difficulty: "Hard",
      questions: 30
    }
  ])

})

module.exports = router