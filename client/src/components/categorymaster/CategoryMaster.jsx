// components/PostCar.js
import React from "react";
import "./CategoryMaster.css";
import Sidebar from "../sidebar/Sidebar";

const CategoryMaster = () => {
  return (
    <>
      <Sidebar />
      <div className="categorymaster-container">
        <h2>Category Master</h2>
        <div className="categorymaster-buttons">
          <button className="action-btn add">Add Category</button>
          <button className="action-btn update">Update Category</button>
          <button className="action-btn delete">Delete Category</button>
        </div>
      </div>
    </>
  );
};

export default CategoryMaster;
