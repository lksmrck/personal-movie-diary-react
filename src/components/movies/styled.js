import styled from "styled-components";

export const StyledMovieCard = styled.div`
  margin: 20px;
  margin-left: 30px;
  max-width: 180px;

  h2 {
    font-size: 14px;
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

  @media only screen and (max-width: 600px) {
    margin-left: 12px;
    max-width: 153px;
    .rating {
      margin-left: -7px;
      width: 100px;
    }
  }

  @media only screen and (max-width: 375px) {
    margin-left: 12px;
    max-width: 140px;
  }
`;

export const StyledMovies = styled.div`
  width: 955px;
  display: flex;
  flex-wrap: wrap;
  background-color: #333252;
  border-radius: 5px;
  margin: 20px;
  box-shadow: 3px 4px black;
  border: 0.5px solid grey;

  @media only screen and (max-width: 375px) {
    justify-content: center;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const ContainerMovies = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledNoMoviesFound = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  font-size: 25px;
  height: 200px;
  @media only screen and (max-width: 600px) {
    height: 350px;
  }
`;
