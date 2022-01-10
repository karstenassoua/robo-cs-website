import styled, { createGlobalStyle } from "styled-components";

// Defining app-wide styles for containers, buttons, and other elements 

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Cabin", sans-serif;
}

body {
    background-color: #00245e;
    height: 100%;
    background-image: url("https://i.imgur.com/ZCHxoGV.png?1");
}

::-webkit-scrollbar {
  width: 6px; // Changing the scrollbar's width
}

::-webkit-scrollbar-thumb {  
  background: #fff; // Changing the scrollbar's handle
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #FDC500; // Changing the scrollbar's handle when hovered over
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 40px;
  background: ${({ primary }) => (primary ? "#FDC500" : "#00509D")};
  white-space: nowrap;
  width: ${({ wide }) => (wide ? "400px" : "")};
  padding: ${({ big }) => (big ? "10px 64px" : "8px 20px")};
  color: ${({ primary }) => (primary ? "#012053" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  min-width: 133.84px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  margin-right: ${({ heroButton }) => (heroButton ? "10px" : "")};
  margin-bottom: ${({ heroButton }) => (heroButton ? "10px" : "")};

  &:hover {
    transition: all 0.3s ease-out;
    transform: scale(1.03);
  }

  @media screen and (max-width: 960px) {
    max-width: 80%;
  }
  @media screen and (max-width: 300px) {
    display: ${({ heroButton }) => (heroButton ? "none" : "inline-block")};

  }
`;

export default GlobalStyle;
