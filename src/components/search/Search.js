import React from "react";
import Input from "../Input";
import { ContainerForm } from "../styled/containers/ContainerForm";
import { Button } from "@mui/material";
import { StyledForm } from "../styled/StyledForm";
import SearchItem from "./SearchItem";

export default function Search() {
  return (
    <ContainerForm>
      <StyledForm>
        <div className="inputs-container search">
          <Input
            label="Movie name"
            input={{
              id: "Movie name",
              type: "text",
            }}
            placeholder="Harry Potter"
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
        <div>
          <SearchItem />
        </div>
      </StyledForm>
    </ContainerForm>
  );
}
