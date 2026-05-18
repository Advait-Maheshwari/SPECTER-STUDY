import { useEffect, useState } from "react"

import Sidebar from "../components/Sidebar"

import api from "../api/api"

function Tests() {

  const [tests, setTests] = useState([])

  useEffect(() => {

    const fetchTests = async () => {

      try {

        const response = await api.get("/tests")

        console.log(response.data)

        setTests(response.data)

      } catch (error) {

        console.log(error)

      }

    }

    fetchTests()

  }, [])

  return (
    <div className="flex bg-slate-900 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-10">
          Tests
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {tests.map((test, index) => (

  <div
    key={index}
    className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
  >

    <h2 className="text-2xl font-bold text-cyan-400">
      {test.difficulty}
    </h2>

    <p className="mt-3">
      Questions: {test.questions}
    </p>

  </div>

))}

        </div>

      </div>

    </div>
  )
}

export default Tests