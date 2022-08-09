import React from "react";
import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";

const MoviesSort = (props) => {
  function dropdownChangeHandler(e) {
    props.onChangeSort(e.target.value);
  }

  return (
    <div>
      <div className="sort-control">
        <FormControl
          variant="filled"
          sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}
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
      </div>
    </div>
  );
};
export default MoviesSort;
