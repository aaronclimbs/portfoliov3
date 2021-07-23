export const homeObj = [
  {
    id: "greenpoint",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: "Bootcamp Project",
    headline: "GreenPoint",
    description: "Keep track of your sustainable activities.",
    buttonLabel: "Get started now!",
    imgStart: false,
    img: require("../../assets/images/svg-1.svg"),
    alt: "growing",
    dark: true,
    dark2: false,
    primary: true,
    darkText: false,
    darker: false,
    repoLink: "https://github.com/aaronclimbs/greenpoint",
    liveLink: "https://glacial-peak-greenpoint.herokuapp.com/",
    screenshots: [
      require("../../assets/images/GreenpointFAQ.png"),
      require("../../assets/images/GreenpointHomepage.png"),
    ],
    stack: [
      "Bootstrap",
      "CSS3",
      "HTML5",
      "Javascript",
      "JWT",
      "MongoDB",
      "ReactJS",
    ],
  },
  {
    id: "meiplaw",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: "Freelance/Work Project",
    headline: "Maddox Edwards",
    description: "A boutique IP law firm in Washington, DC",
    buttonLabel: "Defend your IP.",
    imgStart: true,
    img: require("../../assets/images/svg-2.svg"),
    alt: "office",
    dark: false,
    dark2: false,
    primary: false,
    darkText: true,
    darker: true,
    repoLink: "",
    liveLink: "https://www.meiplaw.com",
    // screenshots: [require("../../assets/images/MeiplawCover.png"), require("../../assets/images/MeiplawCases.png")],
    stack: ["GraphQL", "Javascript", "ReactJS", "TailwindCSS", "Wordpress"],
  },
  {
    id: "flexpace",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: "Bootcamp Project",
    headline: "Flexspace",
    description: "Don't leave those conference rooms unused!",
    buttonLabel: "Rent your rooms now.",
    imgStart: false,
    img: require("../../assets/images/svg-3.svg"),
    alt: "reservations",
    dark: true,
    dark2: false,
    primary: true,
    darkText: false,
    darker: false,
    repoLink: "https://github.com/aaronclimbs/flexspace",
    liveLink: "https://gwbootcampflexspace.heroku app.com/",
    screenshots: [
      require("../../assets/images/FlexspaceCover2.png"),
      require("../../assets/images/FlexspaceSignup.png"),
    ],
    stack: [
      "CSS3",
      "Express",
      "HTML5",
      "Javascript",
      "MYSQL",
      "Node.js",
      "PassportJS",
      "Sequelize",
    ],
  },
  {
    id: "herbal",
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topline: "Freelance",
    headline: "Herbal Remedy Repository",
    description:
      "A comprehensive repository of most herbal remedies and their uses.",
    buttonLabel: "Learn more",
    imgStart: true,
    img: require("../../assets/images/svg-4.svg"),
    alt: "herbs",
    dark: false,
    dark2: false,
    primary: false,
    darkText: true,
    darker: true,
    repoLink: "",
    liveLink: "https://herbalremedyrepository.com",
    stack: ["Javascript", "NextJS", "ReactJS", "TailwindCSS"],
  },
];

export const techIcons = {
  Bash: {
    img: require("../../assets/images/logos/bash.svg"),
    name: "Bash",
  },
  Bootstrap: {
    img: require("../../assets/images/logos/bootstrap.svg"),
    name: "Bootstrap",
  },
  CSS3: {
    img: require("../../assets/images/logos/css3.svg"),
    name: "CSS3",
  },
  Express: {
    img: require("../../assets/images/logos/express.jpg"),
    name: "Express",
  },
  Firebase: {
    img: require("../../assets/images/logos/firebase.svg"),
    name: "Firebase",
  },
  Gatsby: {
    img: require("../../assets/images/logos/gatsby.svg"),
    name: "Gatsby",
  },
  Git: {
    img: require("../../assets/images/logos/git.svg"),
    name: "Git",
  },
  GraphQL: {
    img: require("../../assets/images/logos/graphql.svg"),
    name: "GraphQL",
  },
  Heroku: {
    img: require("../../assets/images/logos/heroku.svg"),
    name: "Heroku",
  },
  HTML5: {
    img: require("../../assets/images/logos/html5.svg"),
    name: "HTML5",
  },
  Javascript: {
    img: require("../../assets/images/logos/javascript.svg"),
    name: "Javascript",
  },
  JWT: {
    img: require("../../assets/images/logos/jwt.svg"),
    name: "JSONWebTokens",
  },
  Linux: {
    img: require("../../assets/images/logos/linux.svg"),
    name: "Linux",
  },
  MongoDB: {
    img: require("../../assets/images/logos/mongodb.jpg"),
    name: "MongoDB",
  },
  Mongoose: {
    img: require("../../assets/images/logos/mongoose.svg"),
    name: "Mongoose",
  },
  MYSQL: {
    img: require("../../assets/images/logos/mysql.svg"),
    name: "SQL",
  },
  NextJS: {
    img: require("../../assets/images/logos/nextjs.svg"),
    name: "NextJS",
  },
  "Node.js": {
    img: require("../../assets/images/logos/nodejs.svg"),
    name: "Node.js",
  },
  NPM: {
    img: require("../../assets/images/logos/npm.svg"),
    name: "NPM",
  },
  PassportJS: {
    img: require("../../assets/images/logos/passportjs.svg"),
    name: "PassportJS",
  },
  Python: {
    img: require("../../assets/images/logos/python.svg"),
    name: "Python",
  },
  ReactJS: {
    img: require("../../assets/images/logos/react.svg"),
    name: "ReactJS",
  },
  Sequelize: {
    img: require("../../assets/images/logos/sequelize.svg"),
    name: "Sequelize",
  },
  "Styled-components": {
    img: require("../../assets/images/logos/styled-components.png"),
    name: "Styled-components",
  },
  TailwindCSS: {
    img: require("../../assets/images/logos/tailwindcss.svg"),
    name: "TailwindCSS",
  },
  Typescript: {
    img: require("../../assets/images/logos/typescript.svg"),
    name: "Typescript",
  },
  Wordpress: {
    img: require("../../assets/images/logos/wordpress.svg"),
    name: "Wordpress",
  },
};

export const skills = [
  {
    name: "API Development",
    icon: require("../../assets/images/svg-5.svg"),
    description: "Properly implement routes using a REST or GraphQL approach.",
    alt: "api",
  },
  {
    name: "Web Scraping",
    icon: require("../../assets/images/svg-6.svg"),
    description:
      "Automate the gathering and cleaning of data from various sources.",
      alt: "web-scraping",
  },
  {
    name: "Frontend Frameworks",
    icon: require("../../assets/images/svg-7.svg"),
    description:
      "Use ESNext practices alongside React or Vue to build out responsive apps.",
      alt: "frontend-frameworks",
  },
  {
    name: "Tests",
    icon: require("../../assets/images/svg-8.svg"),
    description:
      "Utilize React Testing Library and Jest to effectively test web apps.",
      alt: "tests",
  },
  {
    name: "Version Control",
    icon: require("../../assets/images/svg-9.svg"),
    description: "Use Git best-practices to maintain a legible history.",
    alt: "version-control",
  },
  {
    name: "Databases",
    icon: require("../../assets/images/svg-10.svg"),
    description: "Properly persist and query data within applications.",
    alt: "databases",
  },
  {
    name: "Design",
    icon: require("../../assets/images/svg-11.svg"),
    description:
      "Build out a responsive, accessible, consistent design across a site or app.",
      alt: "design"
  },
];
