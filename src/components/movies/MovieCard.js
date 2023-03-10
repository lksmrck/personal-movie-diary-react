import { React, useContext, useEffect } from "react";
import { StyledMovieCard } from "./styled";
import { Rating } from "@mui/material";
import { useState } from "react";
import { adjustFormatOfDateWatched } from "../../utils/dateFormat";

import MoviesContext from "../../store/MoviesContext";

export default function MovieCard({
  dateWatched,
  movieYear,
  ratingLUpdate,
  ratingVUpdate,
  id,
  imageURL,
  title,
  detailClick,
}) {
  const [valueL, setValueL] = useState(null);
  const [valueV, setValueV] = useState(null);

  const { deleteMovie } = useContext(MoviesContext);

  const adjustedDateWatched = adjustFormatOfDateWatched(dateWatched);

  //Some movies from the API return NaN as a movie year property - below are two helper consts for proper handling of this situation during the rendering.
  const dateFilmed = movieYear;
  const dateFilmedType = typeof dateFilmed;

  useEffect(() => {
    const localData = localStorage.getItem("movies");
    if (localData) {
      const localDataParsed = JSON.parse(localData);
      const localRatingL = localDataParsed.find(
        (movie) => movie.id === id
      ).stars_1;
      const localRatingV = localDataParsed.find(
        (movie) => movie.id === id
      ).stars_2;
      setValueL(localRatingL);
      setValueV(localRatingV);
    }
  }, []);

  const onChangeRatingL = (event, newValue) => {
    setValueL(newValue);
    ratingLUpdate(id, newValue);
  };

  const onChangeRatingV = (event, newValue) => {
    setValueV(newValue);
    ratingVUpdate(id, newValue);
  };

  const onClickButton = () => {
    deleteMovie(id);
  };

  const onClickImg = () => {
    detailClick(id);
  };

  return (
    <StyledMovieCard>
      <div className="img-icon-container">
        <img
          src={imageURL}
          width="138px"
          height="195px"
          onClick={onClickImg}
          alt="movie poster"
        />
        <div className="delete-icon" onClick={onClickButton}>
          ❌
        </div>
      </div>
      <h2 className="title-text">{title}</h2>
      <h3>
        {dateFilmedType === "number" || dateFilmedType === "string"
          ? dateFilmed
          : "---"}
      </h3>
      <h4>{adjustedDateWatched}</h4>
      <div className="rating">
        L:
        <Rating
          name="simple-controlled"
          value={valueL}
          onChange={onChangeRatingL}
          size="small"
          max={10}
          precision={0.5}
        />
      </div>
      <div className="rating">
        V:{" "}
        <Rating
          name="simple-controlled"
          value={valueV}
          onChange={onChangeRatingV}
          size="small"
          max={10}
          precision={0.5}
        />
      </div>
    </StyledMovieCard>
  );
}
