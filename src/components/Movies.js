//tady bude map, která bude vytvářet movie s props --> <Movie props - key, title, date, watched
import { React, useContext, useState } from "react";
import MovieCard from "./MovieCard";
import MovieDetail from "./movie-detail/MovieDetail";
import { StyledMovies } from "./styled/StyledMovies";
import { ContainerMovies } from "./styled/containers/ContainerMovies";
import MoviesContext from "../MoviesContext";
import Backdrop from "./Backdrop";

//Dummy movies na test
const DUMMY_MOVIES = [
  {
    title: "Kairo",
    movieYear: "2011",
    dateWatched: "31.12.2021",
    stars_1: "",
    stars_2: "",
  },
  {
    title: "Kairo",
    movieYear: "2011",
    dateWatched: "31.12.2021",
    stars_1: "",
    stars_2: "",
  },
  {
    title: "Kairo",
    movieYear: "2011",
    dateWatched: "31.12.2021",
    stars_1: "",
    stars_2: "",
  },
];

export default function Movies(props) {
  const {
    movies,
    setDisplayedDetail,
    setClickedMovieId,
    setDetailState,
    setMovies,
  } = useContext(MoviesContext);
  const [detailClicked, setDetailClicked] = useState(false);

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

  return (
    <ContainerMovies>
      <StyledMovies>
        {movies.map((movie) => (
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
  );
}
