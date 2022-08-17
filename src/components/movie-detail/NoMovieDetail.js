import React from "react";
import { StyledMovieDetail } from "./styled";
import { Button } from "@mui/material";

export default function NoMovieDetail(props) {
  return (
    <StyledMovieDetail>
      <div className="add-detail-btn-container">
        <p>No detail found.</p>
        <div className="btns-container">
          <Button variant="contained" onClick={props.addMovieDetailHandler}>
            Add movie detail
          </Button>
          <Button variant="outlined" color="error" onClick={props.detailClick}>
            Take me back
          </Button>
        </div>
      </div>
    </StyledMovieDetail>
  );
}
