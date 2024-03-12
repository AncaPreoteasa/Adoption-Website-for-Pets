import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/home">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/articles">ARTICLES</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          <li>
            <NavLink to="/adoption">ADOPTION</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
