import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import {
  HeroSec,
  HeroRow,
  HeroColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./HeroSection.elements";

const HeroSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  buttonLabel2,
  description,
  headline,
  lightText,
  topLine,
  primary,
  start,
  img,
  alt,
  heroButton,
}) => {
  return (
    <>
      <HeroSec lightBg={lightBg}>
        <Container>
          <HeroRow imgStart={imgStart}>
            <HeroColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfGBsV48QxMO7t2-10hvCn79EqSC2WetRL2pxNtbrVHlvS-WA/viewform?usp=sf_link">
                  <Button heroButton={heroButton} primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
                <Link to="/events">
                  <Button heroButton={heroButton}>{buttonLabel2}</Button>
                </Link>
              </TextWrapper>
            </HeroColumn>
            <HeroColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </HeroColumn>
          </HeroRow>
        </Container>
      </HeroSec>
    </>
  );
};

export default HeroSection;
