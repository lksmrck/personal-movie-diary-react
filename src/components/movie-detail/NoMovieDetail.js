import React from "react";
import { StyledMovieDetail } from "./styled";
import { Button } from "@mui/material";
import { IoAddCircleOutline } from "react-icons/io5";
import { TiArrowBackOutline } from "react-icons/ti";

export default function NoMovieDetail(props) {
  return (
    <StyledMovieDetail>
      <div className="detail-data">
        <div className="add-detail-btn-container">
          <p>No detail found.</p>
          <div className="btns-container">
            <Button
              variant="contained"
              onClick={props.addMovieDetailHandler}
              startIcon={<IoAddCircleOutline />}
            >
              Add movie detail
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={props.detailClick}
              startIcon={<TiArrowBackOutline />}
            >
              Take me back
            </Button>
          </div>
        </div>
      </div>
    </StyledMovieDetail>
  );
}
