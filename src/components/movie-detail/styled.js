import styled from "styled-components";

export const StyledMovieDetail = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;

  .detail-data {
    height: 330px;
    width: 500px;
    margin-top: 15vh;
    background-color: #12141f;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    border: 1px solid white;
  }

  @media only screen and (max-width: 600px) {
    .detail-data {
      height: 350px;
      width: 370px;
    }
  }

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
    @media only screen and (max-width: 600px) {
      left: 0;
      width: 368px;
      margin-left: 0;
    }
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
    margin-top: 5%;
    height: 200px;
    border-radius: 5px;
    overflow-wrap: break-word;
    overflow-y: scroll;
  }

  .detail-text-container::-webkit-scrollbar {
    display: none;
  }
  .detail-text-container p {
    background-color: #161d2e;
    margin-left: 7px;
    overflow-wrap: break-word;
  }

  button {
    width: 200px;
  }
  @media only screen and (max-width: 600px) {
    button {
      width: 150px;
    }
    height: 360px;
  }
`;
