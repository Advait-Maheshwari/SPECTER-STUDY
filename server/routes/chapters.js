const express = require("express")

const router = express.Router()

const chapters = require("../data/chapters.json")

router.get("/", (req, res) => {

  res.json(chapters)

})

module.exports = router