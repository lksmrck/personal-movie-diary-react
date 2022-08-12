import styled from "styled-components";

export const StyledList = styled.ul`
  color: black;
  text-align: center;
  list-style: none;
  width: 498px;
  height: 300px;
  overflow-y: scroll;
  background-color: white;

  li {
    display: flex;
    cursor: pointer;
    background-color: white;
    width: 484px;
    height: 100px;
    border: 1px solid grey;
    border-radius: 1px;
    margin-left: -40px;
    text-align: left;
    margin-bottom: -10px;
  }

  li div {
    margin-left: 20px;
  }

  span {
    margin-bottom: 80%;
  }
`;
