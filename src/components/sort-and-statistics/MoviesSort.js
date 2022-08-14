import React, { useContext } from "react";
import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import MoviesContext from "../../store/MoviesContext";
import Statistics from "./Statistics";
import { StyledMoviesSort } from "../styled/StyledMoviesSort";

const MoviesSort = (props) => {
  const { movies } = useContext(MoviesContext);

  function dropdownChangeHandler(e) {
    props.onChangeSort(e.target.value);
  }

  return (
    <StyledMoviesSort>
      <div className="sort-container">
        <div className="sort-control">
          <FormControl
            variant="filled"
            sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}
            size="small"
          >
            <InputLabel id="sort-select">Sort by:</InputLabel>
            <Select
              labelId="sort-select"
              id="sort-select"
              label="Sort by:"
              value={props.selected}
              onChange={dropdownChangeHandler}
            >
              <MenuItem value="Date newest">Date newest</MenuItem>
              <MenuItem value="Date oldest">Date oldest</MenuItem>
              <MenuItem value="Rating highest">Rating highest</MenuItem>
              <MenuItem value="Rating lowest">Rating lowest</MenuItem>
            </Select>
          </FormControl>
          {movies.length > 0 ? <Statistics /> : ""}
        </div>
      </div>
    </StyledMoviesSort>
  );
};
export default MoviesSort;
