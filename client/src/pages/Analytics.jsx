import Sidebar from "../components/Sidebar"

function Analytics() {
  return (
    <div className="flex bg-slate-900 text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-10">
          Analytics
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-xl mb-3 text-slate-300">
              Weekly Study Hours
            </h2>

            <h1 className="text-5xl font-bold text-cyan-400">
              42h
            </h1>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-xl mb-3 text-slate-300">
              Completion Rate
            </h2>

            <h1 className="text-5xl font-bold text-green-400">
              78%
            </h1>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-xl mb-3 text-slate-300">
              Weak Subject
            </h2>

            <h1 className="text-4xl font-bold text-red-400">
              Chemistry
            </h1>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Analytics