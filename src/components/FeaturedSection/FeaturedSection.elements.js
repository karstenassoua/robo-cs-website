import styled from "styled-components";

export const FeatSec = styled.div`
  color: #fff;
  padding: 130px 0;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0;
    margin-bottom: 0;
  }
`;

export const FeatRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const FeatColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 1050px) {
    transform: scale(0.8);
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  align-self: center;

  @media screen and (max-width: 1050px) {
    transform: scale(0.999);
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }

  @media screen and (max-width: 790px) {
    transform: scale(0.9);
  }
`;

export const ImgWrapper = styled.div`
  padding: -15px;
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};

  @media screen and (max-width: 860px) {
    transform: scale(0.9);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TopLine = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 1px;
  margin-bottom: 12px;
  text-transform: uppercase;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;

  &:hover {
    transition: all 0.3s ease-out;
    transform: scale(1.02);
  }

  @media screen and (max-width: 1160px) {
    transition: all 0.3s ease-out;
    margin-left: 50px;
    max-width: 355px;
  }
`;

export const Heading = styled.h1`
color: black;
  margin-bottom: 10px;
  font-size: 100px;
  line-height: 1.1;
  font-family: "Montserrat", "sans-serif";
  font-weight: 800;
  color: #fdc500;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all ease-in-out;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#f7f8fa" : "#1c2237")};
`;
