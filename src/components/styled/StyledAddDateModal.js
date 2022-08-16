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
    width: 420px;
  }

  .buttons-container {
    margin-top: 5px;
  }
`;
