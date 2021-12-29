import React from "react";
import { Link } from "react-router-dom"
import { Container, Button } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  InfoLink
} from "./InfoSection.elements";

// See above, IA - Key Elements: File Input/Output:
// Importing necessary styles from external files

// Creating information section component
const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  lightText,
  topLine,
  primary,
  start,
  img,
  alt,
  buttonLink,
  infoLoc,
  infoLabel
}) => {
  return (
    <>
      {/* Creating the rest of the component's display using styled components 
      // Referenced values in curly brackets will receive data from objects in each page's Data.js file */}
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <InfoLink href={infoLoc}>{infoLabel}</InfoLink>
                <Link to={buttonLink}>
                  <Button big primary={primary}>{buttonLabel}</Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
