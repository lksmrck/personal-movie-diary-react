import React, { useContext } from "react";
import MoviesContext from "../MoviesContext";

export default function MovieDetail() {
  const { movies } = useContext(MoviesContext);
  return (
    <div>
      <label for="movie-detail">Movie Detail</label>
      <textarea id="movie-detail" name="movie-detail" rows="6" cols="20">
        {movies.detail}
      </textarea>
    </div>
  );
}
