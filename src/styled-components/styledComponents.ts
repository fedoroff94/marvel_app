import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  &:after {
    content: "";
    background: url("images/background.webp") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
    z-index: -1;
  }
`;

