import React, { useState, useContext } from "react";
/* import { StyledAddImgURLModal } from "./styled/StyledAddImgUrlModal"; */
import { StyledAddImgURLModal } from "./styled/StyledAddImgURLModal";
import MoviesContext from "../MoviesContext";
import Input from "./Input";
import { Button } from "@mui/material";

export default function AddImgURLModal(props) {
  const { addToMovies } = useContext(MoviesContext);

  const [imgURL, setImgURL] = useState("");

  const onChangeImgURL = (e) => {
    setImgURL(e.target.value);
  };

  const onSubmitImgURL = () => {
    const movieToBeAdded = props.movieToBeAdded;
    const updatedMovie = { ...movieToBeAdded, imageURL: imgURL };
    addToMovies(updatedMovie);
    backToAddMovie();
  };

  const backToAddMovie = () => {
    props.backToAddMovie();
  };

  return (
    <StyledAddImgURLModal>
      <p>Please add the cover image URL.</p>
      <p className="example-text">
        i.e. https://m.media-amazon.com/images/I/51asM9eJMXL.jpg{" "}
      </p>
      <form onSubmit={onSubmitImgURL}>
        <Input
          label="Image URL"
          input={{
            id: "Image URL",
            type: "text",
          }}
          value={imgURL}
          onChangeInput={onChangeImgURL}
          defaultValue="https://m.media-amazon.com/images/I/51asM9eJMXL.jpg"
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
        <Button variant="outlined" color="error" onClick={backToAddMovie}>
          Back
        </Button>
      </form>
    </StyledAddImgURLModal>
  );
}
