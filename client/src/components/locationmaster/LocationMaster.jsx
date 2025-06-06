import React, { useState, useEffect } from "react";
import "./LocationMaster.css";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";

const LocationMaster = () => {
  const [locations, setLocations] = useState([]);
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await axios.get("http://localhost:5000/locationmaster");
      setLocations(response.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!locationName.trim()) return;
    try {
      await axios.post("http://localhost:5000/locationmaster", { name: locationName });
      setLocationName("");
      fetchLocations(); // Refresh list
    } catch (error) {
      console.error("Error adding location:", error);
    }
  };

  return (
    <>
      {/* <Sidebar /> */}
      <div className="locationmaster-container">
        <h2>Location Master</h2>

        <form className="location-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Location Name"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
            required
          />
          <button type="submit" className="action-btn add">Add Location</button>
        </form>

        <table className="location-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Location Name</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((loc, index) => (
              <tr key={loc._id}>
                <td>{index + 1}</td>
                <td>{loc.locationname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LocationMaster;
