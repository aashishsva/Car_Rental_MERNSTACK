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
        console.log(response.data);
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.homeContainer}>
        <h1 className={styles.homeTitle}>Available Cars for Rent</h1>
        <div className={styles.cardGrid}>
          {cars.map((car) => (
            <div className={styles.carCard} key={car._id}>
              <img
                src={`http://localhost:5000/uploads/${car.carimage1}`}
                alt={car.cartitle}
                className={styles.carImage}
              />
              <div className={styles.carDetails}>
                <h2 className={styles.carTitle}>{car.cartitle}</h2>
                <p><strong>Owner:</strong> {car.vehicleownerid?.fullname || "N/A"}</p>
                <p><strong>Rental Price:</strong> ₹{car.price} / day</p>
                <p><strong>Model Variant:</strong> {car.variant}</p>
                <p>
                  <strong>Driver:</strong>{" "}
                  <span
                    className={
                      car.driverstatus === "yes"
                        ? styles.available
                        : styles.notAvailable
                    }
                  >
                    {car.driverstatus === "yes" ? "Available" : "Not Available"}
                  </span>
                </p>
                <button className={styles.rentNowBtn}>Rent Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
