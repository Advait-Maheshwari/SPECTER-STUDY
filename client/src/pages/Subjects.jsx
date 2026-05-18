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

        <h1 className="text-4xl font-bold mb-10">
          Subjects
        </h1>

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