import React, { useContext } from "react";
import { StyledMainAddMoviePage } from "../styled/StyledMainAddMoviePage";
import { Button } from "@mui/material";
import { ContainerForm } from "../styled/containers/ContainerForm";
import SearchContext from "../../store/SearchContext";

export default function MainAddMoviePage(props) {
  const { setAddMovieState } = useContext(SearchContext);

  const setSearchForm = () => {
    setAddMovieState("SEARCH");
  };
  const setManualForm = () => {
    setAddMovieState("MANUAL");
  };

  return (
    <ContainerForm>
      <StyledMainAddMoviePage>
        <div className="main-buttons-container">
          <Button variant="contained" onClick={setSearchForm}>
            Search Movie
          </Button>
          <Button variant="contained" onClick={setManualForm}>
            Add Movie Manually
          </Button>
        </div>
      </StyledMainAddMoviePage>
    </ContainerForm>
  );
}
