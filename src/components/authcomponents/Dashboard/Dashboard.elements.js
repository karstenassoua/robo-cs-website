import styled from "styled-components";
import { Link } from "react-router-dom";

// Creating components using the styled-components library
export const DashSec = styled.div`
  color: #fff;
  padding: 100px 0;
  margin-bottom: 23.2vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;

export const LinkWrapper = styled.div`
    width: 100;
    text-align: center;
    margin-top: 20px;
    color: #fff;

    a {
        color: #fff;
    }
`;

export const ButtonWrapper = styled.div`
    align-items: center;
    justify-content: center;
`;

export const Heading = styled.h1`
  margin-top: 60px;
  font-size: 30px;
  line-height: 1.1;
  margin-bottom: 20px;
  text-align: center;
  font-family: "Montserrat", "sans-serif";
  font-weight: 600;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const DashCard = styled.div`
    color: #fff;
    background-color: #fdc500;
    margin: auto;
    padding: 30px;
    width: 450px;
    border-radius: 30px;

    a {
        color: #00509D;
    }
`;

export const UpdateLink = styled(Link)`
    color: #fff;
`;
