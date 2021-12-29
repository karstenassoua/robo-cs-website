import styled from "styled-components";

// Creating custom components using the styled-components library
export const MemberSec = styled.div`
  background-color: #fdc500;
  padding: 130px 0;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0;
    margin-bottom: 0;
  }
`;

export const MemberRow = styled.div`
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ textStart }) => (textStart ? "row-reverse" : "row")};
`;

export const MemberColumn  = styled.div`
  display: inline-block;
  margin-bottom: 70px;
  padding-right: 15px;
  padding-left: 35px;
  flex: 1;
  white-space: nowrap;
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
  padding-top: 20px;
  margin-right: 20px;

  @media screen and (max-width: 1050px) {
    transform: scale(0.999);
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

export const Heading = styled.div`
  color: #000000;
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 12px;
  font-family: "Cabin", "sans-serif";
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

export const Subtitle = styled.p`
margin-left: 5.5px;
  max-width: 440px;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
`;
