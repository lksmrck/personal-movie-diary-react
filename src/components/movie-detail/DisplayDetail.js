import React, { useContext, useEffect } from "react";
import { StyledMovieDetail } from "../styled/StyledMovieDetail";
import { Button } from "@mui/material";
import MoviesContext from "../../MoviesContext";

export default function DisplayDetail(props) {
  const { displayedDetail } = useContext(MoviesContext);

  return (
    <StyledMovieDetail>
      <p>{displayedDetail} </p>

      <Button
        variant="outlined"
        onClick={props.testDeleteLater}
        color="success"
      >
        Edit
      </Button>
      <Button variant="outlined" color="error" onClick={props.detailClick}>
        Take me back
      </Button>
    </StyledMovieDetail>
  );
}