import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-950 border-r border-slate-800 p-5">

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        SPECTER
      </h1>

      <div className="flex flex-col gap-5 text-slate-300">

        <Link
          to="/"
          className="hover:text-cyan-400 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/subjects"
          className="hover:text-cyan-400 transition"
        >
          Subjects
        </Link>

        <Link
          to="/tests"
          className="hover:text-cyan-400 transition"
        >
          Tests
        </Link>

      </div>

    </div>
  )
}

export default Sidebar