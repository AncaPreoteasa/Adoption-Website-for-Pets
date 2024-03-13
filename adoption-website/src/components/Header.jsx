import React from "react";
import styles from "./Header.module.css";
import logoImage from "../assets/pet-logo2.png";
import Heart from "./Heart";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

export default function Header() {
  const navigateTo = useNavigate();

  const goBackToLayout = () => {
    navigateTo("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          src={logoImage}
          alt="logo"
          width="50"
          className={styles.logo}
          onClick={goBackToLayout}
        ></img>
      </div>
      <div className={styles.links}>
        <Heart className={styles.heart} />
        <NavLink
          to="/signUp"
          className={({ isActive }) =>
            clsx(styles.signUp, { [styles.active]: isActive })
          }
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/logIn"
          className={({ isActive }) =>
            clsx(styles.logIn, { [styles.active]: isActive })
          }
        >
          Log In
        </NavLink>
      </div>
    </div>
  );
}
