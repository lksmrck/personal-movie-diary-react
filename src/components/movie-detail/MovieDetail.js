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
    displayedDetail,
    setDetailState,
    detailState,
  } = useContext(MoviesContext);

  //State sledující detail, který se vyplňuje
  const [filledDetail, setFilledDetail] = useState("");

  const detailClick = () => {
    props.detailClick();
  };

  const handleDetailChange = (event) => {
    setFilledDetail(event.target.value);
    setDisplayedDetail(event.target.value);
  };

  //Přepnutí state, když se klikne na Add Movie Detail (aby se vyrenderovalo textové pole)
  const addMovieDetailHandler = () => {
    setDetailState("DISPLAY-TEXT_AREA");
  };

  //Vyplňování detailu a update movie v array z MoviesContextu
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

  //1. možné zobrazení- Když daný film má přidaný detail, tak se vyrenderuje detail.
  if (detailState === "DISPLAY-DETAIL") {
    return <DisplayDetail detailClick={detailClick} />;
  }

  //2. možné zobrazení- textové pole se zadanim detailu
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

  //3. možné zobrazení - když rozkliknutý film nemá detail
  else if (detailState === "DISPLAY-NO_DETAIL") {
    return (
      <NoMovieDetail
        addMovieDetailHandler={addMovieDetailHandler}
        detailClick={detailClick}
      />
    );
  }
}
