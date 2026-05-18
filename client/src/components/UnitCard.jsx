import TopicCard from "./TopicCard"

function UnitCard({ unitName, topics }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 mb-6">

      <h2 className="text-2xl font-bold text-cyan-400 mb-5">
        {unitName}
      </h2>

      <div className="flex flex-col gap-4">

        {topics.map((topic, index) => (
          <TopicCard
            key={index}
            topic={topic.name}
            status={topic.status}
          />
        ))}

      </div>

    </div>
  )
}

export default UnitCard