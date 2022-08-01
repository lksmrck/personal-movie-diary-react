import React, { useContext } from "react";
import MoviesContext from "../MoviesContext";
import { StyledMovieDetail } from "./styled/StyledMovieDetail";
import { Button } from "@mui/material";

export default function MovieDetail(props) {
  const { movies } = useContext(MoviesContext);

  return (
    <StyledMovieDetail>
      <div className="add-detail-btn-container">
        <p>No detail found.</p>
        <div className="btns-container">
          <Button variant="contained">Add movie detail</Button>
          <Button variant="contained" color="error" onClick={props.detailClick}>
            Take me back
          </Button>
        </div>
      </div>
    </StyledMovieDetail>
  );

  /* return (
    <StyledMovieDetail>
      <label for="movie-detail">Movie Detail</label>
      <textarea id="movie-detail" name="movie-detail" rows="6" cols="20">
        {movies.detail}
      </textarea>
      <button onClick={props.detailClick}>Take me back</button>
    </StyledMovieDetail>
  ); */
}
