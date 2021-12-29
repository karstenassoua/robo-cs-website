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

// See above, IA - Key Elements: File Input/Output:
// Importing necessary styles from external files

// Creating "Featured" component
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
      {/* Creating the rest of the component's display using styled components 
      // Referenced values in curly brackets will receive data from objects in each page's Data.js file */}
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
