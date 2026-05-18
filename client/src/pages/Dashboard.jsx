import Sidebar from "../components/Sidebar"
import ProgressCard from "../components/ProgressCard"
import ProgressBar from "../components/ProgressBar"
import DailyGoalCard from "../components/DailyGoalCard"

function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row bg-slate-900 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 p-8">

        <div className="flex items-center justify-between mb-10">

          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-slate-400 mt-2">
              Track your academic progress
            </p>
          </div>

          <input
            type="text"
            placeholder="Search subjects..."
            className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 outline-none"
          />

        <div className="flex gap-4 mt-5 mb-10">

          <button className="bg-cyan-400 text-black px-5 py-3 rounded-xl font-bold hover:scale-105 transition">
              Continue Studying
           </button>

           <button className="border border-slate-700 px-5 py-3 rounded-xl hover:border-cyan-400 transition">
             View Analytics
           </button>

        </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">

          <ProgressCard
            title="Overall Progress"
            value="72%"
          />

          <ProgressCard
            title="Completed Topics"
            value="148"
          />

          <ProgressCard
            title="Study Streak"
            value="12 Days"
          />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div>

            <h2 className="text-3xl font-bold mb-5">
              Subject Progress
            </h2>

            <div className="flex flex-col gap-5">

              <ProgressBar
                subject="Physics"
                progress={80}
              />

              <ProgressBar
                subject="Chemistry"
                progress={65}
              />

              <ProgressBar
                subject="Mathematics"
                progress={90}
              />

            </div>

          </div>

          <div>

            <h2 className="text-3xl font-bold mb-5">
              Daily Goals
            </h2>

            <div className="flex flex-col gap-5">

              <DailyGoalCard
                subject="Physics"
                goal="Complete Electric Field"
              />

              <DailyGoalCard
                subject="Mathematics"
                goal="Practice Integration Questions"
              />

              <DailyGoalCard
                subject="Chemistry"
                goal="Revise Thermodynamics"
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard