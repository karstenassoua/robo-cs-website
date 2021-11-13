import React from "react";
import {
  Img,
  Arrow,
} from "./StatSection.elements";

const StatSection = () => {
  return (
    <>
      <Img wide src={require("../../../images/stat-section.png").default} />
      <Arrow src={require("../../../images/scroll-arrow.png").default} />
    </>
  );
};

export default StatSection;
