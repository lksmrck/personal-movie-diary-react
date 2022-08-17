import React, { useState, useContext } from "react";
import { StyledAddDateModal } from "./styled";
import Input from "../manually/Input";
import { Button } from "@mui/material";
import SearchContext from "../../../store/SearchContext";
import MoviesContext from "../../../store/MoviesContext";
import { TiArrowBackOutline } from "react-icons/ti";

export default function AddDateModal(props) {
  const { setAddMovieState, setSearchTerm } = useContext(SearchContext);
  const { addToMovies, movies } = useContext(MoviesContext);

  const [dateWatched, setDateWatched] = useState();

  const onChangeDateWatched = (e) => {
    setDateWatched(e.target.value);
  };

  const backToSearch = () => {
    props.displayDateModalToggle(false);
  };

  const onSubmitDateWatched = () => {
    const movieToBeAdded = props.movieToBeAdded;
    const updatedMovie = { ...movieToBeAdded, dateWatched: dateWatched };
    //Tady se pošle finální movie object do funkce, která ho přidá do array s filmy.
    addToMovies(updatedMovie);
    backToSearch();
    setSearchTerm("");
    setAddMovieState("PICK");
    console.log(movies);
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
        <div className="buttons-container">
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={backToSearch}
            startIcon={<TiArrowBackOutline />}
          >
            Back
          </Button>
        </div>
      </form>
    </StyledAddDateModal>
  );
}
