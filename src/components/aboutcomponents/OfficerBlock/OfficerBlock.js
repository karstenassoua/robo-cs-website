import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  OfficerContainer,
  ImgWrapper,
  Img,
  SocialIconLink,
  TextWrapper,
  Name,
  Role,
} from "./OfficerBlock.elements";

const OfficerBlock = ({ img, alt, href1, href2, name, role }) => {
  return (
    <>
      <OfficerContainer>
        <ImgWrapper>
          <Img src={img} alt={alt} />
        </ImgWrapper>
        <SocialIconLink href={href1} target="_blank" aria-label="Email">
          <MdEmail /> 
        </SocialIconLink>
        <SocialIconLink href={href2} target="_blank" aria-label="Linkedin">
          <FaLinkedin />
        </SocialIconLink>
        <TextWrapper>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </TextWrapper>
      </OfficerContainer>
    </>
  );
};

export default OfficerBlock;
