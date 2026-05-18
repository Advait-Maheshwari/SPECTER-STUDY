import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-full md:w-64 min-h-screen bg-slate-950 border-r border-slate-800 p-5">

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        SPECTER
      </h1>

      <div className="flex flex-col gap-5 text-slate-300">

        <Link to="/" className="hover:text-cyan-400 transition">
          Dashboard
        </Link>

        <Link to="/subjects" className="hover:text-cyan-400 transition">
          Subjects
        </Link>

        <Link to="/tests" className="hover:text-cyan-400 transition">
          Tests
        </Link>

        <Link to="/analytics" className="hover:text-cyan-400 transition">
          Analytics
        </Link>

        <Link to="/profile" className="hover:text-cyan-400 transition">
          Profile
        </Link>

        <Link to="/academic" className="hover:text-cyan-400 transition">
          Academic
        </Link>

        <div className="border-t border-slate-800 pt-5 mt-5 flex flex-col gap-5">

          <Link
            to="/login"
            className="hover:text-cyan-400 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-cyan-400 text-black px-4 py-2 rounded-xl font-bold text-center hover:scale-105 transition"
          >
            Signup
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Sidebar