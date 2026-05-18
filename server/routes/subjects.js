const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {

  res.json([
    {
      id: 1,
      subject: "Physics"
    },
    {
      id: 2,
      subject: "Chemistry"
    },
    {
      id: 3,
      subject: "Mathematics"
    }
  ])

})

module.exports = router