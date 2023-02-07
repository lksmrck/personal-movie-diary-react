import React from "react";

import Movies from "../components/movies/Movies";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

import AddMovie from "../components/add-movie/AddMovie";

import { MoviesContextProvider } from "../store/MoviesContext";
import { SearchContextProvider } from "../store/SearchContext";
import { StyledMainPage } from "./styled";

export default function MainPage() {
  return (
    <StyledMainPage>
      <div className="content">
        <Header />
        <MoviesContextProvider>
          <SearchContextProvider>
            <AddMovie />
          </SearchContextProvider>
          <Movies />
        </MoviesContextProvider>
      </div>
      <Footer />
    </StyledMainPage>
  );
}
