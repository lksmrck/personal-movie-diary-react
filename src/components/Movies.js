import { React, useContext, useState } from "react";
import MovieCard from "./MovieCard";
import MovieDetail from "./movie-detail/MovieDetail";
import MoviesFilter from "./MoviesSort";
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
  const [filterCondition, setFilterCondition] = useState("Date descending");

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

  const ratingLUpdate = (movieId, newValue) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        return { ...movie, stars_1: newValue };
      }
      return movie;
    });
    setMovies(updatedMovies);
    console.log(movies);
  };

  const ratingVUpdate = (movieId, newValue) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        return { ...movie, stars_2: newValue };
      }
      return movie;
    });
    setMovies(updatedMovies);
    console.log(movies);
  };
  let sortedMovies = [];
  const onChangeFilterHandler = (condition) => {
    setFilterCondition(condition);

    switch (filterCondition) {
      /*   case "Date ascending":
        const sortedMovies = movies.sort;
        break;
      case "Date descending":
        //code
        break; */
      case "Rating highest":
        sortedMovies = movies.sort((a, b) => {
          return a.stars_1 - b.stars_1;
        });
        break;
      case "Rating lowest":
        sortedMovies = movies.sort((a, b) => {
          return b.stars_1 - a.stars_1;
        });
        break;
      default:
        sortedMovies = [movies];
    }
    console.log(sortedMovies);
  };

  return (
    <div>
      {/*  {movies.length > 0 ? ( */}
      <MoviesFilter
        onChangeFilter={onChangeFilterHandler}
        selected={filterCondition}
      />
      {/* ) : (
        ""
      )} */}
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
  );
}
