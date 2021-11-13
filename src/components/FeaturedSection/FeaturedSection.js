import React from "react";
import { Container } from "../../globalStyles";
import {
  FeatSec,
  FeatRow,
  FeatColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  EventArrow
} from "./FeaturedSection.elements";

const FeaturedSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  description,
  headline,
  lightText,
  topLine,
  start,
  img,
  alt,
}) => {
  return (
    <>
      <FeatSec lightBg={lightBg}>
        <Container>
          <FeatRow imgStart={imgStart}>
            <FeatColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              </TextWrapper>
              <EventArrow src={require("../../images/scroll-arrow.png").default} />
            </FeatColumn>
            <FeatColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </FeatColumn>
          </FeatRow>
        </Container>
      </FeatSec>
    </>
  );
};

export default FeaturedSection;
