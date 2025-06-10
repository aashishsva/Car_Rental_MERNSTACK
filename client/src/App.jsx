import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";

import PostCar from "./components/postcar/PostCar";
import OrderCar from "./components/ordercar/OrderCar";
import LocationMaster from "./components/locationmaster/LocationMaster";
import VehicleMaster from "./components/vehiclemaster/VehicleOwner";
import CategoryMaster from "./components/categorymaster/CategoryMaster";
import ProtectedRoute from "./utils/ProtectedRoute";
import Navbar from "./ui/Navbar";
import Home from "./ui/Home";

import UserRegister from "./User/UserRegister";
import UserLogin from "./User/UserLogin";
import UserDashboard from "./User/UserDashboard"; // 🟢 Don't forget this import

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/userlogin" element={<UserLogin />} />

        {/* ✅ Move this inside Routes block */}
        <Route
          path="/userdashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin Protected Routes */}
        <Route
          path="/admindashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route path="postcar" element={<PostCar />} />
          <Route path="ordercar" element={<OrderCar />} />
          <Route path="locationmaster" element={<LocationMaster />} />
          <Route path="categorymaster" element={<CategoryMaster />} />
          <Route path="vehicleowner" element={<VehicleMaster />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
