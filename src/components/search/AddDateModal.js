import React, { useState, useContext } from "react";
import { StyledAddDateModal } from "../styled/StyledAddDateModal";
import Input from "../add-movie/Input";
import { Button } from "@mui/material";
import SearchContext from "../../store/SearchContext";
import MoviesContext from "../../store/MoviesContext";

export default function AddDateModal(props) {
  const { clickedMovieID } = useContext(SearchContext);
  const { movies, setMovies, addToMovies } = useContext(MoviesContext);

  const [dateWatched, setDateWatched] = useState();

  const onChangeDateWatched = (e) => {
    setDateWatched(e.target.value);
  };

  const backToSearch = () => {
    props.displayDateModalToggle(false);
  };

  const onSubmitDateWatched = () => {
    /*  const updatedMovies = movies.map((movie) => {
      if (movie.id === clickedMovieID) {
        return {
          ...movie,
          dateWatched: dateWatched,
        };
      }
      return movie;
    });
    setMovies(updatedMovies); */
    const movieToBeAdded = props.movieToBeAdded;
    const updatedMovie = { ...movieToBeAdded, dateWatched: dateWatched };
    addToMovies(updatedMovie);
    backToSearch();
  };

  return (
    <StyledAddDateModal>
      <p>When did you watch the movie?</p>
      <form onSubmit={onSubmitDateWatched}>
        <Input
          label="Date watched"
          input={{
            id: "Date watched",
            type: "date",
          }}
          value={dateWatched}
          onChangeInput={onChangeDateWatched}
          inputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
        <Button variant="outlined" color="error" onClick={backToSearch}>
          Back
        </Button>
      </form>
    </StyledAddDateModal>
  );
}
