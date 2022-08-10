import React, { useContext, useEffect, useState } from "react";
import MoviesContext from "../MoviesContext";
import { FcStatistics } from "react-icons/fc";
export default function Statistics() {
  const { movies } = useContext(MoviesContext);

  const [isShown, setIsShown] = useState(false);

  const [averageRatingL, setAverageRatingL] = useState(0);
  const [averageRatingV, setAverageRatingV] = useState(0);

  const statisticsDisplayHandler = () => {
    setIsShown(!isShown);
  };
  //Dodělat
  useEffect(() => {}, [movies]);

  return (
    <div>
      <div className={isShown ? "statistics" : "statistics-hidden"}>
        <p>Movies watched: {movies.length}</p>
        <p>Average rating L: </p>
        <p>Average rating V:</p>
      </div>
      <FcStatistics
        className="statistics-icon"
        onMouseEnter={statisticsDisplayHandler}
        onMouseLeave={statisticsDisplayHandler}
      />
    </div>
  );
}
