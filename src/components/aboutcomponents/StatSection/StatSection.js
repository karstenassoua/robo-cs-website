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
} from "./StatSection.elements";

const StatSection = ({
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

export default StatSection;
