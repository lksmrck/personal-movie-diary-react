import { React, useState, useContext } from "react";
import Input from "./Input";
import { ContainerForm } from "./styled";
import { StyledForm } from "./styled";
import { Button } from "@mui/material";
import SearchContext from "../../../store/SearchContext";

import Backdrop from "../../../layout/Backdrop";
import AddImgURLModal from "./AddImgURLModal";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { TiArrowBackOutline } from "react-icons/ti";

export default function Form(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newMovieYear, setNewMovieYear] = useState("");
  const [newDateWatched, setNewDateWatched] = useState("");

  const [movieToBeAdded, setMovieToBeAdded] = useState({});
  const [addImgDisplay, setAddImgDisplay] = useState(false);

  const { setAddMovieState } = useContext(SearchContext);

  const onChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };
  const onChangeDateFilmed = (e) => {
    setNewMovieYear(e.target.value);
  };
  const onChangeDateWatched = (e) => {
    setNewDateWatched(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const movieItem = {
      id: Math.random().toString(),
      title: newTitle,
      movieYear: newMovieYear,
      dateWatched: newDateWatched,
      stars_1: "",
      stars_2: "",
    };

    setMovieToBeAdded(movieItem);
    setAddImgDisplay(true);
    setNewTitle("");
    setNewMovieYear("");
    setNewDateWatched("");
  };

  const backToMainPage = () => {
    setAddMovieState("PICK");
  };

  const backToAddMovie = () => {
    setAddImgDisplay(false);
    backToMainPage();
  };

  return (
    <ContainerForm>
      <StyledForm>
        <div className="inputs-container">
          <form onSubmit={onSubmitForm}>
            <Input
              label="Movie name"
              input={{
                id: "Movie name",
                type: "text",
                value: newTitle,
                onChange: onChangeTitle,
                placeholder: "Harry Potter",
              }}
            />
            <Input
              label="Year filmed"
              input={{
                id: "Year filmed",
                type: "number",
                min: 1900,
                max: 2022,
                step: 1,
                value: newMovieYear,
                onChange: onChangeDateFilmed,
                placeholder: "2021",
              }}
            />
            <Input
              label="Date watched"
              input={{
                id: "Date watched",
                type: "date",
                value: newDateWatched,
                onChange: onChangeDateWatched,
              }}
              inputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              variant="contained"
              type="submit"
              startIcon={<HiOutlineDocumentAdd />}
            >
              Add Movie
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={backToMainPage}
              startIcon={<TiArrowBackOutline />}
            >
              Back
            </Button>
          </form>
        </div>

        {/* Po kliknutí na Add Movie se vyrenderuje modální okno, kde se zadá URL obrázku */}
        {addImgDisplay === true ? (
          <Backdrop>
            <AddImgURLModal
              movieToBeAdded={movieToBeAdded}
              displayImgModalToggle={setAddImgDisplay}
              backToAddMovie={backToAddMovie}
            />
          </Backdrop>
        ) : (
          ""
        )}
      </StyledForm>
    </ContainerForm>
  );
}
