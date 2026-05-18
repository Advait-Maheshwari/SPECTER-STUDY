function ProgressCard({ title, value }) {
  return (
    <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">

      <h3 className="text-slate-400 mb-2">
        {title}
      </h3>

      <h1 className="text-4xl font-bold text-cyan-400">
        {value}
      </h1>

    </div>
  )
}

export default ProgressCard