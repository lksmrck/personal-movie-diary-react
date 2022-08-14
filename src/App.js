import React, { useState } from "react";
import Form from "./components/add-movie/Form";
import Movies from "./components/movies/Movies";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/search/Search";
import MainAddMoviePage from "./components/add-movie/MainAddMoviePage";
import { MoviesContextProvider } from "./store/MoviesContext";
import { SearchContextProvider } from "./store/SearchContext";

function App() {
  const [addMovieState, setAddMovieState] = useState("PICK");

  return (
    <div>
      <MoviesContextProvider>
        <Header />
        {addMovieState == "PICK" ? (
          <MainAddMoviePage addFormDisplay={setAddMovieState} />
        ) : (
          ""
        )}
        {addMovieState == "SEARCH" ? (
          <SearchContextProvider>
            <Search addMovieState={setAddMovieState} />
          </SearchContextProvider>
        ) : (
          ""
        )}
        {addMovieState == "MANUAL" ? (
          <Form addMovieState={setAddMovieState} />
        ) : (
          ""
        )}

        <Movies />
        <Footer />
      </MoviesContextProvider>
    </div>
  );
}

export default App;
