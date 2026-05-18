import { Routes, Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Subjects from "./pages/Subjects"
import Tests from "./pages/Tests"

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Dashboard />}
      />

      <Route
        path="/subjects"
        element={<Subjects />}
      />

      <Route
        path="/tests"
        element={<Tests />}
      />

    </Routes>
  )
}

export default App