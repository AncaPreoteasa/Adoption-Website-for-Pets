import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import PetCard from "./PetCard";
import Header from "./Header";
import { SearchBar } from "./SearchBar";
import NavBar from "./NavBar";
import dogImage from "../assets/dog.png";
import catImage from "../assets/cat.png";
import pawImage from "../assets/paw2.png";

import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <Header />
      <NavBar />
      <div className={styles.container}>
        <div className={styles.headingsContainer}>
          <SearchBar />
          <h1 className={styles.heading1}>Find your new best friend</h1>
          <h2 className={styles.heading2}>
            Browse pets from all over the country.
          </h2>
        </div>
        <div className={styles.categoryContainer}>
          <NavLink to="dogs" className={styles.category}>
            <img
              src={dogImage}
              alt="logo"
              width="50"
              className={styles.dog}
            ></img>
            Dogs
          </NavLink>
          <NavLink to="cats" className={styles.category}>
            <img
              src={catImage}
              alt="logo"
              width="50"
              className={styles.cat}
            ></img>
            Cats
          </NavLink>
          <NavLink to="other" className={styles.category}>
            <img
              src={pawImage}
              alt="logo"
              width="50"
              className={styles.paw}
            ></img>
            Other
          </NavLink>
        </div>
      </div>
      <h2 className={styles.headingPetsAvailable}>
        Pets Available for Adoption ⬇
      </h2>
      <PetCard limit={4} />
      <Footer />
    </>
  );
}
