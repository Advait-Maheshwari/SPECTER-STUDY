import { Routes, Route } from "react-router-dom"
import SearchSubjects from "./pages/SearchSubjects"
import Dashboard from "./pages/Dashboard"
import Subjects from "./pages/Subjects"
import Tests from "./pages/Tests"
import Analytics from "./pages/Analytics"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Academic from "./pages/Academic"

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

      <Route path="/academic" element={<Academic />} />

      <Route path="/search-subjects" element={<SearchSubjects />} />

    </Routes>
  )
}

export default App