import React, { useState } from "react";
import { StyledMainAddMoviePage } from "../styled/StyledMainAddMoviePage";
import { Button } from "@mui/material";

export default function MainAddMoviePage(props) {
  const setSearchForm = () => {
    props.addFormDisplay("SEARCH");
  };
  const setManualForm = () => {
    props.addFormDisplay("MANUAL");
  };

  return (
    <StyledMainAddMoviePage>
      <div className="main-buttons-container">
        <Button onClick={setSearchForm}>Search Movie</Button>
        <Button onClick={setManualForm}>Add Movie Manually</Button>
      </div>
    </StyledMainAddMoviePage>
  );
}
