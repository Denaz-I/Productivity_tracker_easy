import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Pages/Dashboard";
import Tasks from "./Pages/Tasks";
import Settings from "./Pages/Settings";


function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Router>
}

export default App
