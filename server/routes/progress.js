const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {

  res.json({
    overallProgress: 72,
    completedTopics: 148,
    streak: 12
  })

})

module.exports = router