// components/PostCar.js
import React from "react";
import "./VehicleOwner.css";
import Sidebar from "../sidebar/Sidebar";

const VehicleOwner = () => {
  return (
    <>
      <Sidebar />
      <div className="vehicleowner-container">
        <h2>Vehicle Owner</h2>
        <div className="vehicleowner-buttons">
          <button className="action-btn check">Check Status</button>
          
        </div>
      </div>
    </>
  );
};

export default VehicleOwner;
