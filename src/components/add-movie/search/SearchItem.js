import React, { useContext } from "react";
import image from "../../../assets/no-poster-available.webp";

import SearchContext from "../../../store/SearchContext";

export default function SearchItem({
  movieYear,
  imageURL,
  searchDisplayToggle,
  liftUpMovieToBeAdded,
  displayDateModalToggle,
  title,
}) {
  const { IMG_API } = useContext(SearchContext);

  const releaseDate = new Date(movieYear);
  const releaseYear = releaseDate.getFullYear();

  //Pokud není dotáhnut obrázek z API, tak použije No Poster Found image
  let foundImgURL = "";
  if (imageURL == null) {
    foundImgURL = image;
  } else {
    foundImgURL = IMG_API + imageURL;
  }

  const onClickMovieHandler = () => {
    //Po přidání filmu se přestanou renderovat vyhledané filmy.
    searchDisplayToggle();
    const movieItem = {
      id: Math.random().toString(),
      title: title,
      movieYear: releaseYear,
      imageURL: foundImgURL,
      dateWatched: "",
      stars_1: "",
      stars_2: "",
    };

    liftUpMovieToBeAdded(movieItem);
    displayDateModalToggle(true);
  };

  return (
    <li onClick={onClickMovieHandler}>
      <img
        src={foundImgURL}
        width="64.9px"
        height="91px"
        alt="movie poster"
        //Když kliknu na obrázek, pošlu do funkce props.id itemu, na který jsem klikl.
      />
      <div className="search-movie-data">
        <p className="search-title">{title}</p>
        <p>{isNaN(releaseYear) ? "---" : releaseYear}</p>
      </div>
    </li>
  );
}
