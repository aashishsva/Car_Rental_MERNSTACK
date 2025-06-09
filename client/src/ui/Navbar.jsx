import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>CarRental</div>
      <ul className={styles.navLinks}>
        <li>
          <button className={styles.btn}>Home</button>
        </li>
        <li>
          <button className={styles.btn}>Cars</button>
        </li>
        <li>
          <button className={styles.btn}>Order Car</button>
        </li>
        <li>
          <button className={styles.btn}>User Login</button>
        </li>
        <li>
          <button className={styles.btn}>User Registration</button>
        </li>
        <li>
          <button className={styles.btn}>Admin Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
