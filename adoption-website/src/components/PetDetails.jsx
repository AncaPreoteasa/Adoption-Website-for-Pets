import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import clsx from "clsx";
import styles from "./PetDetails.module.css";
import Header from "./Header";

const PetDetails = () => {
  const { id } = useParams();
  const [petDetails, setPetDetails] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/pets?id=${id}`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log("Couldn't find the pet");
          setError("Sorry :( Couldn't find the pet");
        } else {
          response.json().then((jsonObjectArray) => {
            console.log("json: ", jsonObjectArray[0]);
            setPetDetails(jsonObjectArray[0]);
          });
        }
      })
      .catch((error) => console.error("Error fetching pet details:", error));
  }, [id]);

  if (!petDetails) {
    if (error) {
      return <p>{error}</p>;
    } else {
      return <Loader />;
    }
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2>{petDetails.name}</h2>
        <hr></hr>
        <p>
          <b>Breed:</b> {petDetails.breed}
        </p>
        <img src={petDetails.image} alt={petDetails.name} width="400"></img>
        <p>
          <b>About:</b> {petDetails.description}
        </p>
        <p>
          <b>Size:</b> {petDetails.size}
        </p>
        <p>
          <b>Age:</b> {petDetails.age}
        </p>
        <p
          className={clsx(styles.status, {
            [styles.trained]: petDetails.trained,
            [styles.notTrained]: !petDetails.trained,
          })}
        >
          <b>House-trained:</b> {petDetails.trained ? "Yes" : "No"}
        </p>
        <p
          className={clsx(styles.status, {
            [styles.vaccinated]: petDetails.vaccinated,
            [styles.notVaccinated]: !petDetails.vaccinated,
          })}
        >
          <b>Health:</b>{" "}
          {petDetails.vaccinated ? "Fully vaccinated" : "Not fully vaccinated"}
        </p>
        <button>ADOPT 🐾</button>
      </div>
    </>
  );
};

export default PetDetails;
