import React from "react";

const MoviesSort = (props) => {
  function dropdownChangeHandler(e) {
    props.onChangeFilter(e.target.value);
  }

  return (
    <div>
      <div>
        <label>Sort by: </label>
        <select onChange={dropdownChangeHandler}>
          <option value="Date newest">Date newest</option>
          <option value="Date oldest">Date oldest</option>
          <option value="Rating highest">Rating highest</option>
          <option value="Rating lowest">Rating lowest</option>
        </select>
      </div>
    </div>
  );
};
export default MoviesSort;
