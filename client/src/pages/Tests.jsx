import Sidebar from "../components/Sidebar"

function Tests() {
  return (
    <div className="flex bg-slate-900 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-10">
          Tests
        </h1>

        <div className="grid grid-cols-3 gap-5">

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">
              Easy Test
            </h2>

            <p className="text-slate-300 mb-5">
              Basic conceptual questions
            </p>

            <button className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-bold">
              Start Test
            </button>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">
              Medium Test
            </h2>

            <p className="text-slate-300 mb-5">
              Moderate difficulty questions
            </p>

            <button className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-bold">
              Start Test
            </button>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-2xl font-bold text-red-400 mb-3">
              Hard Test
            </h2>

            <p className="text-slate-300 mb-5">
              Advanced PYQ-level questions
            </p>

            <button className="bg-red-400 text-black px-5 py-2 rounded-xl font-bold">
              Start Test
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Tests