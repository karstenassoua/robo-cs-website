// IA - Data Structures
// Creating four objects with data to provide the Home component

export const heroObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Robinson Computer Science Club",
  headline: "Learning and building the future together.",
  description: `Scroll for some more of our news.`,
  buttonLabel: "JOIN",
  buttonLink: "/login",
  buttonLabel2: "EVENTS",
  buttonLink2: "/events",
  imgStart: "",  // Empty: image right, "True": image left
  img: require("../../images/ram-code-new.svg").default,
  alt: "Rams coding",
  start: "true",
  heroButton: true,
};

export const homeObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Build your passion",
  headline: "CREATE",
  description: `We take on several projects in coding and development over the year.
  Members gain access to weekly coding challenges to reinforce proficiencies and unlock new skills.`,
  buttonLink: "/about",
  buttonLabel: "LEARN MORE",
  infoLoc: "https://tinyurl.com/robocschallenges",
  infoLabel: "Weekly ROBO CS Code Challenges",
  imgStart: "true",
  img: require("../../images/cs-classroom.png").default,
  alt: "CS Lecture",
  start: "false",
};

export const homeObjTwo = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Work as a team",
  headline: "COLLABORATE",
  description: `We are the Robinson Computer Science Club, a place that harbors learning and growing as a team. 
We work on projects relating to programming, and explore different topics of computer science.`,
  buttonLink: "/about",
  buttonLabel: "ABOUT US",
  imgStart: "",
  img: require("../../images/game-creation.png").default,
  alt: "Game Creation",
  start: "true",
};

export const homeObjThree = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "New technologies",
  headline: "EXPLORE",
  description: `We are the Robinson Computer Science Club, a place that harbors learning and growing as a team. 
We work on projects relating to programming, and explore different topics of computer science.`,
  buttonLink: "/updates",
  buttonLabel: "SEE UPDATES",
  imgStart: "start",
  img: require("../../images/cs-lecture.jpeg").default,
  alt: "CS Lecture",
  start: "false",
};
