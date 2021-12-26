import React from "react";
import { Container } from "../../../globalStyles";
import { officerObjOne, officerObjTwo, officerObjThree } from "./Data"
import OfficerBlock from "../OfficerBlock/OfficerBlock";
import {
  MemberSec,
  MemberRow,
  MemberColumn,
  TextWrapper,
  Heading,
  Subtitle,
} from "./MemberSection.elements";

const MemberSection = ({
  textStart,
  description,
  headline,
}) => {
  return (
    <>
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
              <OfficerBlock {...officerObjThree}></OfficerBlock>
            </MemberColumn>
          </MemberRow>
        </Container>
      </MemberSec>
    </>
  );
};

export default MemberSection;
