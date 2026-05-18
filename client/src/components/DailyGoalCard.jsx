function DailyGoalCard({ subject, goal }) {
  return (
    <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">

      <h2 className="text-xl font-bold text-cyan-400 mb-2">
        {subject}
      </h2>

      <p className="text-slate-300">
        {goal}
      </p>

    </div>
  )
}

export default DailyGoalCard