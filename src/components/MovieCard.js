import { React, useContext } from "react";
import { StyledMovieCard } from "./styled/StyledMovieCard";
import { Rating } from "@mui/material";
import { useState } from "react";
import { GoTrashcan } from "react-icons/go";
import MoviesContext from "../MoviesContext";

export default function MovieCard(props) {
  const [value, setValue] = useState(null);

  const { deleteMovie } = useContext(MoviesContext);

  const onChangeRating = (event, newValue) => {
    setValue(newValue);
  };

  const onClickButton = () => {
    deleteMovie(props.id);
  };

  return (
    <StyledMovieCard>
      <div className="img-trash-container">
        <img src={props.imageURL} width="138px" height="195px" />
        <GoTrashcan className="trash-icon" onClick={onClickButton} />
      </div>
      <h2>{props.title}</h2>
      <h3>{props.movieYear}</h3>
      <h4>{props.dateWatched}</h4>
      <span>
        L:
        <Rating
          name="simple-controlled"
          value={value}
          onChange={onChangeRating}
          size="small"
          max={10}
          precision={0.5}
        />
      </span>
      <span>
        V:{" "}
        <Rating
          name="simple-controlled"
          value={value}
          onChange={onChangeRating}
          size="small"
          max={10}
          precision={0.5}
        />
      </span>
    </StyledMovieCard>
  );
}
