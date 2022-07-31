import React from "react";
import styled from "styled-components";

export const StyledMovieCard = styled.div`
  margin: 20px;
  margin-left: 30px;
  max-width: 180px;

  h2 {
    font-size: 15px;
    margin-bottom: -5px;
  }

  h3 {
    font-size: 11px;
    color: grey;
  }
  h4 {
    font-size: 13px;
    margin-top: -2px;
  }

  img {
    border-radius: 7px;
    margin-left: 8px;
  }

  .img-trash-container {
    display: flex;
  }
  .trash-icon {
    margin-left: 10px;
  }
`;
