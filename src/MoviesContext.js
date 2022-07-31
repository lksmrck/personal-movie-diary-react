import { createContext, useState } from "react";

const MoviesContext = createContext();

export function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState([]);

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
    console.log(movies);
  };

  const deleteMovie = (movieId) => {
    setMovies((prevMovies) => {
      const updatedMovies = prevMovies.filter((movie) => movie.id !== movieId);
      return updatedMovies;
    });
  };

  return (
    <MoviesContext.Provider value={{ movies, addToMovies, deleteMovie }}>
      {children}
    </MoviesContext.Provider>
  );
}
export default MoviesContext;
