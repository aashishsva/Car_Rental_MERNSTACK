// components/PostCar.js
import React from "react";
import "./PostCar.css";
import Sidebar from "../sidebar/Sidebar";

const PostCar = () => {
  return (
    <>
      <Sidebar />
      <div className="postcar-container">
        <h2>Post Car</h2>
        <div className="postcar-buttons">
          <button className="action-btn add">Add Car</button>
          <button className="action-btn update">Update Car</button>
          <button className="action-btn delete">Delete Car</button>
        </div>
      </div>
    </>
  );
};

export default PostCar;
