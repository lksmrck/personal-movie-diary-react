import React from "react";
import { StyledMovieDetail } from "../styled/StyledMovieDetail";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

export default function AddMovieDetail(props) {
  return (
    <StyledMovieDetail>
      <div className="detail-form-container">
        <form onSubmit={props.detailSubmitHandler}>
          <TextField
            sx={{ width: 500 }}
            className="text-field"
            id="filled-multiline-static"
            label="Movie detail"
            multiline
            rows={10}
            placeholder="Add your thoughts..."
            variant="filled"
            value={props.filledDetail}
            onChange={props.handleDetailChange}
          />
          <div className="detail-buttons-container">
            <Button variant="contained" type="submit">
              Add movie detail
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={props.closeDetailHandler}
            >
              Take me back
            </Button>
          </div>
        </form>
      </div>
    </StyledMovieDetail>
  );
}