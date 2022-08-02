import React, { useContext, useState } from "react";
import MoviesContext from "../MoviesContext";
import { StyledMovieDetail } from "./styled/StyledMovieDetail";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

export default function MovieDetail(props) {
  const { movies, displayedDetail } = useContext(MoviesContext);
  //State sledující, jestli je kliknuto na "Add movie detail" v modálním okně. Podle toho se podmíněně renderuje níže.
  const [detailState, setDetailState] = useState("");
  const [detail, setDetail] = useState("");

  const handleDetailChange = (event) => {
    setDetail(event.target.value);
  };

  const detailSubmitHandler = (event) => {
    event.prevent.default();
    //TBD
  };

  const closeDetailHandler = () => {
    props.detailClick();
  };

  /* 
  //1. možný render - textové pole se zadanim detailu
  return (
    <StyledMovieDetail>
      <div className="detail-form-container">
        <form onSubmit={detailSubmitHandler}>
          <TextField
            sx={{ width: 500 }}
            className="text-field"
            id="filled-multiline-static"
            label="Movie detail"
            multiline
            rows={10}
            placeholder="Add your thoughts..."
            variant="filled"
            value={detail}
            onChange={handleDetailChange}
          />
          <div className="detail-buttons-container">
            <Button variant="contained">Add movie detail</Button>
            <Button
              variant="outlined"
              color="error"
              onClick={closeDetailHandler}
            >
              Take me back
            </Button>
          </div>
        </form>
      </div>
    </StyledMovieDetail>
  ); */

  /* return (

    //2. možný render - když rozkliknutý film nemá detail
    <StyledMovieDetail>
      <div className="add-detail-btn-container">
        <p>No detail found.</p>
        <div className="btns-container">
          <Button variant="contained">Add movie detail</Button>
          <Button variant="outlined" color="error" onClick={props.detailClick}>
            Take me back
          </Button>
        </div>
      </div>
    </StyledMovieDetail>
  ); */

  //3. možný render - Když daný film má přidaný detail, tak se vyrenderuje detail.
  return (
    <StyledMovieDetail>
      <p>{displayedDetail} </p>

      <Button variant="outlined" color="success">
        Edit
      </Button>
      <Button variant="outlined" color="error" onClick={props.detailClick}>
        Take me back
      </Button>
    </StyledMovieDetail>
  );
}
