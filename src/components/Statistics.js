import React, { useContext, useEffect, useState } from "react";
import MoviesContext from "../MoviesContext";
export default function Statistics() {
  const { movies } = useContext(MoviesContext);

  const [averageRatingL, setAverageRatingL] = useState(0);
  const [averageRatingV, setAverageRatingV] = useState(0);

  //Dodělat
  useEffect(() => {}, [movies]);

  return (
    <div className="statistics">
      <p>Movies watched: {movies.length}</p>
      <p>Average rating L: </p>
      <p>Average rating V:</p>
    </div>
  );
}
