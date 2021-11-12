import React from "react";
import { featObjOne, eventsObjOne } from "./Data";
import ScrollToTop from "../../components/ScrollToTop";
import InfoSection from "../../components/InfoSection/InfoSection";
import FeaturedSection from "../../components/FeaturedSection/FeaturedSection";

const Events = () => {
  return (
    <>
      <ScrollToTop />
      <FeaturedSection {...featObjOne}></FeaturedSection>
      <InfoSection {...eventsObjOne}></InfoSection>
      <div style={{ display: "flex", justifyContent: "center", margin: "50px 0px" }}>
        <a href="https://mobile.twitter.com/ROBO_CS" className="liveEvents" style={{ color: "#fff" }}>
          Follow us on Twitter to never miss another <b>live</b> event!
        </a>
      </div>
    </>
  );
};

export default Events;
