import React, { useState, useContext } from "react";
import { StyledAddDateModal } from "./styled";
import Input from "../manually/Input";
import { Button } from "@mui/material";
import SearchContext from "../../../store/SearchContext";
import MoviesContext from "../../../store/MoviesContext";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoAddCircleOutline } from "react-icons/io5";

export default function AddDateModal({
  movieToBeAdded,
  displayDateModalToggle,
}) {
  const { setAddMovieState, setSearchTerm } = useContext(SearchContext);
  const { addToMovies } = useContext(MoviesContext);

  const [dateWatched, setDateWatched] = useState("");

  const onChangeDateWatched = (e) => {
    setDateWatched(e.target.value);
  };

  const backToSearch = () => {
    displayDateModalToggle(false);
  };

  const onSubmitDateWatched = () => {
    const updatedMovie = { ...movieToBeAdded, dateWatched };
    //Zde se pošle finální movie object do funkce, která ho přidá do array s filmy.
    addToMovies(updatedMovie);
    backToSearch();
    setSearchTerm("");
    setAddMovieState("PICK");
  };

  return (
    <StyledAddDateModal>
      <div className="modal-data">
        <p>When did you watch the movie?</p>
        <form onSubmit={onSubmitDateWatched}>
          <Input
            label="Date watched"
            input={{
              id: "Date watched",
              type: "date",
              value: dateWatched,
              onChange: onChangeDateWatched,
            }}
            inputLabelProps={{
              shrink: true,
            }}
          />
          <div className="buttons-container">
            <Button
              variant="contained"
              type="submit"
              startIcon={<IoAddCircleOutline />}
            >
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
      </div>
    </StyledAddDateModal>
  );
}
