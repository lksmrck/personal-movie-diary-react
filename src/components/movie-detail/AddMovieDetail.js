import React, { useContext } from "react";
import { StyledMovieDetail } from "./styled";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import MoviesContext from "../../store/MoviesContext";
import { IoAddCircleOutline } from "react-icons/io5";
import { TiArrowBackOutline } from "react-icons/ti";

export default function AddMovieDetail({
  detailSubmitHandler,
  handleDetailChange,
  closeDetailHandler,
}) {
  const { displayedDetail } = useContext(MoviesContext);
  return (
    <StyledMovieDetail>
      <div className="detail-data">
        <div className="detail-form-container">
          <form onSubmit={detailSubmitHandler}>
            <TextField
              sx={{ width: 500 }}
              className="text-field"
              id="filled-multiline-static"
              label="Movie thoughts"
              multiline
              rows={10}
              placeholder={
                !displayedDetail ? "What do you think about the movie?" : ""
              }
              variant="filled"
              value={displayedDetail ? displayedDetail : ""}
              onChange={handleDetailChange}
            />
            <div className="add-detail-buttons-container">
              <Button
                variant="contained"
                type="submit"
                startIcon={<IoAddCircleOutline />}
              >
                Add movie detail
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={closeDetailHandler}
                startIcon={<TiArrowBackOutline />}
              >
                Take me back
              </Button>
            </div>
          </form>
        </div>
      </div>
    </StyledMovieDetail>
  );
}
