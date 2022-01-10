import styled from "styled-components";

// Creating custom components using the styled-components library
export const HeroSec = styled.div`
  color: #fff;
  padding: 130px 100px;
  align-items: center;
  justify-content: center;
`;

export const HeroRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const HeroColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  margin-bottom: 60px;
  padding-top: 0;
  align-self: center;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  padding: -15px;
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const TopLine = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 1px;
  margin-bottom: 12px;
  text-transform: uppercase;
  @media screen and (max-width: 300px) {
    font-size: 10px;
  }
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
`;

export const Heading = styled.h1`
  margin-bottom: 14px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 800;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 300px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#f7f8fa" : "#1c2237")};
  @media screen and (max-width: 300px) {
    font-size: 15px;
  }
`;

export const Arrow = styled.img`
  margin-left: 35%;
  margin-right: 60%;
  display: block;
  width: 7%;
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