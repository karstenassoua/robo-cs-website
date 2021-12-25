import styled from "styled-components";

// Creating custom components using the styled-components library
export const Img = styled.img`
  margin-left: 18vw;
  margin-right: 20vw;
  margin-top: 10vh;
  display: block;
  width: 60%;
`;

export const Arrow = styled.img`
  margin: auto;
  display: block;
  margin-bottom: 10vh;
  width: 1.5%;
  animation: bounce 2s ease infinite;

  @keyframes bounce {
  0% {
    transform: translateY(-10%);
  }

  50% {
    transform: translateY(10%);
  }

  100% {
    transform: translateY(-10%);
  }
}
`;