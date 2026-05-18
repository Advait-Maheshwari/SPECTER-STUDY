import { useEffect, useState } from "react"

import Sidebar from "../components/Sidebar"

import api from "../api/api"

function Academic() {

  const [courses, setCourses] = useState([])
  const [classes, setClasses] = useState([])
  const [chapters, setChapters] = useState([])

  useEffect(() => {

    const fetchData = async () => {

      try {

        const coursesResponse = await api.get("/courses")
        const classesResponse = await api.get("/classes")
        const chaptersResponse = await api.get("/chapters")

        setCourses(coursesResponse.data || [])
        setClasses(classesResponse.data || [])
        setChapters(chaptersResponse.data || [])

      } catch (error) {

        console.log(error)

      }

    }

    fetchData()

  }, [])

  return (
    <div className="flex flex-col md:flex-row bg-slate-900 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-10">
          Academic Structure
        </h1>

        <div className="mb-10">

          <h2 className="text-2xl font-bold text-cyan-400 mb-5">
            Courses
          </h2>

          <div className="flex flex-wrap gap-4">

            {courses.map((course) => (

              <div
                key={course.id}
                className="bg-slate-800 px-5 py-3 rounded-xl"
              >
                {course.course}
              </div>

            ))}

          </div>

        </div>

        <div className="mb-10">

          <h2 className="text-2xl font-bold text-cyan-400 mb-5">
            Classes
          </h2>

          <div className="flex flex-wrap gap-4">

            {classes.map((item) => (

              <div
                key={item.id}
                className="bg-slate-800 px-5 py-3 rounded-xl"
              >
                {item.class}
              </div>

            ))}

          </div>

        </div>

        <div>

          <h2 className="text-2xl font-bold text-cyan-400 mb-5">
            Chapters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {chapters.map((chapter) => (

              <div
                key={chapter.id}
                className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
              >

                <h2 className="text-2xl font-bold text-cyan-400 mb-3">
                  {chapter.chapter}
                </h2>

                <p className="text-slate-300 mb-4">
                  {chapter.subject}
                </p>

                <div className="flex flex-wrap gap-2">

                  {chapter.units?.map((unit, index) => (

                    <div
                      key={index}
                      className="bg-slate-700 px-3 py-1 rounded-lg text-sm"
                    >
                      {unit}
                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Academic