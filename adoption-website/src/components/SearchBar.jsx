import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import searchImage from "../assets/search.png";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/pets");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search Terrier, Kitten, etc."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit" className={styles.searchButton}>
          <img
            src={searchImage}
            alt="logo"
            width="20"
            className={styles.search}
          ></img>
        </button>
      </form>
    </div>
  );
}
