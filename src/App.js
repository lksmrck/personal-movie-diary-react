import React, { useState } from "react";
import Form from "./components/Form";
import Movies from "./components/Movies";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/search/Search";
import MainAddMoviePage from "./components/add-movie/MainAddMoviePage";
import { MoviesContextProvider } from "./MoviesContext";
import { SearchContextProvider } from "./SearchContext";

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
            <Search />
          </SearchContextProvider>
        ) : (
          ""
        )}
        {addMovieState == "MANUAL" ? <Form /> : ""}

        <Movies />
        <Footer />
      </MoviesContextProvider>
    </div>
  );
}

export default App;
