import React from "react";
import {
  Img,
  Arrow,
} from "./StatSection.elements";

// See above, IA - Key Elements: File Input/Output:
// Importing necessary styles from external files

// Creating the StatSection component
const StatSection = () => {
  return (
    <>
      {/* Creating the rest of the component's display using the imported styled components */}
      <Img wide src={require("../../../images/stat-section.png").default} />
      <Arrow src={require("../../../images/scroll-arrow.png").default} />
    </>
  );
};

export default StatSection;
