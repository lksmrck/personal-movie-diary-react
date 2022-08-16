import styled from "styled-components";

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
