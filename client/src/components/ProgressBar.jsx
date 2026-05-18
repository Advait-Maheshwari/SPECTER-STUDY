function ProgressBar({ subject, progress }) {
  return (
    <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">

      <div className="flex items-center justify-between mb-3">

        <h2 className="text-lg font-semibold">
          {subject}
        </h2>

        <span className="text-cyan-400 font-bold">
          {progress}%
        </span>

      </div>

      <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">

        <div
          className="h-full bg-cyan-400 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>

      </div>

    </div>
  )
}

export default ProgressBar