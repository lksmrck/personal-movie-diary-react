import styled from "styled-components";

export const StyledMoviesSort = styled.div`
  /*   width: 1300px; */
  display: flex;
  justify-content: center;
  /*   justify-content: space-between; */
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
    background-color: white;
    position: absolute;

    color: black;
    border-radius: 7px;

    visibility: visible;
    opacity: 1;
    transition: visibility 2s, opacity 1s linear;
    /* transition: transform 0.3s linear; */
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
    background-color: white;
    position: absolute;
    /*    margin-left: 80%;
    margin-top: 0.6%; */
    color: black;
    border-radius: 7px;
    visibility: hidden;
    opacity: 0;
    transition: visibility 1s, opacity 0.5s linear;
  }
  .statistics-data {
    font-weight: bold;
    color: red;
  }
`;
