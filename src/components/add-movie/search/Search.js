import React, { useContext, useState, useEffect } from "react";
import Input from "../manually/Input";
import { ContainerForm } from "../manually/styled";
import { Button } from "@mui/material";
import { StyledForm } from "../manually/styled";
import { StyledList } from "./styled";
import { StyledListShort } from "./styled";
import SearchItem from "./SearchItem";
import SearchContext from "../../../store/SearchContext";
import Backdrop from "../../../layout/Backdrop";
import AddDateModal from "./AddDateModal";
import LoadingSpinner from "./LoadingSpinner";
import FoundNoMovie from "./FoundNoMovie";
import Error from "./Error";
import { TiArrowBackOutline } from "react-icons/ti";

export default function Search(props) {
  const {
    setSearchTerm,
    getMovies,
    searchURL,
    foundMovies,
    searchTerm,
    isLoading,
    error,
    setAddMovieState,
  } = useContext(SearchContext);

  const [movieToBeAdded, setMovieToBeAdded] = useState({});
  const [isDisplayedSearch, setIsDisplayedSearch] = useState(false);
  const [isDisplayedDateModal, setIsDisplayedDateModal] = useState(false);

  //API call, kde se hledá searchTerm po 0.5 vteřine, kdy user přestane psát + cleanup function
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
    setSearchTerm("");
  };

  const backToMainPage = () => {
    setAddMovieState("PICK");
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
                  placeholder: "Star Wars",
                  onChange: onChangeHandler,
                  value: searchTerm,
                }}
              />
              {/* LIST S VYHLEDANÝMI FILMY -  vyrenderuje se pokud: 1. Se vyslal fetch request, 2. fetch request se i dokončil 3. našel se alespoň jeden film, 4. a zároveň nenastal error */}
              {isDisplayedSearch &&
              isLoading === false &&
              foundMovies.length > 0 &&
              error == null ? (
                <div>
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
                      startIcon={<TiArrowBackOutline />}
                    >
                      Back
                    </Button>
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* ERROR HLÁŠKA - vyrenderuje se pokud: 1. Se vyslal fetch request, 2.nastal při tom error */}
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
                      startIcon={<TiArrowBackOutline />}
                    >
                      Back
                    </Button>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* NENALEZEN ŽÁDNÝ MOVIE - vyrenderuje se, když 1. Se vyslal fetch request, 2. fetch request se i dokončil 3. počet nalezených filmů je 0, 4. a zároveň nenastal error */}
              {isDisplayedSearch &&
              isLoading === false &&
              foundMovies.length === 0 &&
              error == null ? (
                <div className="search-list-container">
                  <StyledListShort>
                    <FoundNoMovie />
                  </StyledListShort>
                  <div className="search-button-container">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={cancelSearch}
                      startIcon={<TiArrowBackOutline />}
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
                  startIcon={<TiArrowBackOutline />}
                >
                  Back
                </Button>
              )}
              {isLoading && <LoadingSpinner />}
            </form>
            {isDisplayedDateModal === true ? (
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
