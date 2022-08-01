import { createContext, useState } from "react";

const MoviesContext = createContext();

export function MoviesContextProvider({ children }) {
  //Array s filmy, do kt. se budou přidávat
  const [movies, setMovies] = useState([]);

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
    console.log(movies);
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

  return (
    <MoviesContext.Provider
      value={{
        movies,
        addToMovies,
        deleteMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
export default MoviesContext;
