import React, { useContext } from "react";

import SearchContext from "../../SearchContext";

export default function SearchItem(props) {
  const { IMG_API } = useContext(SearchContext);

  const releaseDate = new Date(props.movieYear);
  const releaseYear = releaseDate.getFullYear();

  const onClickMovieHandler = () => {};

  return (
    <li onClick={onClickMovieHandler}>
      <img
        src={IMG_API + props.imageURL}
        width="71px"
        height="99.5px"
        //Když kliknu na obrázek, pošlu do funkce props.id itemu, na který jsem klikl.
      />
      <div className="search-movie-data">
        <p>{props.title}</p>
        <p>{releaseYear}</p>
      </div>
    </li>
  );
}
