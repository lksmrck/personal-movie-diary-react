import styled from "styled-components";

export const StyledMovieDetail = styled.div`
  position: fixed;
  top: 20vh;
  left: 25%;
  height: 330px;

  width: 500px;
  background-color: #12141f;
  border-radius: 5px;
  margin: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;

  border: 1px solid white;

  .add-detail-btn-container {
    text-align: center;
    height: 100%;
    margin-top: 20%;
  }
  .btns-container {
    display: flex;
    flex-direction: column;
    width: 35%;
    margin-left: 32%;
  }
  .btns-container button {
    margin: 4px;
  }

  .add-detail-buttons-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 12px;
  }

  .text-field {
    background-color: white;
  }

  //MovieDetail.js
  .detail-container {
    width: 100%;
    height: 100%;
  }
  .detail-buttons-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5%;
  }
  .detail-buttons-container button {
    margin-top: 2%;
  }
  .detail-text-container {
    background-color: #161d2e;
    margin-left: 5%;
    margin-right: 5%;
    height: 200px;
    border-radius: 5px;
  }
  .detail-text-container p {
    margin-left: 7px;
  }
`;
