import React, { useContext } from "react";
import SearchContext from "../../store/SearchContext";

export default function Error() {
  const { error } = useContext(SearchContext);
  return (
    <li>
      <div className="search-movie-data">
        <p className="search-title-error">{error}</p>
      </div>
    </li>
  );
}
