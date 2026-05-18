function SubjectCard({ subject, progress }) {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">

      <h2 className="text-2xl font-bold text-cyan-400 mb-3">
        {subject}
      </h2>

      <p className="text-slate-300">
        Progress: {progress}%
      </p>

    </div>
  )
}

export default SubjectCard