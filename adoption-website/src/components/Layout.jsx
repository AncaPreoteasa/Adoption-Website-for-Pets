import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Dogs from "./Dogs";
import Cats from "./Cats";
import PetCard from "./PetCard";

import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/articles">Articles</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/adoption">Adoption</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <PetCard />
      <Dogs />
      <Cats />
      <Footer />
    </>
  );
}
