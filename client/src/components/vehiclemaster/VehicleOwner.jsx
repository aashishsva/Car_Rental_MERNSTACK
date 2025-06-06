import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VehicleOwner.css";
import Sidebar from "../sidebar/Sidebar";

const VehicleOwner = () => {
  const [owners, setOwners] = useState([]);
  const [locations, setLocations] = useState([]);
  const [formData, setFormData] = useState({
    emailid: "",
    password: "",
    fullname: "",
    mobileno: "",
    dateofbirth: "",
    locationid: "",
    address: ""
  });

  const fetchOwners = async () => {
    try {
      const res = await axios.get("http://localhost:5000/vehicalOwner");
      setOwners(res.data);
    } catch (err) {
      console.error("Error fetching vehicle owners:", err);
    }
  };

  const fetchLocations = async () => {
    try {
      const res = await axios.get("http://localhost:5000/locationMaster");
      setLocations(res.data);
    } catch (err) {
      console.error("Error fetching locations:", err);
    }
  };

  useEffect(() => {
    fetchOwners();
    fetchLocations();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/vehicalOwner", formData);
      setFormData({
        emailid: "",
        password: "",
        fullname: "",
        mobileno: "",
        dateofbirth: "",
        locationid: "",
        address: ""
      });
      fetchOwners();
    } catch (err) {
      console.error("Error adding vehicle owner:", err);
    }
  };

  return (
    <>
      {/* <Sidebar /> */}
      <div className="vehicleowner-container">
        <h2>Vehicle Owner</h2>

        <form className="vehicleowner-form" onSubmit={handleSubmit}>
          <input type="email" name="emailid" value={formData.emailid} onChange={handleChange} placeholder="Email" required />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
          <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Full Name" required />
          <input type="tel" name="mobileno" value={formData.mobileno} onChange={handleChange} placeholder="Mobile No" required />
          <input type="date" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
          <select name="locationid" value={formData.locationid} onChange={handleChange} required>
            <option value="">Select Location</option>
            {locations.map((loc) => (
              <option key={loc._id} value={loc._id}>{loc.locationname}</option>
            ))}
          </select>
          <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
          <button className="action-btn add" type="submit">Add Vehicle Owner</button>
        </form>

        <table className="vehicleowner-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {owners.map((owner, idx) => (
              <tr key={owner._id}>
                <td>{idx + 1}</td>
                <td>{owner.fullname}</td>
                <td>{owner.emailid}</td>
                <td>{owner.mobileno}</td>
                <td>{owner.locationid?.locationname || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VehicleOwner;
