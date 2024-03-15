import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <header className={styles.header}>
      <button
        className={styles.hamburgerIcon}
        onClick={() => handleMenuToggle()}
      >
        ☰
      </button>
      <nav
        className={`${styles.nav} ${
          isOpen ? styles.showNavMobile : styles.hideNavMobile
        }`}
      >
        <ul>
          <li>
            <NavLink
              to="/pets"
              className={({ isActive }) =>
                clsx(styles.links, { [styles.active]: isActive })
              }
            >
              PETS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                clsx(styles.links, { [styles.active]: isActive })
              }
            >
              ARTICLES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                clsx(styles.links, { [styles.active]: isActive })
              }
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/adoption"
              className={({ isActive }) =>
                clsx(styles.links, { [styles.active]: isActive })
              }
            >
              ADOPTION
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
