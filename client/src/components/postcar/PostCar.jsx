import styles from "./PostCar.module.css";
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
      fetchCars();
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
    <div className={styles.postcarContainer}>
      <h2>Post a New Car</h2>
      <form className={styles.carForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="cartitle">Car Title</label>
          <input
            id="cartitle"
            type="text"
            name="cartitle"
            placeholder="Car Title"
            value={formData.cartitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="catid">Category ID</label>
          <input
            id="catid"
            type="text"
            name="catid"
            placeholder="Category ID"
            value={formData.catid}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="vehicleownerid">Vehicle Owner ID</label>
          <input
            id="vehicleownerid"
            type="text"
            name="vehicleownerid"
            placeholder="Vehicle Owner ID"
            value={formData.vehicleownerid}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="shortdescription">Short Description</label>
          <input
            id="shortdescription"
            type="text"
            name="shortdescription"
            placeholder="Short Description"
            value={formData.shortdescription}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="carimage1">Image URL 1</label>
          <input
            id="carimage1"
            type="text"
            name="carimage1"
            placeholder="Image URL 1"
            value={formData.carimage1}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="carimage2">Image URL 2</label>
          <input
            id="carimage2"
            type="text"
            name="carimage2"
            placeholder="Image URL 2"
            value={formData.carimage2}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="postdate">Post Date</label>
          <input
            id="postdate"
            type="date"
            name="postdate"
            value={formData.postdate}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="variant">Variant</label>
          <input
            id="variant"
            type="text"
            name="variant"
            placeholder="Variant"
            value={formData.variant}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="driverstatus">Driver Status</label>
          <input
            id="driverstatus"
            type="text"
            name="driverstatus"
            placeholder="Driver Status"
            value={formData.driverstatus}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="registrationyear">Registration Year</label>
          <input
            id="registrationyear"
            type="number"
            name="registrationyear"
            placeholder="Registration Year"
            value={formData.registrationyear}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="carvehicleno">Vehicle No.</label>
          <input
            id="carvehicleno"
            type="text"
            name="carvehicleno"
            placeholder="Vehicle No."
            value={formData.carvehicleno}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={`${styles.actionBtn} ${styles.add}`}>
          Add Car
        </button>
      </form>

      <h2>Car Database</h2>
      <table className={styles.carTable}>
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
                <button className={`${styles.actionBtn} ${styles.update}`}>
                  Edit
                </button>
                <button className={`${styles.actionBtn} ${styles.delete}`}>
                  Del
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostCar;
