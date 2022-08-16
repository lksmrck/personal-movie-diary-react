import styled from "styled-components";

export const StyledAddImgURLModal = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 20vh;
  left: 25%;
  height: 200px;

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

  .info-text {
    margin-left: 2%;
  }

  .example-text {
    margin-left: 2%;
    font-size: 13px;
    color: #aaa5b8;
  }

  .example-text-bold {
    font-weight: bold;
  }
  .buttons-container {
    display: flex;
    justify-content: center;
    margin-top: 5px;
  }
  .add-url-container {
  }
`;
