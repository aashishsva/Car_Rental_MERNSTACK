import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin"
import AdminDashboard from "./Admin/AdminDashboard"

import PostCar from "./components/postcar/PostCar"
import OrderCar from "./components/ordercar/OrderCar";
import LocationMaster from "./components/locationmaster/LocationMaster";
import VehicleMaster from "./components/vehiclemaster/VehicleOwner";
import CategoryMaster from "./components/categorymaster/CategoryMaster";
import ProtectedRoute from "./utils/ProtectedRoute";
import Userui from "./ui/Navbar";
import Navbar from "./ui/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<AdminLogin />} />

        {/* Protected Routes */}
        <Route path="/admindashboard" element={
          <ProtectedRoute> 
            <AdminDashboard /> 
            </ProtectedRoute>}
        >
          <Route path="postcar" element={<PostCar />} />
          <Route path="ordercar" element={<OrderCar />} />
          <Route path="locationmaster" element={<LocationMaster />} />
          <Route path="categorymaster" element={<CategoryMaster />} />
          <Route path="vehicleowner" element={<VehicleMaster />} />
        </Route>

        {/* Unknown path redirect */}
        <Route path="/" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App
