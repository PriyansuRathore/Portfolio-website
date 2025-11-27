// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import bennettLogo from './assets/education_logo/bennettUni.png';
import armySchoolLogo from './assets/education_logo/armyschool.png';

// Project Section Logo's
import quickAILogo from './assets/work_logo/QuickAI.png';
import pasteAppLogo from './assets/work_logo/pasteapp.png';
import ecommerceLogo from './assets/work_logo/e-commerce cart.png';
import todoLogo from './assets/work_logo/TODO.png';
// Import placeholder component
import ProjectPlaceholder from './components/ProjectPlaceholder';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: bennettLogo,
      school: "Bennett University",
      date: "2022 - 2026",
      grade: "9.0 CGPA",
      desc: "Currently pursuing my Bachelor's degree in Technology (B.Tech) with specialization in Artificial Intelligence and Machine Learning from Bennett University. During my studies, I have gained expertise in AI/ML algorithms, deep learning, computer vision, natural language processing, and full-stack development. I have worked on various projects involving Gen-AI applications, computer vision, and scalable web applications, combining intelligent systems with clean engineering practices.",
      degree: "Bachelor of Technology - B.Tech (AI/ML)",
    },
    {
      id: 1,
      img: armySchoolLogo,
      school: "Army Public School",
      date: "2020 - 2021",
      grade: "94%",
      desc: "I completed my class 12 education from Army Public School under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science. This strong foundation in science and mathematics provided me with analytical and problem-solving skills that have been instrumental in my technical journey.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: armySchoolLogo,
      school: "Army Public School",
      date: "2018 - 2019",
      grade: "93.8%",
      desc: "I completed my class 10 education from Army Public School under the CBSE board, where I studied Science with Computer Applications. This early exposure to computer science sparked my interest in technology and programming, laying the foundation for my future career in software development.",
      degree: "CBSE(X) - Science with Computer Applications",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Comprehensive AI Tools Platform",
      description:
        "A full-stack AI-powered SaaS application offering tools for content creation, image processing, and document analysis. Features AI services including article/blog title generation, resume review, and text-to-image generation using Google Gemini and ClipDrop API. Built with community features like public gallery, likes system, and personalized user dashboards.",
      image: quickAILogo,
      tags: ["React 19", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "Clerk", "Google Gemini", "ClipDrop", "Cloudinary"],
      github: "https://github.com/PriyansuRathore/Quick-AI",
      webapp: "https://quickai-coral.vercel.app/",
    },
    {
      id: 1,
      title: "FoodFavor - AI-Powered Zero-Waste Cooking",
      description:
        "An AI-powered platform promoting zero-waste cooking by transforming leftovers into creative dishes. Integrated OpenAI to generate personalized recipes from surplus ingredients, reducing food waste by 70%. Features community-driven recipe sharing and donation hub connecting local charities with expiration alerts.",
      image: 'placeholder-ai',
      tags: ["OpenAI", "React", "shadcn/ui", "Django Rest Framework", "AI"],
      github: "https://github.com/PriyansuRathore/FoodFavor-master",
      webapp: "#",
    },
    {
      id: 2,
      title: "StudyCircle - Educational Technology Platform",
      description:
        "A comprehensive Educational Technology platform built using the MERN Stack. The platform enables seamless creation, consumption, and management of educational content with advanced features for both students and instructors. Features course management, progress tracking, and interactive learning tools.",
      image: 'placeholder-education',
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "MERN Stack"],
      github: "https://github.com/PriyansuRathore/STUDY-CIRCLE",
      webapp: "#",
    },
    {
      id: 3,
      title: "Vibe Commerce - Mock E-Commerce Cart",
      description:
        "A full-stack shopping cart application built for internship screening. Features a modern React frontend with glass morphism UI, Node.js/Express backend with REST APIs, and SQLite database for persistence. Includes product management, cart functionality, and responsive design.",
      image: ecommerceLogo,
      tags: ["React", "Node.js", "Express", "SQLite", "Glass Morphism UI", "REST API"],
      github: "https://github.com/PriyansuRathore/E-com-Cart",
      webapp: "#",
    },
    {
      id: 4,
      title: "PasteShare - Code Snippet Manager",
      description:
        "A sophisticated web application designed for developers to create, manage, and share code snippets efficiently. Built using modern web technologies, it provides a seamless experience for code collaboration and knowledge sharing with syntax highlighting and sharing capabilities.",
      image: pasteAppLogo,
      tags: ["React", "JavaScript", "Code Management", "Syntax Highlighting"],
      github: "https://github.com/PriyansuRathore/PasteApp-react",
      webapp: "https://paste-app-react.vercel.app/",
    },
    {
      id: 5,
      title: "TaskFlow - Personal Productivity App",
      description:
        "A modern, feature-rich todo application with age verification, priority management, and advanced productivity features. Turn chaos into clarity, one task at a time with intuitive task organization, deadline tracking, and productivity analytics.",
      image: todoLogo,
      tags: ["React", "JavaScript", "Productivity", "Task Management"],
      github: "https://github.com/PriyansuRathore/TODOApp",
      webapp: "https://todo-app-eight-alpha-90.vercel.app/",
    },
    {
      id: 6,
      title: "Apache JIRA Scraper for LLM Dataset",
      description:
        "A production-ready Node.js system that scrapes Apache JIRA issues and transforms them into structured JSONL datasets for LLM training. Uses REST API for efficient, reliable data extraction from SPARK, HADOOP, KAFKA with comprehensive fault tolerance and resumability.",
      image: 'placeholder-scraper',
      tags: ["Node.js", "REST API", "Data Scraping", "LLM Dataset", "JSONL"],
      github: "https://github.com/PriyansuRathore/apache-jira-scraper-llm",
      webapp: "#",
    },
  ];  