import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin"
import AdminDashboard from "./Admin/AdminDashboard"

import PostCar from "./components/postcar/PostCar"


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="admindashboard/postcar" element={<PostCar />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
