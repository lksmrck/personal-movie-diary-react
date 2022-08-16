import React, { useState } from "react";
import Form from "./components/add-movie/manually/Form";
import Movies from "./components/movies/Movies";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/add-movie/search/Search";
import AddMovie from "./components/add-movie/AddMovie";

import { MoviesContextProvider } from "./store/MoviesContext";
import { SearchContextProvider } from "./store/SearchContext";

function App() {
  return (
    <div>
      <MoviesContextProvider>
        <Header />
        <SearchContextProvider>
          <AddMovie />
        </SearchContextProvider>

        <Movies />
        <Footer />
      </MoviesContextProvider>
    </div>
  );
}

export default App;
