import styled from "styled-components";

export const StyledList = styled.ul`
  background-color: #333252;
  color: black;
  text-align: center;
  list-style: none;
  ul {
    background-color: white;
  }

  li {
    display: flex;

    background-color: white;
    width: 498px;
    height: 100px;
    border: 1px solid grey;
    border-radius: 1px;
    margin-left: 85px;
    text-align: left;
  }

  li div {
    margin-left: 20px;
  }

  span {
    margin-bottom: 80%;
  }
`;
