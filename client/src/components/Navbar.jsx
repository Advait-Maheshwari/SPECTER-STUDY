function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-5 bg-slate-950 border-b border-slate-800">
      
      <h1 className="text-2xl font-bold text-cyan-400">
        SPECTER
      </h1>

      <div className="flex gap-6 text-slate-300">
        <button className="hover:text-cyan-400 transition">
          Dashboard
        </button>

        <button className="hover:text-cyan-400 transition">
          Subjects
        </button>

        <button className="hover:text-cyan-400 transition">
          Tests
        </button>
      </div>

    </nav>
  )
}

export default Navbar