import styled from "styled-components";

export const StyledAddImgURLModal = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;

  .modal-data {
    height: 180px;
    width: 550px;

    margin-top: 15vh;
    background-color: #12141f;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    border: 1px solid white;

    form {
      margin-left: 6%;
    }
  }

  .info-text {
    margin-left: 6%;
  }

  .example-text {
    margin-left: 6%;
    font-size: 13px;
    color: #aaa5b8;
  }

  .example-text-bold {
    font-weight: bold;
  }
  .buttons-container {
    display: flex;
    justify-content: center;
    margin-left: -6%;
    margin-top: 3px;
  }

  @media only screen and (max-width: 600px) {
    .modal-data {
      width: 370px;
      form {
        margin-left: 2.5%;
      }
    }

    .example-text {
      margin-left: 2.5%;
      font-size: 11px;
    }
    .info-text {
      margin-left: 2.5%;
    }
  }
`;

export const StyledForm = styled.div`
  width: 955px;
  background-color: #333252;
  border: 0.5px solid grey;
  border-radius: 5px;
  margin: 20px;
  position: relative;
  box-shadow: 3px 4px black;
  z-index: 5;

  @media only screen and (max-width: 600px) {
    .inputs {
      width: 350px;
    }
  }

  .search-list-container {
    position: absolute;
  }

  .inputs {
    background-color: white;
  }

  .inputs-container {
    text-align: center;
  }

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
    margin-top: -20.5px;
    margin-right: -5.5px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
`;
