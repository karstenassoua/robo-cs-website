// IA - Data Structures
// Creating four objects with data to provide the About component

export const aboutObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "About the club",
  headline: "CS at Robinson",
  description: `We are the Robinson Computer Science Club, a club that loves and promotes learning and growing as a team. 
We work on projects relating to programming, and explore different topics in computer science.`,
  buttonLabel: "LEARN MORE",
  buttonLink: "/events",
  imgStart: "true",
  img: require("../../images/student-working.jpg").default,
  alt: "CS Lecture",
  start: "false",
};

export const aboutObjTwo = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: false,
  lightTextDesc: true,
  headline: "Our Officers",
  description: `Student volunteers help coordinate club activities!`,
  imgStart: "true",
  img: require("../../images/game-creation.png").default,
  alt: "Game Creation",
  start: "true",
};

