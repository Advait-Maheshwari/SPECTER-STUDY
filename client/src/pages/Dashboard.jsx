import Sidebar from "../components/Sidebar"
import ProgressCard from "../components/ProgressCard"
import ProgressBar from "../components/ProgressBar"
import DailyGoalCard from "../components/DailyGoalCard"

function Dashboard() {
  return (
    <div className="flex bg-slate-900 text-white min-h-screen">

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

        </div>

        <div className="grid grid-cols-3 gap-5 mb-10">

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

        <div className="grid grid-cols-2 gap-8">

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