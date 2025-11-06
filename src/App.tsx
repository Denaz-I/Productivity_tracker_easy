import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Tasks from "./Pages/Tasks";


function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Tasks />} />
    </Routes>
  </Router>
}

export default App
