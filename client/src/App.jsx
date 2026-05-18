import { Routes, Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Subjects from "./pages/Subjects"
import Tests from "./pages/Tests"
import Analytics from "./pages/Analytics"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />} />

      <Route path="/subjects" element={<Subjects />} />

      <Route path="/tests" element={<Tests />} />

      <Route path="/analytics" element={<Analytics />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

    </Routes>
  )
}

export default App