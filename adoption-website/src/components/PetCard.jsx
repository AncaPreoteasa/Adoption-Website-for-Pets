import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Heart from "./Heart";
import styles from "./PetCard.module.css";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PetCard({
  pets: initialPets,
  displayOnlyDogs,
  displayOnlyCats,
  displayOther,
}) {
  const [pets, setPets] = React.useState(initialPets || []);
  const [expandedId, setExpandedId] = React.useState(-1);

  React.useEffect(() => {
    if (!initialPets) {
      fetch("http://localhost:3000/pets").then((res) =>
        res.json().then((data) => setPets(data))
      );
    }
  }, [initialPets]);

  const handleExpandClick = (i) => {
    setExpandedId((prevId) => (prevId === i ? -1 : i));
  };

  const filteredPets = pets.filter((pet) => {
    if (displayOnlyDogs) {
      return pet.type === "Dog";
    } else if (displayOnlyCats) {
      return pet.type === "Cat";
    } else if (displayOther) {
      return pet.type !== "Dog" && pet.type !== "Cat";
    }
    return true;
  });

  const petsToDisplay = filteredPets.slice(0, 4);

  return (
    <ul className={styles.container}>
      {petsToDisplay.map((pet, i) => (
        <Card key={pet.id} sx={{ maxWidth: 200 }} className={styles.card}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
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
          <CardActions disableSpacing>
            <Heart />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              onClick={() => handleExpandClick(i)}
              aria-expanded={expandedId === i}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                <b>Details:</b>
              </Typography>
              <div>
                <b>Location: </b>
                {pet.location}
              </div>
              <div>
                <b>Gender: </b>
                {pet.gender}
              </div>
              <hr></hr>
              <div>{pet.description}</div>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </ul>
  );
}
