import React from "react";
import { aboutObjOne, aboutObjTwo } from "./Data";
import ScrollToTop from "../../components/ScrollToTop";
import InfoSection from "../../components/InfoSection/InfoSection";
import StatSection from "../../components/aboutcomponents/StatSection/StatSection";
import MemberSection from "../../components/aboutcomponents/MemberSection/MemberSection";

const About = () => {
  return (
    <>
      <ScrollToTop />
      <StatSection />
      <InfoSection {...aboutObjOne}></InfoSection>
      <MemberSection {...aboutObjTwo}></MemberSection>
    </>
  );
};

export default About;
