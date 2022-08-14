import React from "react";
import { StyledMainAddMoviePage } from "../styled/StyledMainAddMoviePage";
import { Button } from "@mui/material";
import { ContainerForm } from "../styled/containers/ContainerForm";

export default function MainAddMoviePage(props) {
  const setSearchForm = () => {
    props.addFormDisplay("SEARCH");
  };
  const setManualForm = () => {
    props.addFormDisplay("MANUAL");
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
