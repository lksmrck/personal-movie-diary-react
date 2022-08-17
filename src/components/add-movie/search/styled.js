import styled from "styled-components";

export const StyledAddDateModal = styled.div`
  position: fixed;
  top: 20vh;
  left: 25%;
  height: 155px;

  width: 550px;
  background-color: #12141f;
  border-radius: 5px;
  margin: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;

  border: 1px solid white;

  @media only screen and (max-width: 600px) {
    left: 0;
    width: 370px;
  }

  .buttons-container {
    margin-top: 5px;
  }
`;

export const StyledList = styled.ul`
  color: black;
  text-align: center;
  list-style: none;
  width: 400px;
  max-height: 271px;
  overflow-y: scroll;
  background-color: white;
  margin-top: 0px;
  border-radius: 4px;

  @media only screen and (max-width: 600px) {
    width: 350px;
  }

  li {
    display: flex;
    cursor: pointer;
    background-color: white;
    width: 386px;
    height: 90.9px;
    border: 1px solid grey;
    border-radius: 1px;
    margin-left: -40px;
    text-align: left;

    overflow: hidden;
  }
  li img {
    /*  width: 64.9px;
    height: 91px; */
  }

  li div {
    margin-left: 20px;
  }

  span {
    margin-bottom: 80%;
  }
  .search-movie-data {
    font-size: 12px;
    width: 100%;
  }

  .search-title {
    font-weight: bold;
    width: 100%;
  }
`;

export const StyledListShort = styled.ul`
  color: black;
  text-align: center;
  list-style: none;
  width: 400px;
  height: 91px;
  overflow-y: scroll;
  background-color: white;
  margin-top: 0px;
  border-radius: 4px;

  li {
    display: flex;
    cursor: pointer;
    background-color: white;
    width: 386px;
    height: 90.9px;
    border: 1px solid grey;
    border-radius: 1px;
    margin-left: -40px;
    text-align: left;
    /* margin-bottom: -10px; */
    overflow: hidden;
  }
  /*  li img {
    width: 64.9px;
    height: 91px;
  } */

  li div {
    margin-left: 20px;
  }

  span {
    margin-bottom: 80%;
  }
  .search-movie-data {
    font-size: 12px;
  }

  .search-title {
    font-weight: bold;
  }
  .search-title-error {
    font-weight: bold;
    font-size: 17px;
  }
`;
