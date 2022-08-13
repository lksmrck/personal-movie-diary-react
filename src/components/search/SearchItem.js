import React, { useContext } from "react";

import SearchContext from "../../SearchContext";
import MoviesContext from "../../MoviesContext";

export default function SearchItem(props) {
  const { IMG_API } = useContext(SearchContext);
  const { addToMovies } = useContext(MoviesContext);

  const releaseDate = new Date(props.movieYear);
  const releaseYear = releaseDate.getFullYear();

  const onClickMovieHandler = () => {
    const movieItem = {
      id: Math.random().toString(),
      title: props.title,
      movieYear: props.movieYear,
      dateWatched: 1,
      stars_1: "",
      stars_2: "",
    };
    addToMovies(movieItem);
    //Po přidání filmu se přestanou renderovat vyhledané filmy.
    props.searchDisplayToggle();
  };

  return (
    <li onClick={onClickMovieHandler}>
      <img
        src={IMG_API + props.imageURL}
        width="71px"
        height="99.5px"
        //Když kliknu na obrázek, pošlu do funkce props.id itemu, na který jsem klikl.
      />
      <div className="search-movie-data">
        <p className="search-title">{props.title}</p>
        <p>{releaseYear}</p>
      </div>
    </li>
  );
}
