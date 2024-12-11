interface TechStack {
  image: string;
  title: string;
}

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
    hostedLink: "",
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
    hostedLink: "",
    github: "https://github.com/GhulamQadir/react-zustand-todoApp",
    techStack: [
      "/tech-stacks/html.png",
      "/tech-stacks/js.webp",
      "/tech-stacks/css.png",
    ],
  },
  {
    title: "Quiz App",
    image: "/projects/quiz.jpg",
    aboutInfo: "",
    hostedLink: "",
    github: "https://github.com/GhulamQadir/react-zustand-todoApp",
    techStack: [
      "/tech-stacks/html.png",
      "/tech-stacks/js.webp",
      "/tech-stacks/css.png",
    ],
  },
  {
    title: "Weather App",
    image: "/projects/weather.jpg",
    aboutInfo: "",
    hostedLink: "",
    github: "https://github.com/GhulamQadir/react-zustand-todoApp",
    techStack: [
      "/tech-stacks/html.png",
      "/tech-stacks/js.webp",
      "/tech-stacks/css.png",
    ],
  },
];

export { techStacks, projects };
