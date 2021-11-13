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
      <iframe title="Midterm Timer" src="https://indify.co/widgets/live/countdown/RQLmsoTMQZCNPe3WCdOo" style={{ border: "0", marginLeft: "5%", marginRight: "5%", marginBottom: "18%", display: "inline", width: "400px", height: "100px", borderRadius: "20px", scrolling: "no"}}></iframe>
      <iframe title="ROBO CS Calendar" src="https://indify.co/widgets/live/calendar/GI73hCK8fGgT451Nu9tW" style={{ border: "0", width: "800px", height: "600px", borderRadius: "20px"}}></iframe>
      <div style={{ display: "flex", justifyContent: "center", margin: "50px 0px" }}>
        <a href="https://mobile.twitter.com/ROBO_CS" className="liveEvents" style={{ color: "#fff" }}>
          Follow us on Twitter to never miss another <b>live</b> event!
        </a>
      </div>
    </>
  );
};

export default Events;
