import styled from "styled-components";

export const StyledMovieCard = styled.div`
  margin: 20px;
  margin-left: 30px;
  max-width: 180px;

  h2 {
    font-size: 13px;
    margin-bottom: -5px;
  }

  h3 {
    font-size: 11px;
    color: grey;
  }
  h4 {
    font-size: 12px;
    margin-top: -2px;
  }

  img {
    border-radius: 7px;
    margin-left: 8px;
    cursor: pointer;
  }

  .img-icon-container {
    display: flex;
  }
  .delete-icon {
    margin-left: 7px;
    margin-top: -1px;
    cursor: pointer;
  }

  .title-text {
    height: 50px;
  }
`;
