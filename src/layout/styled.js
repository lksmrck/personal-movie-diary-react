import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #1876d1;
  color: white;
  text-align: center;
`;

export const StyledFooter = styled.footer`
  font-size: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10%;
`;

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
