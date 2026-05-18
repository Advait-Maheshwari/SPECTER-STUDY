import Sidebar from "../components/Sidebar"
import UnitCard from "../components/UnitCard"

function Subjects() {

  const physicsUnits = [
    {
      name: "Electric Charges",
      status: "Mastered"
    },
    {
      name: "Coulomb Law",
      status: "Practicing"
    },
    {
      name: "Electric Field",
      status: "Learning"
    }
  ]

  const mathUnits = [
    {
      name: "Limits",
      status: "Mastered"
    },
    {
      name: "Differentiation",
      status: "Revised"
    },
    {
      name: "Integration",
      status: "Not Started"
    }
  ]

  return (
    <div className="flex bg-slate-900 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 p-8">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-4xl font-bold">
              Subjects
            </h1>

            <p className="text-slate-400 mt-2">
              Track your syllabus progress
            </p>

          </div>

          <button className="bg-cyan-400 text-black px-5 py-3 rounded-xl font-bold hover:scale-105 transition">
            Add Subject
          </button>

        </div>

        <UnitCard
          unitName="Physics - Electrostatics"
          topics={physicsUnits}
        />

        <UnitCard
          unitName="Mathematics - Calculus"
          topics={mathUnits}
        />

      </div>

    </div>
  )
}

export default Subjects