import React, { useContext } from "react";
import { StyledMainAddMoviePage } from "./styled";
import { Button } from "@mui/material";
import { MainAddMoviePageContainer } from "./styled";
import SearchContext from "../../store/SearchContext";
import { BsSearch, BsPencil } from "react-icons/bs";

export default function MainAddMoviePage() {
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
          <Button
            variant="contained"
            onClick={setSearchForm}
            startIcon={<BsSearch />}
          >
            Search Movie
          </Button>
          <Button
            variant="contained"
            onClick={setManualForm}
            startIcon={<BsPencil />}
          >
            Add Movie Manually
          </Button>
        </div>
      </StyledMainAddMoviePage>
    </MainAddMoviePageContainer>
  );
}
