import { createContext, useEffect, useState } from "react";

const MoviesContext = createContext();

export function MoviesContextProvider({ children }) {
  //Array of watched movies
  const [movies, setMovies] = useState([]);
  const [displayedDetail, setDisplayedDetail] = useState("");
  const [clickedMovieId, setClickedMovieId] = useState("");

  //State for the controlling of the render of components in the modal window (MovieDetail component)
  //Possible values:
  // "DISPLAY-DETAIL"
  // "DISPLAY-TEXT_AREA"
  // "DISPLAY-NO_DETAIL"
  const [detailState, setDetailState] = useState("");

  useEffect(() => {
    const localData = localStorage.getItem("movies");
    if (localData) {
      setMovies(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addToMovies = (addedMovie) => {
    const movieToBeAdded = {
      id: addedMovie.id,
      title: addedMovie.title,
      movieYear: addedMovie.movieYear,
      imageURL: addedMovie.imageURL,
      dateWatched: addedMovie.dateWatched,
      stars_1: 0,
      stars_2: 0,
      totalRating: null,
      detail: "",
    };

    setMovies((prevMovies) => {
      return [movieToBeAdded, ...prevMovies];
    });
  };

  const deleteMovie = (movieId) => {
    setMovies((prevMovies) => {
      const updatedMovies = prevMovies.filter((movie) => movie.id !== movieId);
      return updatedMovies;
    });
  };

  const onChangeDisplayedDetail = () => {
    const detailToBeShown = movies.find(
      (movie) => movie.id === clickedMovieId
    ).detail;

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
