import { createContext, useState } from "react";

const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  //*STATES*
  const [searchTerm, setSearchTerm] = useState("");
  //Tady jsou dotáhnuté movies z API na základě vyhledávání
  const [foundMovies, setFoundMovies] = useState("");

  // *API data*
  const API_KEY = "api_key=274808d92789c49e637a022e855f63dd";
  const BASE_URL = "https://api.themoviedb.org/3";

  const API_URL =
    BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY; //most popular movies

  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const searchURL = BASE_URL + "/search/movie?" + API_KEY + "&query="; //k tomuto potřeba přidat "&query=hledanyNazev"

  //např. https://api.themoviedb.org/3/search/movie?api_key=274808d92789c49e637a022e855f63dd&query=potter

  function getMovies(url) {
    fetch(url + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        setFoundMovies(data.results);
      });
  }

  return (
    <SearchContext.Provider
      value={{
        setFoundMovies,
        foundMovies,
        searchTerm,
        setSearchTerm,
        getMovies,
        searchURL,
        IMG_API,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
export default SearchContext;
