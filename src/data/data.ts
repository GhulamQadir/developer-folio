interface TechStack {
  image: string;
  title: string;
}

const developerName: string = "Ghulam Qadir";
const developerAboutInfo: string =
  "I am currently doing my Bachelors from XYZ University, Karachi, Pakistan.I have a keen interest in Full Stack development.My goal is to use my expertise in building exciting and functional user  interfaces.Alongside this, I am creating side projects for enhancing my skills in the field of development, learning latest technologies and applying in making side projects.The following are tech stacks that I use regularly: ";
const developerShortInfo:string = "A passionate MERN Stack Developer creating web applications using the latest frontend technologies and frameworks to bring your vision to life."

const techStacks: TechStack[] = [
  { image: "/tech-stacks/js.webp", title: "JavaScript" },
  { image: "/tech-stacks/ts.png", title: "TypeScript" },
  { image: "/tech-stacks/react.png", title: "React JS" },
  { image: "/tech-stacks/nextjs.webp", title: "Next JS" },
  { image: "/tech-stacks/tailwind.png", title: "Tailwind CSS" },
  { image: "/tech-stacks/html.png", title: "HTML" },
  { image: "/tech-stacks/css.png", title: "CSS" },
  { image: "/tech-stacks/firebase.png", title: "Firebase" },
];

interface TProject {
  title: string;
  image: string;
  aboutInfo: string;
  hostedLink: string;
  github: string;
  techStack: string[];
}

const projects: TProject[] = [
  {
    title: "Task Manager",
    image: "/projects/todo.jpg",
    aboutInfo:
      "This project introduces a robust task management application. It offers a user-friendly interface to create, organize, and track tasks efficiently.",
    hostedLink: "https://ghulamqadir.github.io/react-zustand-todoApp/",
    github: "https://github.com/GhulamQadir/react-zustand-todoApp",
    techStack: [
      "/tech-stacks/react.png",
      "/tech-stacks/js.webp",
      "/tech-stacks/tailwind.png",
    ],
  },
  {
    title: "News App",
    image: "/projects/news.jpg",
    aboutInfo:
      "This web app provides a comprehensive platform to access news from diverse sources. Users can browse through a variety of news categories, including top headlines sports and more.",
    hostedLink: "https://ghulamqadir.github.io/news-app/",
    github: "https://github.com/GhulamQadir/news-app",
    techStack: [
      "/tech-stacks/html.png",
      "/tech-stacks/js.webp",
      "/tech-stacks/css.png",
    ],
  },
  {
    title: "Quiz App",
    image: "/projects/quiz.jpg",
    aboutInfo:
      "This quiz app offers an engaging way to test your knowledge. Users can answer multiple-choice questions on various topics and track their progress.",
    hostedLink: "https://ghulamqadir.github.io/quiz-app/",
    github: "https://github.com/GhulamQadir/quiz-app",
    techStack: [
      "/tech-stacks/html.png",
      "/tech-stacks/js.webp",
      "/tech-stacks/css.png",
    ],
  },
  {
    title: "Weather App",
    image: "/projects/weather.jpg",
    aboutInfo:
      "This weather app provides real-time weather information for any location. The app leverages a weather API to fetch the latest data and presents it in a clear and visually appealing format.",
    hostedLink: "https://ghulamqadir.github.io/weather-app/",
    github: "https://github.com/GhulamQadir/weather-app",
    techStack: [
      "/tech-stacks/html.png",
      "/tech-stacks/js.webp",
      "/tech-stacks/css.png",
    ],
  },
];

export { techStacks, projects, developerName, developerAboutInfo,developerShortInfo };
