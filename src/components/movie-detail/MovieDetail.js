import React, { useContext, useState, useEffect } from "react";
import MoviesContext from "../../MoviesContext";
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
  } = useContext(MoviesContext);
  //State, kterému se přidělují 3 hodnoty a podle nich se podmíněně renderujou věci v modálním okně. Viz níže.
  //Tyto hodnoty může state mít:
  // "DISPLAY-DETAIL"
  // "DISPLAY-TEXT_AREA"
  // "DISPLAY-NO_DETAIL"
  const [detailState, setDetailState] = useState("DISPLAY-NO_DETAIL");
  //State sledující detail, který se vyplňuje
  const [filledDetail, setFilledDetail] = useState("");
  const [clickedMovieHasDetail, setClickedMovieHasDetail] = useState(null);

  useEffect(() => {
    if (displayedDetail.length > 0) {
      /* setClickedMovieHasDetail(true) */
      setDetailState("DISPLAY-DETAIL");
    }
  }, []);

  const detailClick = () => {
    props.detailClick();
  };

  useEffect(() => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === clickedMovieId) {
        return { ...movie, detail: filledDetail };
      }
      return movie;
    });
    setMovies(updatedMovies);
  }, [filledDetail]);

  const handleDetailChange = (event) => {
    setFilledDetail(event.target.value);
  };

  //Přepunutí state, když se klikne na Add Movie Detail (aby se vyrenderovalo textové pole)
  const addMovieDetailHandler = () => {
    setDetailState("DISPLAY-TEXT_AREA");
  };

  //Vyplňování detailu a update movie v array z MoviesContextu
  const detailSubmitHandler = (event) => {
    event.preventDefault();
    setDetailState("DISPLAY-DETAIL");

    const detailToBeShown = movies.find(
      (movie) => movie.id == clickedMovieId
    ).detail;
    console.log(detailToBeShown);
    setDisplayedDetail(detailToBeShown);

    //2.zpusob
    /* const movieIndex = movies.findIndex(
      (movie) => movie.id == clickedMovieId
    );
    setMovies((prevMovies) => {
      return [...prevMovies, prevMovies.[movieIndex].detail = detail]
    }) */
  };

  const closeDetailHandler = () => {
    props.detailClick();
  };

  //3. možný render - Když daný film má přidaný detail, tak se vyrenderuje detail.
  if (detailState == "DISPLAY-DETAIL") {
    return <DisplayDetail detailClick={detailClick} />;
  }

  //1. možný render - textové pole se zadanim detailu
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

  //2. možný render - když rozkliknutý film nemá detail
  else if (detailState === "DISPLAY-NO_DETAIL") {
    return (
      <NoMovieDetail
        addMovieDetailHandler={addMovieDetailHandler}
        detailClick={detailClick}
      />
    );
  }
}
