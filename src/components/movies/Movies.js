import { React, useContext, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import MovieDetail from "../movie-detail/MovieDetail";
import MoviesSort from "../sort-and-statistics/MoviesSort";
import { StyledMovies } from "./styled";
import { ContainerMovies } from "./styled";
import { StyledNoMoviesFound } from "./styled";
import MoviesContext from "../../store/MoviesContext";
import Backdrop from "../../layout/Backdrop";

export default function Movies() {
  const {
    movies,
    setDisplayedDetail,
    setClickedMovieId,
    setDetailState,
    setMovies,
  } = useContext(MoviesContext);

  const [detailClicked, setDetailClicked] = useState(false);
  const [sortCondition, setSortCondition] = useState("");
  const [sortedMovies, setSortedMovies] = useState(movies);

  //Default sorting condition for displayed movies after loading is set to "Date newest"
  useEffect(() => {
    setSortCondition("Date newest");
  }, []);

  const onChangeSortHandler = (condition) => {
    setSortCondition(condition);
  };

  //Sorting logic switch statement -> if the movies array or sortCondition changes - Rating of the newly added movie is set to 0 (and is sorted by the set sorting condition).
  useEffect(() => {
    let moviesToBeSorted;
    switch (sortCondition) {
      case "Rating lowest":
        moviesToBeSorted = [...movies].sort((a, b) => {
          return a.totalRating - b.totalRating;
        });
        setSortedMovies(moviesToBeSorted);
        break;
      case "Rating highest":
        moviesToBeSorted = [...movies].sort((a, b) => {
          return b.totalRating - a.totalRating;
        });
        setSortedMovies(moviesToBeSorted);
        break;
      case "Date newest":
        moviesToBeSorted = [...movies].sort((a, b) => {
          return new Date(b.dateWatched) - new Date(a.dateWatched);
        });
        setSortedMovies(moviesToBeSorted);
        break;
      case "Date oldest":
        moviesToBeSorted = [...movies].sort((a, b) => {
          return new Date(a.dateWatched) - new Date(b.dateWatched);
        });
        setSortedMovies(moviesToBeSorted);
        break;
    }
  }, [movies, sortCondition]);

  const handleMovieClick = (movieId) => {
    setDetailClicked(true);
    setClickedMovieId(movieId);

    const detailToBeShown = movies.find((movie) => movie.id === movieId).detail;
    if (detailToBeShown.length > 0) {
      setDetailState("DISPLAY-DETAIL");
      setDisplayedDetail(detailToBeShown);
    } else setDetailState("DISPLAY-NO_DETAIL");
    setDisplayedDetail(detailToBeShown);
  };

  const handleMovieClickBack = () => {
    setDetailClicked(false);
  };

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
              imageURL={movie.imageURL}
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
    <StyledNoMoviesFound>No movies added 🥺 </StyledNoMoviesFound>
  );
}
