import React, { useContext, useEffect, useState } from "react";
import Input from "../Input";
import { ContainerForm } from "../styled/containers/ContainerForm";
import { Button } from "@mui/material";
import { StyledForm } from "../styled/StyledForm";
import { StyledList } from "../styled/StyledList";
import SearchItem from "./SearchItem";
import SearchContext from "../../SearchContext";

export default function Search() {
  const [displayedSearch, setDisplayedSearch] = useState("");
  const { setSearchTerm, getMovies, searchURL, foundMovies } =
    useContext(SearchContext);

  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    getMovies(searchURL);
    console.log(foundMovies);
  };

  return (
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
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </div>
        <div>
          <StyledList>
            {foundMovies.length > 0 &&
              foundMovies.map((movie) => (
                <SearchItem
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  movieYear={movie.release_date}
                  imageURL={movie.poster_path}
                />
              ))}
          </StyledList>
        </div>
      </StyledForm>
    </ContainerForm>
  );
}
