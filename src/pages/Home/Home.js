import React from "react";
import { heroObjOne, homeObjOne, homeObjTwo, homeObjThree } from "./Data";
import ScrollToTop from "../../components/ScrollToTop";
import InfoSection from "../../components/InfoSection/InfoSection";
import HeroSection from "../../components/HeroSection/HeroSection";

const Home = () => {
  return (
    <>
      <ScrollToTop /> {/* Including the ScrollToTop component above all others. */}
      {/* Calling InfoSection and HeroSection (landing page) components and passing properties to them */}
      <HeroSection {...heroObjOne}></HeroSection>
      <InfoSection {...homeObjOne}></InfoSection>
      <InfoSection {...homeObjTwo}></InfoSection>
      <InfoSection {...homeObjThree}></InfoSection>
    </>
  );
};

export default Home;
