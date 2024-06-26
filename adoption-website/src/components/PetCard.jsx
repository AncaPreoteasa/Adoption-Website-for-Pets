import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import Heart from "./Heart";
import styles from "./PetCard.module.css";
import { Link } from "react-router-dom";

export default function PetCard({ category, limit }) {
  const [pets, setPets] = React.useState([]);

  React.useEffect(() => {
    let url = "http://localhost:3000/pets";
    if (category) {
      url += `?type=${category}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const filteredPets = limit ? data.slice(0, limit) : data;
        setPets(filteredPets);
      })
      .catch((error) => console.error("Error fetching pets:", error.message));
  }, [category, limit]);

  return (
    <ul className={styles.container}>
      {pets.map((pet) => (
        <Card key={pet.id} sx={{ maxWidth: 200 }} className={styles.card}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            title={`${pet.name} ${pet.age} years`}
            subheader={pet.date}
          />
          <Link to={`/pet-details/${pet.id}`}>
            <CardMedia
              component="img"
              height="164"
              image={pet.image}
              alt={pet.name}
            />
          </Link>
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              className={styles.description}
            >
              {pet.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing className={styles.cardActions}>
            <Heart />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </ul>
  );
}
