const express = require("express")

const router = express.Router()

const academicData = require("../data/academicData.json")

router.get("/subjects", (req, res) => {

  const query = req.query.q?.toLowerCase() || ""

  let results = []

  academicData.courses.forEach((course) => {

    course.streams.forEach((stream) => {

      stream.classes.forEach((classItem) => {

        classItem.subjects.forEach((subject) => {

          if (
            subject.name.toLowerCase().startsWith(query)
          ) {

            results.push({
              id: subject.id,
              name: subject.name,
              optional: subject.optional
            })

          }

        })

      })

    })

  })

  res.json(results)

})

module.exports = router