// components/PostCar.js
import React from "react";
import "./LocationMaster.css";
import Sidebar from "../sidebar/Sidebar";

const LocationMaster = () => {
  return (
    <>
      <Sidebar />
      <div className="locationmaster-container">
        <h2>Location Master</h2>
        <div className="locationmaster-buttons">
          <button className="action-btn add">Add Location</button>
          <button className="action-btn update">Update Location</button>
          <button className="action-btn delete">Delete Location</button>
        </div>
      </div>
    </>
  );
};

export default LocationMaster;
