// components/CategoryMaster.js
import React, { useState, useEffect } from "react";
import "./CategoryMaster.css";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";

const CategoryMaster = () => {
  const [categories, setCategories] = useState([]);
  const [catname, setCatname] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/categorymaster");
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!catname.trim()) return;
    try {
      await axios.post("http://localhost:5000/categorymaster", { catname });
      setCatname("");
      fetchCategories();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <>
      {/* <Sidebar /> */}
      <div className="categorymaster-container">
        <h2>Category Master</h2>

        <form className="category-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Category Name"
            value={catname}
            onChange={(e) => setCatname(e.target.value)}
            required
          />
          <button type="submit" className="action-btn add">Add Category</button>
        </form>

        <table className="category-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat._id}>
                <td>{index + 1}</td>
                <td>{cat.catname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryMaster;
