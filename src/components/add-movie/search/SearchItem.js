import React, { useContext } from "react";
import image from "../../../assets/no-poster-available.webp";

import SearchContext from "../../../store/SearchContext";

export default function SearchItem(props) {
  const { IMG_API } = useContext(SearchContext);

  const releaseDate = new Date(props.movieYear);
  const releaseYear = releaseDate.getFullYear();

  //Pokud není dotáhnut obrázek z API, tak použije No Poster Found image
  let foundImgURL = "";
  if (props.imageURL == null) {
    foundImgURL = image;
  } else {
    foundImgURL = IMG_API + props.imageURL;
  }

  const onClickMovieHandler = () => {
    //Po přidání filmu se přestanou renderovat vyhledané filmy.
    props.searchDisplayToggle();
    const movieItem = {
      id: Math.random().toString(),
      title: props.title,
      movieYear: releaseYear,
      imageURL: foundImgURL,
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
        src={foundImgURL}
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
