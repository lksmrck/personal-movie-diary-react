import React from "react";
import Form from "./components/Form";
import Movies from "./components/Movies";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/search/Search";
import { MoviesContextProvider } from "./MoviesContext";
import { SearchContextProvider } from "./SearchContext";

function App() {
  return (
    <div>
      <MoviesContextProvider>
        <Header />
        <SearchContextProvider>
          <Search />
        </SearchContextProvider>
        {/* <Form /> */}
        <Movies />
        <Footer />
      </MoviesContextProvider>
    </div>
  );
}

export default App;
