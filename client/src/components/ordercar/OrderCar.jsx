// components/PostCar.js
import React from "react";
import "./OrderCar.css";
import Sidebar from "../sidebar/Sidebar";

const OrderCar = () => {
  return (
    <>
      <Sidebar />
      <div className="ordercar-container">
        <h2>Order Car</h2>
        <div className="ordercar-buttons">
          <button className="action-btn add">Add Car</button>
          <button className="action-btn update">Update Car</button>
          <button className="action-btn delete">Delete Car</button>
        </div>
      </div>
    </>
  );
};

export default OrderCar;
