function Signup() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">

      <div className="bg-slate-800 border border-slate-700 p-10 rounded-3xl w-[90%] md:w-[450px]">

        <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
          Create Account
        </h1>

        <div className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Full Name"
            className="bg-slate-900 p-4 rounded-xl outline-none border border-slate-700"
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-slate-900 p-4 rounded-xl outline-none border border-slate-700"
          />

          <select className="bg-slate-900 p-4 rounded-xl outline-none border border-slate-700">

            <option>
              Select Course
            </option>

            <option>
              IIT JEE
            </option>

            <option>
              NEET
            </option>

            <option>
              UPSC
            </option>

            <option>
              Class 12 Science
            </option>

          </select>

          <input
            type="password"
            placeholder="Password"
            className="bg-slate-900 p-4 rounded-xl outline-none border border-slate-700"
          />

          <button className="bg-cyan-400 text-black py-4 rounded-xl font-bold hover:scale-105 transition">
            Create Account
          </button>

        </div>

      </div>

    </div>
  )
}

export default Signup