import "./PostCar.css";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";

const PostCar = () => {
  const [car, setCars] = useState([]);
  const [formData, setFormData] = useState({
    catid: "",
    vehicleownerid: "",
    cartitle: "",
    shortdescription: "",
    carimage1: "",
    carimage2: "",
    postdate: "",
    price: "",
    variant: "",
    driverstatus: "",
    registrationyear: "",
    carvehicleno: "",
  });

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:5000/postcars");
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/postcars", formData);
      fetchCars(); // refresh list
      setFormData({
        catid: "",
        vehicleownerid: "",
        cartitle: "",
        shortdescription: "",
        carimage1: "",
        carimage2: "",
        postdate: "",
        price: "",
        variant: "",
        driverstatus: "",
        registrationyear: "",
        carvehicleno: "",
      });
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  return (
    <>
      {/* <Sidebar /> */}
      <div className="postcar-container">
        <h2>Post a New Car</h2>
        <form className="car-form" onSubmit={handleSubmit}>
          <input type="text" name="cartitle" placeholder="Car Title" value={formData.cartitle} onChange={handleChange} required />
          <input type="text" name="catid" placeholder="Category ID" value={formData.catid} onChange={handleChange} required />
          <input type="text" name="vehicleownerid" placeholder="Vehicle Owner ID" value={formData.vehicleownerid} onChange={handleChange} required />
          <input type="text" name="shortdescription" placeholder="Short Description" value={formData.shortdescription} onChange={handleChange} required />
          <input type="text" name="carimage1" placeholder="Image URL 1" value={formData.carimage1} onChange={handleChange} />
          <input type="text" name="carimage2" placeholder="Image URL 2" value={formData.carimage2} onChange={handleChange} />
          <input type="date" name="postdate" value={formData.postdate} onChange={handleChange} />
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
          <input type="text" name="variant" placeholder="Variant" value={formData.variant} onChange={handleChange} />
          <input type="text" name="driverstatus" placeholder="Driver Status" value={formData.driverstatus} onChange={handleChange} />
          <input type="number" name="registrationyear" placeholder="Registration Year" value={formData.registrationyear} onChange={handleChange} />
          <input type="text" name="carvehicleno" placeholder="Vehicle No." value={formData.carvehicleno} onChange={handleChange} />
          <button type="submit" className="action-btn add">Add Car</button>
        </form>

        <h2>Car Database</h2>
        <table className="car-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Car Name</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {car.map((carItem, index) => (
              <tr key={carItem._id}>
                <td>{index + 1}</td>
                <td>{carItem.cartitle}</td>
                <td>{carItem.catid?.catname || "N/A"}</td>
                <td>
                  <button className="action-btn update">Edit</button>
                  <button className="action-btn delete">Del</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PostCar;
