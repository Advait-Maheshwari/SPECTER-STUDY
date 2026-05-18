import { useEffect, useState } from "react"

import Sidebar from "../components/Sidebar"
import SubjectCard from "../components/SubjectCard"

import api from "../api/api"

function Subjects() {

  const [subjects, setSubjects] = useState([])

  useEffect(() => {

    const fetchSubjects = async () => {

      try {

        const response = await api.get("/subjects")

        setSubjects(response.data)

      } catch (error) {

        console.log(error)

      }

    }

    fetchSubjects()

  }, [])

  return (
    <div className="flex flex-col md:flex-row bg-slate-900 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-10">
          Subjects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {subjects.map((subject) => (

            <SubjectCard
              key={subject.id}
              subject={subject.subject}
              progress={70}
            />

          ))}

        </div>

      </div>

    </div>
  )
}

export default Subjects