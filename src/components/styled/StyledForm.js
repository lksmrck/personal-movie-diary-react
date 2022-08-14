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
