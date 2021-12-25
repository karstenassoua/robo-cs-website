import React from "react";
import { Container } from "../../../globalStyles";
import { officerObjOne, officerObjTwo } from "./Data"
import OfficerBlock from "../OfficerBlock/OfficerBlock";
import {
  MemberSec,
  MemberRow,
  MemberColumn,
  TextWrapper,
  Heading,
  Subtitle,
} from "./MemberSection.elements";

// See above, IA - Key Elements: File Input/Output:
// Importing necessary styles from external files

// Creating MemberSection component
const MemberSection = ({
  textStart,
  description,
  headline,
}) => {
  return (
    <>
      {/* Creating the rest of the component's display using styled components 
      // Referenced values in curly brackets will receive data from objects the Data.js file */}
      <MemberSec>
        <Container>
          <MemberRow textStart={textStart}>
            <MemberColumn>
              <TextWrapper>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
              </TextWrapper>
            </MemberColumn>
            <MemberColumn>
              <OfficerBlock {...officerObjOne}></OfficerBlock>
              <OfficerBlock {...officerObjTwo}></OfficerBlock>
            </MemberColumn>
          </MemberRow>
        </Container>
      </MemberSec>
    </>
  );
};

export default MemberSection;
