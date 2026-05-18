import Sidebar from "../components/Sidebar"

function Profile() {
  return (
    <div className="flex flex-col md:flex-row bg-slate-900 text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-10">
          Profile
        </h1>

        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 max-w-2xl">

          <h2 className="text-3xl font-bold text-cyan-400 mb-5">
            Advait Maheshwari
          </h2>

          <div className="flex flex-col gap-4 text-slate-300">

            <p>
              Course: IIT JEE
            </p>

            <p>
              Subjects: Physics, Chemistry, Mathematics
            </p>

            <p>
              Study Streak: 12 Days
            </p>

            <p>
              Topics Completed: 148
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Profile