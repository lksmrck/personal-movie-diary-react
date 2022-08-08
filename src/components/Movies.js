import { React, useContext, useState, useEffect } from "react";
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
  const [sortCondition, setSortCondition] = useState("Date descending");
  const [sortedMovies, setSortedMovies] = useState(movies);

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

  //Sorting logika - běží při přidání movie - nový movie má na začátku hodnocení 0 (řadí se dle nastavené sort condition), nebo při změně sort condition, nebo při zadání hodnocení.
  useEffect(() => {
    let moviesToBeSorted;
    if (sortCondition == "Rating lowest") {
      moviesToBeSorted = [...movies].sort((a, b) => {
        return a.stars_1 - b.stars_1;
      });
      setSortedMovies(moviesToBeSorted);
    } else if (sortCondition == "Rating highest") {
      moviesToBeSorted = [...movies].sort((a, b) => {
        return b.stars_1 - a.stars_1;
      });
      setSortedMovies(moviesToBeSorted);
    } else {
      console.log("hey");
    }
  }, [movies, sortCondition]);

  const onChangeFilterHandler = (condition) => {
    setSortCondition(condition);
    console.log(sortedMovies);
    /* let moviesToBeSorted; */

    /* switch (sortCondition) {
      case "Date ascending":
        moviesToBeSorted = movies.sort;
        break;
      case "Date descending":
        //code
        break; 
      case "Rating highest":
        moviesToBeSorted = movies.sort((a, b) => {
          return a.stars_1 - b.stars_1;
        });
        setSortedMovies(moviesToBeSorted);

        break;
      case "Rating lowest":
        moviesToBeSorted = movies.sort((a, b) => {
          return b.stars_1 - a.stars_1;
        });
        setSortedMovies(moviesToBeSorted);
        break;
    }
    console.log(sortedMovies); */
  };

  // 2.zpusob
  /*  const ratingHighestSorted = movies.sort((a, b) => {
    return a.stars_1 - b.stars_1;
  });

  const ratingLowestSorted = movies.sort((a, b) => {
    return b.stars_1 - a.stars_1;
  });

  const sortedMovies = (filterCondition = "Rating highest"
    ? ratingHighestSorted
    : ratingLowestSorted); */

  return (
    <div>
      {/*  {movies.length > 0 ? ( */}
      <MoviesFilter
        onChangeFilter={onChangeFilterHandler}
        selected={sortCondition}
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
