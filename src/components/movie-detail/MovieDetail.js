import React, { useContext, useState } from "react";
import MoviesContext from "../../store/MoviesContext";
import AddMovieDetail from "./AddMovieDetail";
import NoMovieDetail from "./NoMovieDetail";
import DisplayDetail from "./DisplayDetail";

export default function MovieDetail(props) {
  const {
    movies,
    clickedMovieId,
    setMovies,
    setDisplayedDetail,
    setDetailState,
    detailState,
  } = useContext(MoviesContext);

  const [filledDetail, setFilledDetail] = useState("");

  const detailClick = () => {
    props.detailClick();
  };

  const handleDetailChange = (event) => {
    setFilledDetail(event.target.value);
    setDisplayedDetail(event.target.value);
  };

  const addMovieDetailHandler = () => {
    setDetailState("DISPLAY-TEXT_AREA");
  };

  const detailSubmitHandler = (event) => {
    event.preventDefault();
    setDetailState("DISPLAY-DETAIL");

    const updatedMovies = movies.map((movie) => {
      if (movie.id === clickedMovieId) {
        return { ...movie, detail: filledDetail };
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

  const closeDetailHandler = () => {
    props.detailClick();
  };

  //1. Possible render - When movie has added detail by the user, the detail is rendered.
  if (detailState === "DISPLAY-DETAIL") {
    return <DisplayDetail detailClick={detailClick} />;
  }

  //2. Possible render - Text area with possibility for the user to write detail (after the 3. Possible render below, when user clicks on "Add detail")
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

  //3. Possible render - When movie has no detail added by user.
  else if (detailState === "DISPLAY-NO_DETAIL") {
    return (
      <NoMovieDetail
        addMovieDetailHandler={addMovieDetailHandler}
        detailClick={detailClick}
      />
    );
  }
}
