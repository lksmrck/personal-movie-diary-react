import React, { useContext } from "react";
import SearchContext from "../../store/SearchContext";
import MainAddMoviePage from "./MainAddMoviePage";
import Search from "./search/Search";
import Form from "./manually/Form";

export default function AddMovie() {
  const { addMovieState, setAddMovieState } = useContext(SearchContext);

  if (addMovieState === "PICK") {
    return <MainAddMoviePage />;
  } else if (addMovieState === "SEARCH") {
    return <Search />;
  } else if (addMovieState === "MANUAL") {
    return <Form addMovieState={setAddMovieState} />;
  }
}
