import React, { useState, useContext } from "react";
import { StyledAddImgURLModal } from "./styled";
import MoviesContext from "../../../store/MoviesContext";
import Input from "./Input";
import { Button } from "@mui/material";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoAddCircleOutline } from "react-icons/io5";

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
      <div className="modal-data">
        <div className="add-url-container">
          <p className="info-text">Please add the cover image URL.</p>
          <p className="example-text">
            <span className="example-text-bold">Example:</span>{" "}
            https://m.media-amazon.com/images/I/51asM9eJMXL.jpg{" "}
          </p>
          <form onSubmit={onSubmitImgURL}>
            <Input
              label="Image URL"
              input={{
                id: "Image URL",
                type: "text",
                value: imgURL,
                onChange: onChangeImgURL,
                placeholder:
                  "https://m.media-amazon.com/images/I/51asM9eJMXL.jpg",
              }}
            />
            <div className="buttons-container">
              <Button
                variant="contained"
                type="submit"
                startIcon={<IoAddCircleOutline />}
              >
                Submit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={backToAddMovie}
                startIcon={<TiArrowBackOutline />}
              >
                Back
              </Button>
            </div>
          </form>
        </div>
      </div>
    </StyledAddImgURLModal>
  );
}
