import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import GlobalContext from "../context/GlobalContex";

export default function RecipeCard({ item }) {
  const { addToFavlist, favList } = useContext(GlobalContext);

  return (
    <Card
      sx={{ minWidth: 300, width: "calc(100%/4 - 8px)", position: "relative" }}
      className="card"
    >
      <CardMedia
        component="img"
        alt={item.title}
        height="194"
        image={item.image_url}
      />
      <IconButton className="position-absolute top-0 end-0" color="error" onClick={() => addToFavlist(item)}>
        {favList && favList.findIndex((items) => items.id == item.id) != -1 ? (
          <MdFavorite size={"2em"} />
        ) : (
          <MdFavoriteBorder size={"2em"} />
        )}
      </IconButton>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.publisher}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Link className="w-100" to={`/recipe-finder-app/details/${item.id}`}>
          <Button size="big" variant="contained" className="w-100">
            More Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
