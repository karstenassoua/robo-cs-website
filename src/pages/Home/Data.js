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
  img: require("../../images/rams-coding-blob.png").default,
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
  description: `We take on several projects in coding and development over the year!
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
  description: `Teamwork and collaboration are at the core of everything we do at Robinson CS. Students solve coding problems in teams, learn in small groups, and put their heads together to tackle the most trying issues in the world today.`,
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
  description: `At Robinson CS, we explore new technologies and develop solutions to real-world problems. `,
  buttonLink: "/updates",
  buttonLabel: "SEE UPDATES",
  imgStart: "start",
  img: require("../../images/cs-lecture.jpeg").default,
  alt: "CS Lecture",
  start: "false",
};
