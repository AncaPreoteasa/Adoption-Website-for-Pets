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

export default function PetCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [pets, setPets] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/pets").then((res) =>
      res.json().then((data) => setPets(data))
    );
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ul className={styles.container}>
      {pets.map((pet) => (
        <Card key={pet.id} sx={{ maxWidth: 345 }} className={styles.card}>
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
          <CardMedia
            component="img"
            height="194"
            image={pet.image}
            alt={pet.name}
          />
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
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Details:</Typography>
              <div>{pet.location}</div>
              <div>{pet.gender}</div>
              <div>{pet.description}</div>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </ul>
  );
}
