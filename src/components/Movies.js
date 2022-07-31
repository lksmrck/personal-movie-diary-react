//tady bude map, která bude vytvářet movie s props --> <Movie props - key, title, date, watched
import { React, useContext } from "react";
import MovieCard from "./MovieCard";
import { StyledMovies } from "./styled/StyledMovies";
import { ContainerMovies } from "./styled/containers/ContainerMovies";
import MoviesContext from "../MoviesContext";

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
  const { movies } = useContext(MoviesContext);

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
          />
        ))}
      </StyledMovies>
    </ContainerMovies>
  );
}
