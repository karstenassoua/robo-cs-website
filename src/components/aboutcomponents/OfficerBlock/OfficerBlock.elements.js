import styled from "styled-components";

// Creating custom components using the styled-components library
export const OfficerContainer = styled.div`
  background-color: #fff;
  max-width: 40%;
  max-height: 500px;
  display: inline-block;
  margin: 10px;
  border-radius: 50.28px;
  padding: 27px;
  text-align: center;

  &:hover {
    transition: all 0.3s ease-out;
    transform: scale(1.07);
  }
`;

export const ImgWrapper = styled.div``;

export const Img = styled.img`
  width: 80%;
`;

export const SocialIconLink = styled.a`
  color: #000000;
  font-size: 25px;
  padding: 26px;

  &:hover {
    color: #04509d;
  }
`;

export const TextWrapper = styled.div``;

export const Name = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
`;
export const Role = styled.p`
  font-size: 1.2rem;
`;

export const Checkbox = styled.input`
  display: none;
`;

export const OfficerBioLink = styled.a`
  display: block;
  font-size: 1rem;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
  border-radius: 7px;
  transition: all 0.25s ease-out;

  &:hover {
    color: #00509D;
  }
`;