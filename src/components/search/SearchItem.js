import React from "react";
import { StyledList } from "../styled/StyledList";

export default function SearchItem() {
  return (
    <div>
      <StyledList>
        <li>
          <img
            src="https://image.pmgstatic.com/cache/resized/w140/files/images/film/posters/158/406/158406856_d4a471.jpg"
            width="71px"
            height="99.5px"
            //Když kliknu na obrázek, pošlu do funkce props.id itemu, na který jsem klikl.
          />
          <div className="search-movie-data">
            <p>Harry Potter a kámen mudrců</p>
            <p>2001</p>
          </div>
        </li>
        <li>
          <img
            src="https://image.pmgstatic.com/cache/resized/w140/files/images/film/posters/158/406/158406856_d4a471.jpg"
            width="71px"
            height="99.5px"
            //Když kliknu na obrázek, pošlu do funkce props.id itemu, na který jsem klikl.
          />
          <div className="search-movie-data">
            <p>Harry Potter a kámen mudrců</p>
            <p>2001</p>
          </div>
        </li>
        <li>
          <img
            src="https://image.pmgstatic.com/cache/resized/w140/files/images/film/posters/158/406/158406856_d4a471.jpg"
            width="71px"
            height="99.5px"
            //Když kliknu na obrázek, pošlu do funkce props.id itemu, na který jsem klikl.
          />
          <div className="search-movie-data">
            <p>Harry Potter a kámen mudrců</p>
            <p>2001</p>
          </div>
        </li>
      </StyledList>
    </div>
  );
}
