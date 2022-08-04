import React, { useContext, useState, useEffect } from "react";
import MoviesContext from "../../MoviesContext";
import AddMovieDetail from "./AddMovieDetail";
import NoMovieDetail from "./NoMovieDetail";
import DisplayDetail from "./DisplayDetail";
import { getCheckboxUtilityClass } from "@mui/material";

export default function MovieDetail(props) {
  const {
    movies,
    clickedMovieId,
    setMovies,
    setDisplayedDetail,
    displayedDetail,
    setDetailState,
    detailState,
  } = useContext(MoviesContext);

  //State sledující detail, který se vyplňuje
  const [filledDetail, setFilledDetail] = useState("");

  const detailExistsCheck = () => {};

  const detailClick = () => {
    props.detailClick();
  };

  const handleDetailChange = (event) => {
    setFilledDetail(event.target.value);
    setDisplayedDetail(event.target.value);
    console.log(filledDetail);
  };

  //Přepunutí state, když se klikne na Add Movie Detail (aby se vyrenderovalo textové pole)
  const addMovieDetailHandler = () => {
    setDetailState("DISPLAY-TEXT_AREA");
  };

  //Vyplňování detailu a update movie v array z MoviesContextu
  const detailSubmitHandler = (event) => {
    event.preventDefault();
    setDetailState("DISPLAY-DETAIL");
    console.log(displayedDetail);

    const updatedMovies = movies.map((movie) => {
      if (movie.id === clickedMovieId) {
        return { ...movie, detail: filledDetail };
      }
      return movie;
    });
    setMovies(updatedMovies);
    console.log(movies);
  };

  const testDeleteLater = () => {
    console.log(clickedMovieId);
    console.log(detailState);
  };

  const closeDetailHandler = () => {
    props.detailClick();
  };

  //1. možný render - Když daný film má přidaný detail, tak se vyrenderuje detail.
  if (detailState == "DISPLAY-DETAIL") {
    return (
      <DisplayDetail
        detailClick={detailClick}
        testDeleteLater={testDeleteLater}
      />
    );
  }

  //2. možný render - textové pole se zadanim detailu
  else if (detailState === "DISPLAY-TEXT_AREA") {
    return (
      <AddMovieDetail
        handleDetailChange={handleDetailChange}
        filledDetail={filledDetail}
        detailSubmitHandler={detailSubmitHandler}
        closeDetailHandler={closeDetailHandler}
      />
    );
  }

  //3. možný render - když rozkliknutý film nemá detail
  else if (detailState === "DISPLAY-NO_DETAIL") {
    return (
      <NoMovieDetail
        addMovieDetailHandler={addMovieDetailHandler}
        detailClick={detailClick}
      />
    );
  }
}
