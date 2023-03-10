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

  //Default image - used in case that found movie has no image
  let foundImgURL = "";
  if (imageURL == null) {
    foundImgURL = image;
  } else {
    foundImgURL = IMG_API + imageURL;
  }

  const onClickMovieHandler = () => {
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
      <img src={foundImgURL} width="64.9px" height="91px" alt="movie poster" />
      <div className="search-movie-data">
        <p className="search-title">{title}</p>
        <p>{isNaN(releaseYear) ? "---" : releaseYear}</p>
      </div>
    </li>
  );
}
