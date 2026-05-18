function SubjectCard({ subject, progress }) {
  return (
    <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-cyan-400 transition">

      <h2 className="text-2xl font-bold text-white mb-3">
        {subject}
      </h2>

      <p className="text-slate-300">
        Progress: {progress}%
      </p>

    </div>
  )
}

export default SubjectCard