import Sidebar from "../components/Sidebar"
import SubjectCard from "../components/SubjectCard"
import ProgressCard from "../components/ProgressCard"

function Dashboard() {
  return (
    <div className="flex bg-slate-900 text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

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

        <h2 className="text-3xl font-bold mb-5">
          Subjects
        </h2>

        <div className="grid grid-cols-3 gap-5">

          <SubjectCard
            subject="Physics"
            progress="80"
          />

          <SubjectCard
            subject="Chemistry"
            progress="65"
          />

          <SubjectCard
            subject="Mathematics"
            progress="90"
          />

        </div>

      </div>

    </div>
  )
}

export default Dashboard