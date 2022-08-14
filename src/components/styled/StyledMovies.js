import styled from "styled-components";

export const StyledMovies = styled.div`
  width: 955px;
  display: flex;
  flex-wrap: wrap;
  background-color: #333252;
  border-radius: 5px;
  margin: 20px;
  box-shadow: 3px 4px black;
  border: 0.5px solid grey;

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;
