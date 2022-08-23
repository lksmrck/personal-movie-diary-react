import styled from "styled-components";

export const MainAddMoviePageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledMainAddMoviePage = styled.div`
  width: 955px;
  height: 212px;
  background-color: #333252;
  border: 0.5px solid grey;
  border-radius: 5px;
  margin: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  box-shadow: 3px 4px black;

  .main-buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    margin: 5px;
  }
`;

export const StyledLoadingSpinner = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 40px;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 10px solid #f3f3f3;
    border-top: 10px solid #383636;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
    margin-top: 10px;
  }
`;
