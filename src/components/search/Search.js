import React, { useContext, useState, useEffect } from "react";
import Input from "../add-movie/Input";
import { ContainerForm } from "../styled/containers/ContainerForm";
import { Button } from "@mui/material";
import { StyledForm } from "../styled/StyledForm";
import { StyledList } from "../styled/StyledList";
import { StyledListShort } from "../styled/StyledListShort";
import SearchItem from "./SearchItem";
import SearchContext from "../../store/SearchContext";
import Backdrop from "../Backdrop";
import AddDateModal from "./AddDateModal";
import LoadingSpinner from "./LoadingSpinner";
import FoundNoMovie from "./FoundNoMovie";
import Error from "./Error";

export default function Search(props) {
  const {
    setSearchTerm,
    getMovies,
    searchURL,
    foundMovies,
    searchTerm,
    setIsLoading,
    isLoading,
    error,
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
        <StyledForm>
          <div className="inputs-container search">
            <form>
              <Input
                label="Movie name"
                input={{
                  id: "Movie name",
                  type: "search",
                }}
                placeholder="Star Wars"
                onChangeInput={onChangeHandler}
              />
              {/* Toto se vyrenderuje pokud: 1. Se vyslal fetch request, 2. našel se alespoň jeden film, 3. a zároveň nenastal error */}
              {isDisplayedSearch && foundMovies.length > 0 && error == null ? (
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
              {/* Toto se vyrenderuje pokud: 1. Se vyslal fetch request, 2.nastal při tom error */}
              {isDisplayedSearch && error !== null ? (
                <div className="search-list-container">
                  <StyledListShort>
                    <Error />
                  </StyledListShort>
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

              {/* Toto se vyrenderuje pokud: 1. Se vyslal fetch request, 2. počet nalezených filmů je 0, 3. a zároveň nenastal error */}
              {isDisplayedSearch && foundMovies.length == 0 && error == null ? (
                <div className="search-list-container">
                  <StyledListShort>
                    <FoundNoMovie />
                  </StyledListShort>
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
              {!isDisplayedSearch && !isLoading && (
                <Button
                  variant="outlined"
                  color="error"
                  onClick={backToMainPage}
                >
                  Back
                </Button>
              )}
              {isLoading && <LoadingSpinner />}
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
