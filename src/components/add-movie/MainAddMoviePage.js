import React, { useState } from "react";
import { StyledMainAddMoviePage } from "../styled/StyledMainAddMoviePage";
import { Button } from "@mui/material";

export default function MainAddMoviePage() {
  const [] = useState("");

  return (
    <StyledMainAddMoviePage>
      <div className="main-buttons-container">
        <Button>Search Movie</Button>
        <Button>Add Movie Manually</Button>
      </div>
    </StyledMainAddMoviePage>
  );
}
