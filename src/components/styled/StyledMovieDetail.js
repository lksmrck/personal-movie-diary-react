import styled from "styled-components";

export const StyledMovieDetail = styled.div`
  width: 500px;
  background-color: #12141f;
  border-radius: 5px;
  margin: 20px;

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

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
  }

  .modal {
    position: fixed;
    top: 15vh;
    left: 5%;
    width: 90%;
    background-color: white;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: slide-down 300ms ease-out forwards;
  }
`;
