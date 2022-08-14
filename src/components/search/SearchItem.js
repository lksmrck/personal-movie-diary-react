import React, { useContext } from "react";

import SearchContext from "../../store/SearchContext";
/* import MoviesContext from "../../store/MoviesContext"; */

export default function SearchItem(props) {
  const { IMG_API /* setClickedMovieID */ } = useContext(SearchContext);
  /*   const { addToMovies } = useContext(MoviesContext); */

  const releaseDate = new Date(props.movieYear);
  const releaseYear = releaseDate.getFullYear();

  /*  const clickedMovieID = (movieID) => {
    setClickedMovieID(movieID);
  }; */

  const onClickMovieHandler = () => {
    //Po přidání filmu se přestanou renderovat vyhledané filmy.
    props.searchDisplayToggle();
    const movieItem = {
      id: Math.random().toString(),
      title: props.title,
      movieYear: releaseYear,
      imageURL: IMG_API + props.imageURL,
      dateWatched: "",
      stars_1: "",
      stars_2: "",
    };

    props.liftUpMovieToBeAdded(movieItem);
    props.displayDateModalToggle(true);
  };

  return (
    <li onClick={onClickMovieHandler}>
      <img
        src={IMG_API + props.imageURL}
        width="64.9px"
        height="91px"
        //Když kliknu na obrázek, pošlu do funkce props.id itemu, na který jsem klikl.
      />
      <div className="search-movie-data">
        <p className="search-title">{props.title}</p>
        <p>{releaseYear}</p>
      </div>
    </li>
  );
}
