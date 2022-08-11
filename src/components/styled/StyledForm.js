import styled from "styled-components";

export const StyledForm = styled.div`
  width: 955px;
  background-color: #333252;
  border: 1px solid white;
  border-radius: 5px;
  margin: 20px;
  position: relative;

  form {
    margin: 10px;
  }

  .statistics {
    font-size: 13px;
    padding-left: 7px;

    width: 10.5vw;
    height: 14vh;
    background-color: white;
    position: absolute;
    margin-left: 80%;
    margin-top: 0.6%;
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
    position: absolute;
    margin-left: 90%;
    margin-top: -5%;
  }

  .statistics-hidden {
    font-size: 13px;
    padding-left: 7px;
    width: 10.5vw;
    height: 14vh;
    background-color: white;
    position: absolute;
    margin-left: 80%;
    margin-top: 0.6%;
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
  .inputs-container.search {
    display: flex;
    justify-content: space-evenly;
  }
`;
