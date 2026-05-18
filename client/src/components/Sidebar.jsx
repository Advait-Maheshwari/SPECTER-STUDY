function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-950 border-r border-slate-800 p-5">

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        SPECTER
      </h1>

      <div className="flex flex-col gap-5 text-slate-300">

        <button className="text-left hover:text-cyan-400 transition">
          Dashboard
        </button>

        <button className="text-left hover:text-cyan-400 transition">
          Subjects
        </button>

        <button className="text-left hover:text-cyan-400 transition">
          Progress
        </button>

        <button className="text-left hover:text-cyan-400 transition">
          Tests
        </button>

      </div>

    </div>
  )
}

export default Sidebar