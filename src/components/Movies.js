import { React, useContext, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import MovieDetail from "./movie-detail/MovieDetail";
import MoviesSort from "./MoviesSort";
import { StyledMovies } from "./styled/StyledMovies";
import { ContainerMovies } from "./styled/containers/ContainerMovies";
import MoviesContext from "../MoviesContext";
import Backdrop from "./Backdrop";

export default function Movies(props) {
  const {
    movies,
    setDisplayedDetail,
    setClickedMovieId,
    setDetailState,
    setMovies,
  } = useContext(MoviesContext);

  // *STATES*
  const [detailClicked, setDetailClicked] = useState(false);
  const [sortCondition, setSortCondition] = useState("");
  const [sortedMovies, setSortedMovies] = useState(movies);

  // *USEEFFECTS*
  //Po načtení se nastaví default seřazování na Date newest
  useEffect(() => {
    setSortCondition("Date newest");
  }, []);

  //Sorting logika - běží při přidání movie - nový movie má na začátku hodnocení 0 (řadí se dle nastavené sort condition), nebo při změně sort condition, nebo při zadání hodnocení.
  useEffect(() => {
    let moviesToBeSorted;
    if (sortCondition == "Rating lowest") {
      moviesToBeSorted = [...movies].sort((a, b) => {
        return a.totalRating - b.totalRating;
      });
      setSortedMovies(moviesToBeSorted);
    } else if (sortCondition == "Rating highest") {
      moviesToBeSorted = [...movies].sort((a, b) => {
        return b.totalRating - a.totalRating;
      });
      setSortedMovies(moviesToBeSorted);
    } else if (sortCondition == "Date newest") {
      moviesToBeSorted = [...movies].sort((a, b) => {
        return new Date(b.dateWatched) - new Date(a.dateWatched);
      });
      setSortedMovies(moviesToBeSorted);
    } else if (sortCondition == "Date oldest") {
      moviesToBeSorted = [...movies].sort((a, b) => {
        return new Date(a.dateWatched) - new Date(b.dateWatched);
      });
      setSortedMovies(moviesToBeSorted);
    }
  }, [movies, sortCondition]);

  // **FUNCTIONS**
  ///Kliknuti na obrázek filmu
  const handleMovieClick = (movieId) => {
    setDetailClicked(true);
    setClickedMovieId(movieId);

    const detailToBeShown = movies.find((movie) => movie.id == movieId).detail;
    if (detailToBeShown.length > 0) {
      setDetailState("DISPLAY-DETAIL");
      console.log(detailToBeShown);
      setDisplayedDetail(detailToBeShown);
    } else setDetailState("DISPLAY-NO_DETAIL");
    setDisplayedDetail(detailToBeShown);
  };

  const handleMovieClickBack = () => {
    setDetailClicked(false);
  };
  //update object property v původní array po změně ratingu
  const ratingLUpdate = (movieId, newValue) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        return {
          ...movie,
          stars_1: newValue,
          totalRating: movie.stars_2 + newValue,
        };
      }
      return movie;
    });
    setMovies(updatedMovies);
  };
  //update object property v původní array po změně ratingu
  const ratingVUpdate = (movieId, newValue) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        return {
          ...movie,
          stars_2: newValue,
          totalRating: movie.stars_1 + newValue,
        };
      }
      return movie;
    });
    setMovies(updatedMovies);
    console.log(updatedMovies);
  };

  //Nastavení sort condition po vybrání z
  const onChangeSortHandler = (condition) => {
    setSortCondition(condition);
  };

  return movies.length > 0 ? (
    <div>
      <MoviesSort onChangeSort={onChangeSortHandler} selected={sortCondition} />

      <ContainerMovies>
        <StyledMovies>
          {sortedMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              movieYear={movie.movieYear}
              dateWatched={movie.dateWatched}
              imageURL="https://image.pmgstatic.com/cache/resized/w140/files/images/film/posters/158/406/158406856_d4a471.jpg"
              detailClick={handleMovieClick}
              ratingLUpdate={ratingLUpdate}
              ratingVUpdate={ratingVUpdate}
            />
          ))}
          {detailClicked ? (
            <Backdrop>
              <MovieDetail
                detailClick={handleMovieClickBack}
                movieState={detailClicked}
              />
            </Backdrop>
          ) : (
            ""
          )}
        </StyledMovies>
      </ContainerMovies>
    </div>
  ) : (
    <p className="no-movies-found-paragraph">No movies added 🥺 </p>
  );
}
