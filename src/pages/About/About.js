import React from "react";
import { aboutObjOne, aboutObjTwo } from "./Data";
import ScrollToTop from "../../components/ScrollToTop";
import InfoSection from "../../components/InfoSection/InfoSection";
import StatSection from "../../components/aboutcomponents/StatSection/StatSection";
import MemberSection from "../../components/aboutcomponents/MemberSection/MemberSection";

const About = () => {
  return (
    <>
      <ScrollToTop /> {/* Including the ScrollToTop component above all others. */}
      {/* Calling InfoSection and MemberSection, and StatSection (statistcs) components and passing properties to them */}
      <StatSection /> 
      <InfoSection {...aboutObjOne}></InfoSection>
      <MemberSection {...aboutObjTwo}></MemberSection>
    </>
  );
};

export default About;
