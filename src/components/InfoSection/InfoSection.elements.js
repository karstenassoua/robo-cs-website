import styled from "styled-components";

// Creating custom components using the styled-components library
export const InfoSec = styled.div`
  color: #fff;
  padding: 100px 0;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#032C76")};
  overflow: hidden;

  a {
    color: #fff;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
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
  padding-top: 0;
  align-self: center;

  @media screen and (max-width: 843px) {
    transform: scale(0.99)
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    max-width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#fdc500" : "#000000")};
  font-size: 24px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 6px solid white; // This should ideally be respnsive to the background color of the InfoSec div element.
  border-radius: 40.12px;
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
  margin-bottom: 10px;
  font-size: 48px;
  line-height: 1.1;
  font-family: "Montserrat", "sans-serif";
  font-weight: 800;
  color: #FDC500;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#f7f8fa" : "#1c2237")};
`;

export const br = styled.div`
min-height: 100px;
`;

export const InfoLink = styled.a`
  display: block;
  margin-top: -10px;
  margin-bottom: 25px;
`;