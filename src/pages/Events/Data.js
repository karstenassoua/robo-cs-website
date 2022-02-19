// IA - Data Structures
// Creating four objects with data to provide the Events component

export const featObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "ROBO CS Presents",
  headline: "GMUtalks",
  description: `CONVERSATIONS WITH CS PROFESSORS`,
  imgStart: "", // Empty: image right, "True": image left
  img: require("../../images/gmu-thumbnails-new.svg").default,
  alt: "GMU Professors",
  start: "true",
  heroButton: true,
  displayButton: false,
};

export const eventsObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Developments in CS",
  headline: "",
  description: "Robinson CS introduces students to workplace technologies and the cutting edge of computer science innovations. Connected to scholarships, internships, seminars, and summer programs, Rams are more than prepared—they're career-ready.",
  buttonLabel: "READ MORE",
  buttonLink: "/about",
  imgStart: "true",
  img: require("../../images/cs-classroom.png").default,
  alt: "video",
  start: "false",
};
