// import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/images/MetroLogo.png";
import { IoSearchSharp } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.navContainer}>
        <div>
          <Link to="/">
            <img className={styles.logo} alt="metronz-logo" src={logo} />
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <NavLink className={styles.iconLink} to="/search">
            <IoSearchSharp className={styles.icon} /> Rental Property
          </NavLink>
          <NavLink to="/services">Our Service</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <Link to="/search/results" className={styles.phoneNumber}>
            09 391 4642
          </Link>
        </div>
      </div>
    </div>
  );
}
