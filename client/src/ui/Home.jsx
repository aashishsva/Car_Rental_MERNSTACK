import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../ui/Navbar";
import styles from "./Home.module.css";


const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/postcars");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1 className="home-title">Available Cars</h1>
        <div className="card-grid">
          {cars.map((car) => (
            <div className="car-card" key={car._id}>
              <img src={car.carimage1} alt={car.cartitle} />
              <div className="car-details">
                <h2>{car.cartitle}</h2>
                <p><strong>Owner:</strong> {car.vehicleownerid?.ownername || "N/A"}</p>
                <p><strong>Price:</strong> ₹{car.price} / day</p>
                <p><strong>Model No:</strong> {car.variant}</p>
                <p>
                  <strong>Driver:</strong>{" "}
                  <span className={car.driverstatus === "yes" ? "available" : "not-available"}>
                    {car.driverstatus === "yes" ? "Available" : "Not Available"}
                  </span>
                </p>
                <button className="rent-now-btn">Rent Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
