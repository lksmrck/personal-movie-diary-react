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
  useEffect(() => {
    let avgRatingL = 0;
    let avgRatingV = 0;
    movies.forEach((movie) => {
      avgRatingL = avgRatingL + movie.stars_1;
      avgRatingV = avgRatingV + movie.stars_2;
    });
    setAverageRatingL(Math.round((avgRatingL / movies.length) * 10) / 10);
    setAverageRatingV(Math.round((avgRatingV / movies.length) * 10) / 10);
  }, [movies]);

  return (
    <div>
      <div className={isShown ? "statistics" : "statistics-hidden"}>
        <p>
          Movies watched:{" "}
          <span className="statistics-data">{movies.length}</span>
        </p>
        <p>
          Average rating L:{" "}
          <span className="statistics-data">{averageRatingL}</span>{" "}
        </p>
        <p>
          Average rating V:{" "}
          <span className="statistics-data">{averageRatingV}</span>{" "}
        </p>
      </div>
      <FcStatistics
        className="statistics-icon"
        onMouseEnter={statisticsDisplayHandler}
        onMouseLeave={statisticsDisplayHandler}
      />
    </div>
  );
}
