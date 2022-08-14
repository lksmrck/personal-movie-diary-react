import styled from "styled-components";

export const StyledMoviesSort = styled.div`
  display: flex;
  justify-content: center;

  margin-left: 15px;

  .sort-control {
    display: flex;
    justify-content: space-between;
  }

  .sort-container {
    width: 955px;
  }

  .statistics {
    font-size: 13px;
    padding-left: 7px;

    width: 10.5vw;
    height: 14vh;
    background-color: #b0dae9;
    position: absolute;
    margin-top: -14px;
    color: black;
    border-radius: 7px;

    visibility: visible;
    opacity: 1;
    transition: visibility 2s, opacity 1s linear;

    animation: bounce-in-right 1s ease;
    animation-fill-mode: forwards;
  }
  @keyframes bounce-in-right {
    0% {
      opacity: 0;
      transform: translateX(-600px);
    }
    60% {
      opacity: 1;
      transform: translateX(-170px);
    }
    80% {
      transform: translateX(-175px);
    }
    100% {
      transform: translateX(-170px);
    }
  }

  .statistics-icon {
    width: 40px;
    height: 40px;
    margin-right: 20px;
    margin-top: 10px;
  }

  .statistics-hidden {
    font-size: 13px;
    padding-left: 7px;
    width: 10.5vw;
    height: 14vh;
    background-color: #b0dae9;
    position: absolute;
    margin-top: -14px;
    color: black;
    border-radius: 7px;
    visibility: hidden;
    opacity: 0;
  }
  .statistics-data {
    font-weight: bold;
    color: red;
  }

  //ANIMATION
`;
