//Styled components

import React, { useState } from "react";
import Form from "./components/Form";
import Movies from "./components/Movies";
import Header from "./components/Header";
import MovieDetail from "./components/MovieDetail";
import { MoviesContextProvider } from "./MoviesContext";

function App() {
  //Sledování, jestli je kliknuto na movie pro renderování modálního okna s detaily filmu.
  const [isMovieClicked, setIsMovieClicked] = useState(false);

  return (
    <div>
      <MoviesContextProvider>
        <Header />
        <Form />
        <Movies />
      </MoviesContextProvider>
    </div>
  );
}

export default App;
