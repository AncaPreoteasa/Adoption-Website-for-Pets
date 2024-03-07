import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PetDetails = () => {
  const { id } = useParams();
  const [petDetails, setPetDetails] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/pets?id=${id}`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log("NU E CAINE");
          setError("nu e caine");
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
      return <p>asteapta te rog, draga.</p>;
    }
  }

  return (
    <div>
      <h2>{petDetails.name}</h2>
      <p>ID: {petDetails.id}</p>
      <p>Breed: {petDetails.breed}</p>
    </div>
  );
};

export default PetDetails;
