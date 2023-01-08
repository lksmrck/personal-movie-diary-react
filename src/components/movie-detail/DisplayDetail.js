import React, { useContext } from "react";
import { StyledMovieDetail } from "./styled";
import { Button } from "@mui/material";
import MoviesContext from "../../store/MoviesContext";
import { TiArrowBackOutline } from "react-icons/ti";
import { AiOutlineEdit } from "react-icons/ai";

export default function DisplayDetail({ detailClick }) {
  const { displayedDetail, setDetailState } = useContext(MoviesContext);

  const onEditHandler = () => {
    setDetailState("DISPLAY-TEXT_AREA");
  };

  return (
    <StyledMovieDetail>
      <div className="detail-data">
        <div className="detail-container">
          <div className="detail-text-container">
            <p>{displayedDetail} </p>
          </div>
          <div className="detail-buttons-container">
            <Button
              variant="outlined"
              onClick={onEditHandler}
              color="success"
              startIcon={<AiOutlineEdit />}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={detailClick}
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
