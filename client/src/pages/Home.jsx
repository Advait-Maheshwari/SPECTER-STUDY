import Navbar from "../components/Navbar"
function Home() {
return (
  <div className="min-h-screen bg-slate-900 text-white">

    <Navbar />

    <div className="flex flex-col items-center justify-center h-[90vh]">

      <h1 className="text-6xl font-bold text-cyan-400 mb-4">
        SPECTER STUDY
      </h1>

      <p className="text-slate-300 text-lg">
        Smart Academic Progress Tracker
      </p>

    </div>

  </div>
)
}
export default Home