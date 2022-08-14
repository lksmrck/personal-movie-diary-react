import React, { useContext, useState, useEffect } from "react";
import Input from "../add-movie/Input";
import { ContainerForm } from "../styled/containers/ContainerForm";
import { Button } from "@mui/material";
import { StyledForm } from "../styled/StyledForm";
import { StyledList } from "../styled/StyledList";
import SearchItem from "./SearchItem";
import SearchContext from "../../store/SearchContext";
import Backdrop from "../Backdrop";
import AddDateModal from "./AddDateModal";
import LoadingSpinner from "./LoadingSpinner";

export default function Search(props) {
  const {
    setSearchTerm,
    getMovies,
    searchURL,
    foundMovies,
    searchTerm,
    isLoading,
  } = useContext(SearchContext);

  // 1. *STATES*
  const [movieToBeAdded, setMovieToBeAdded] = useState({});
  const [isDisplayedSearch, setIsDisplayedSearch] = useState(false);
  const [isDisplayedDateModal, setIsDisplayedDateModal] = useState(false);

  //API call, kde se hledá searchTerm po 1 vteřine, kdy user přestane psát
  useEffect(() => {
    const API_CALL = setTimeout(() => {
      if (searchTerm) {
        getMovies(searchURL);
        setIsDisplayedSearch(true);
      }
    }, 500);
    return () => clearTimeout(API_CALL);
  }, [searchTerm]);

  const liftUpMovieToBeAdded = (movie) => {
    setMovieToBeAdded(movie);
  };

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const cancelSearch = () => {
    setIsDisplayedSearch(false);
  };

  const backToMainPage = () => {
    props.addMovieState("PICK");
  };
  return (
    <div>
      <ContainerForm>
        {isLoading && <LoadingSpinner />}
        <StyledForm>
          <div className="inputs-container search">
            <form>
              <Input
                label="Movie name"
                input={{
                  id: "Movie name",
                  type: "search",
                }}
                placeholder="Harry Potter"
                onChangeInput={onChangeHandler}
              />
              {isDisplayedSearch && foundMovies.length > 0 ? (
                <div className="search-list-container">
                  <StyledList>
                    {foundMovies.map((movie) => (
                      <SearchItem
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        movieYear={movie.release_date}
                        imageURL={movie.poster_path}
                        searchDisplayToggle={cancelSearch}
                        displayDateModalToggle={setIsDisplayedDateModal}
                        liftUpMovieToBeAdded={liftUpMovieToBeAdded}
                      />
                    ))}
                  </StyledList>
                  <div className="search-button-container">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={cancelSearch}
                    >
                      Back
                    </Button>
                  </div>
                </div>
              ) : (
                ""
              )}
              {!isDisplayedSearch ? (
                <Button
                  variant="outlined"
                  color="error"
                  onClick={backToMainPage}
                >
                  Back
                </Button>
              ) : (
                ""
              )}
            </form>
            {isDisplayedDateModal == true ? (
              <Backdrop>
                <AddDateModal
                  displayDateModalToggle={setIsDisplayedDateModal}
                  movieToBeAdded={movieToBeAdded}
                />
              </Backdrop>
            ) : (
              ""
            )}
          </div>
        </StyledForm>
      </ContainerForm>
    </div>
  );
}
