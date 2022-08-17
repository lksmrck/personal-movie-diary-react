import React from "react";

import Movies from "../components/movies/Movies";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

import AddMovie from "../components/add-movie/AddMovie";

import { MoviesContextProvider } from "../store/MoviesContext";
import { SearchContextProvider } from "../store/SearchContext";

export default function MainPage() {
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
