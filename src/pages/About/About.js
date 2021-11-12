import React from "react";
import { heroObjOne, aboutObjOne, aboutObjTwo } from "./Data";
import ScrollToTop from "../../components/ScrollToTop";
import InfoSection from "../../components/InfoSection/InfoSection";
import StatSection from "../../components/StatSection/StatSection";
import MemberSection from "../../components/MemberSection/MemberSection";

const About = () => {
  return (
    <>
      <ScrollToTop />
      <StatSection {...heroObjOne}></StatSection>
      <InfoSection {...aboutObjOne}></InfoSection>
      <MemberSection {...aboutObjTwo}></MemberSection>
    </>
  );
};

export default About;
