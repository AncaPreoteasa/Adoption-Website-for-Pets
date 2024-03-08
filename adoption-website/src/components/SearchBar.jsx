import React from "react";
import styles from "./SearchBar.module.css";

export function SearchBar() {
  //   const handleInputChange = (e) => {
  //     setSearchQuery(e.target.value);
  //   };

  return (
    <div className={styles.container}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search Terrier, Kitten, etc."
        // onChange={handleInputChange}
      />
    </div>
  );
}
