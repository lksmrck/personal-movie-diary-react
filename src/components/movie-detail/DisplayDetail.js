import React, { useContext, useEffect } from "react";
import { StyledMovieDetail } from "../styled/StyledMovieDetail";
import { Button } from "@mui/material";
import MoviesContext from "../../store/MoviesContext";

export default function DisplayDetail(props) {
  const { displayedDetail, setDetailState } = useContext(MoviesContext);

  const onEditHandler = () => {
    setDetailState("DISPLAY-TEXT_AREA");
  };

  return (
    <StyledMovieDetail>
      <div className="detail-container">
        <div className="detail-text-container">
          <p>{displayedDetail} </p>
        </div>
        <div className="detail-buttons-container">
          <Button variant="outlined" onClick={onEditHandler} color="success">
            Edit
          </Button>
          <Button variant="outlined" color="error" onClick={props.detailClick}>
            Take me back
          </Button>
        </div>
      </div>
    </StyledMovieDetail>
  );
}
