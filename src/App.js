import React from "react";
import Form from "./components/Form";
import Movies from "./components/Movies";
import Header from "./components/Header";
import { MoviesContextProvider } from "./MoviesContext";

function App() {
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
