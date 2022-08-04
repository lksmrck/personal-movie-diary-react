import styled from "styled-components";

export const StyledMovies = styled.div`
  width: 955px;
  display: flex;
  flex-wrap: wrap;
  background-color: #161d2e;
  border-radius: 5px;
  margin: 20px;

  border: 1px solid white;

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
