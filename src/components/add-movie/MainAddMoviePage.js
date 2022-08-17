import React, { useContext } from "react";
import { StyledMainAddMoviePage } from "./styled";
import { Button } from "@mui/material";
import { MainAddMoviePageContainer } from "./styled";
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
    <MainAddMoviePageContainer>
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
    </MainAddMoviePageContainer>
  );
}
