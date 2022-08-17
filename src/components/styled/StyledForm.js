import styled from "styled-components";

export const StyledForm = styled.div`
  width: 955px;
  background-color: #333252;
  border: 0.5px solid grey;
  border-radius: 5px;
  margin: 20px;
  position: relative;
  box-shadow: 3px 4px black;
  z-index: 5;

  form {
    margin: 10px;
  }

  button {
    margin: 5px;
  }

  .inputs-container.search {
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
    height: 120px;
  }

  .search-button-container {
    display: flex;
    justify-content: right;
    margin-top: -20px;
    margin-right: -5px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
`;
