import styles from "./PostCar.module.css";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";

const PostCar = () => {
  const [cars, setCars] = useState([]);
  const [categories, setCategories] = useState([]);
  const [owners, setOwners] = useState([]);
  const [formData, setFormData] = useState({
    catid: "",
    vehicleownerid: "",
    cartitle: "",
    shortdescription: "",
    carimage1: null,
    carimage2: null,
    postdate: "",
    price: "",
    variant: "",
    driverstatus: "",
    registrationyear: "",
    carvehicleno: "",
  });

  useEffect(() => {
    fetchCars();
    fetchCategories();
    fetchOwners();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:5000/postcars");
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/categoryMaster");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchOwners = async () => {
    try {
      const response = await axios.get("http://localhost:5000/vehicalOwner");
      setOwners(response.data);
    } catch (error) {
      console.error("Error fetching owners:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== "") {
          data.append(key, value);
        }
      });

      await axios.post("http://localhost:5000/postcars", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      fetchCars();
      setFormData({
        catid: "",
        vehicleownerid: "",
        cartitle: "",
        shortdescription: "",
        carimage1: null,
        carimage2: null,
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

  // Placeholder edit & delete handlers
  const handleEdit = (id) => {
    alert(`Edit feature for ID: ${id} will be added soon.`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this car?")) return;

    try {
      await axios.delete(`http://localhost:5000/postcars/${id}`);
      fetchCars();
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  return (
    <div className={styles.postcarContainer}>
      {/* <Sidebar /> */}
      <h2>Post a New Car</h2>
      <form
        className={styles.carForm}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className={styles.formGroup}>
          <label htmlFor="cartitle">Car Title</label>
          <input
            id="cartitle"
            type="text"
            name="cartitle"
            value={formData.cartitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="catid">Category</label>
          <select
            id="catid"
            name="catid"
            value={formData.catid}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.catname}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="vehicleownerid">Vehicle Owner</label>
          <select
            id="vehicleownerid"
            name="vehicleownerid"
            value={formData.vehicleownerid}
            onChange={handleChange}
            required
          >
            <option value="">Select Owner</option>
            {owners.map((owner) => (
              <option key={owner._id} value={owner._id}>
                {owner.fullname}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="shortdescription">Short Description</label>
          <input
            id="shortdescription"
            type="text"
            name="shortdescription"
            value={formData.shortdescription}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="carimage1">Image 1</label>
          <input
            id="carimage1"
            type="file"
            name="carimage1"
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="carimage2">Image 2</label>
          <input
            id="carimage2"
            type="file"
            name="carimage2"
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
            <th>#</th>
            <th>Car Title</th>
            <th>Category</th>
            <th>Owner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((carItem, index) => (
            <tr key={carItem._id}>
              <td>{index + 1}</td>
              <td>{carItem.cartitle}</td>
              <td>{carItem.catid?.catname || "N/A"}</td>
              <td>{carItem.vehicleownerid?.fullname || "N/A"}</td>
              <td>
                <button
                  className={`${styles.actionBtn} ${styles.update}`}
                  onClick={() => handleEdit(carItem._id)}
                >
                  Edit
                </button>
                <button
                  className={`${styles.actionBtn} ${styles.delete}`}
                  onClick={() => handleDelete(carItem._id)}
                >
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
