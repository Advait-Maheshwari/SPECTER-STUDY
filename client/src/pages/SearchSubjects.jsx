import { useState } from "react"

import Sidebar from "../components/Sidebar"

import api from "../api/api"

function SearchSubjects() {

  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const searchSubjects = async (value) => {

    setQuery(value)

    try {

      const response = await api.get(
        `/search/subjects?q=${value}`
      )

      setResults(response.data)

    } catch (error) {

      console.log(error)

    }

  }

  return (
    <div className="flex bg-slate-900 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Search Subjects
        </h1>

        <input
          type="text"
          value={query}
          onChange={(e) => searchSubjects(e.target.value)}
          placeholder="Search any subject..."
          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {results.map((subject) => (

            <div
              key={subject.id}
              className="bg-slate-800 p-5 rounded-2xl border border-slate-700"
            >

              <h2 className="text-2xl font-bold text-cyan-400 mb-3">
                {subject.name}
              </h2>

              <p className="text-slate-300">
                {subject.optional
                  ? "Optional Subject"
                  : "Core Subject"}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default SearchSubjects