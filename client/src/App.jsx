import { Routes, Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Subjects from "./pages/Subjects"
import Tests from "./pages/Tests"
import Analytics from "./pages/Analytics"
import Profile from "./pages/Profile"

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

      <Route
        path="/analytics"
        element={<Analytics />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

    </Routes>
  )
}

export default App