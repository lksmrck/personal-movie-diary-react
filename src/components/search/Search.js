import React, { useContext, useState } from "react";
import Input from "../Input";
import { ContainerForm } from "../styled/containers/ContainerForm";
import { Button } from "@mui/material";
import { StyledForm } from "../styled/StyledForm";
import { StyledList } from "../styled/StyledList";
import SearchItem from "./SearchItem";
import SearchContext from "../../SearchContext";

export default function Search() {
  const { setSearchTerm, getMovies, searchURL, foundMovies } =
    useContext(SearchContext);

  const [isDisplayedSearch, setIsDisplayedSearch] = useState(false);

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    getMovies(searchURL);
    setIsDisplayedSearch(true);
  };

  const cancelSearch = () => {
    setIsDisplayedSearch(false);
  };

  return (
    <div>
      <ContainerForm>
        <StyledForm>
          <div className="inputs-container search">
            <form onSubmit={onSubmitForm}>
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
                      />
                    ))}
                  </StyledList>
                  <Button variant="contained" onClick={cancelSearch}>
                    Back
                  </Button>
                </div>
              ) : (
                ""
              )}
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </StyledForm>
      </ContainerForm>
    </div>
  );
}
