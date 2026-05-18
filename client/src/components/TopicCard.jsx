function TopicCard({ topic, status }) {

  const statusColor = {
    "Not Started": "bg-red-500",
    "Learning": "bg-yellow-500",
    "Practicing": "bg-blue-500",
    "Revised": "bg-purple-500",
    "Mastered": "bg-green-500"
  }

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center justify-between">

      <h3 className="text-white font-medium">
        {topic}
      </h3>

      <span className={`${statusColor[status]} px-3 py-1 rounded-full text-sm`}>
        {status}
      </span>

    </div>
  )
}

export default TopicCard