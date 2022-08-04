import { createContext, useEffect, useState } from "react";

const MoviesContext = createContext();

export function MoviesContextProvider({ children }) {
  //Array s filmy, do kt. se budou přidávat
  const [movies, setMovies] = useState([]);
  const [displayedDetail, setDisplayedDetail] = useState("");
  //Sleduje ID filmu, na který se kliknulo - aby pak šel identifikovat až se bude měnit detail
  const [clickedMovieId, setClickedMovieId] = useState("");

  const [detailState, setDetailState] = useState("DISPLAY-NO_DETAIL");

  //Funkce na přidání filmu do array
  const addToMovies = (addedMovie) => {
    const movieToBeAdded = {
      id: addedMovie.id,
      title: addedMovie.title,
      movieYear: addedMovie.movieYear,
      dateWatched: addedMovie.dateWatched,
      stars_1: "",
      stars_2: "",
      detail: "",
    };

    setMovies((prevMovies) => {
      return [movieToBeAdded, ...prevMovies];
    });
  };

  //Funkce na odstranění filmu po kliknutí na ikonu.
  const deleteMovie = (movieId) => {
    setMovies((prevMovies) => {
      const updatedMovies = prevMovies.filter((movie) => movie.id !== movieId);
      return updatedMovies;
    });
  };

  //Po kliknutí na obrázek s filmem se objeví modální okno. Tam se vyrenderuje buď "Add Detail" nebo ten detail, pokud už pridaný je. Tato funkce je pro přidání detailu.
  const onAddMovieDetail = (movieId) => {};

  const onChangeDisplayedDetail = () => {
    const detailToBeShown = movies.find(
      (movie) => movie.id == clickedMovieId
    ).detail;

    console.log(detailToBeShown);
    setDisplayedDetail(detailToBeShown);
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        addToMovies,
        deleteMovie,
        displayedDetail,
        setDisplayedDetail,
        setClickedMovieId,
        clickedMovieId,
        onChangeDisplayedDetail,
        setDetailState,
        detailState,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
export default MoviesContext;
