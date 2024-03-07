import React from "react";
import styles from "./Header.module.css";
import logoImage from "../assets/pet-logo.png";
import Heart from "./Heart";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          src={logoImage}
          alt="logo"
          width="50"
          className={styles.logo}
        ></img>
      </div>
      <div className={styles.links}>
        <Heart className={styles.heart} />
        <NavLink to="/signUp" className={styles.signUp}>
          Sign Up
        </NavLink>
        <NavLink to="/logIn" className={styles.logIn}>
          Log In
        </NavLink>
      </div>
    </div>
  );
}
