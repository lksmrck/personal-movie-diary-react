import { React, useContext, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import MovieDetail from "../movie-detail/MovieDetail";
import MoviesSort from "../sort-and-statistics/MoviesSort";
import { StyledMovies } from "./styled";
import { ContainerMovies } from "./styled";
import { StyledNoMoviesFound } from "./styled";
import MoviesContext from "../../store/MoviesContext";
import Backdrop from "../../layout/Backdrop";

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

  //Nastavení sort condition po vybrání ze Selectu
  const onChangeSortHandler = (condition) => {
    setSortCondition(condition);
  };

  return movies.length > 0 ? (
    //Pokud je přidán nějaký film, vyrenderujou se filmy + MoviesSort. Pokud není přidán žádný film, vyrenderuje se component viz. níž.
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
