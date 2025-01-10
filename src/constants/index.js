import chatverse from "../assets/projects/chatverse.jpeg";
import portfolio from "../assets/projects/portfolio.jpeg";
import geminiai from "../assets/projects/geminiaai.jpeg";
import foreverclone from "../assets/projects/foreverclone.jpeg";
import csvmanager from "../assets/projects/csvmanager.jpeg";

export const HERO_CONTENT = `
  Software Developer with 2 years of expertise in designing 
  and deploying innovative web applications across a diverse tech stack. 
  Proficient in building responsive user interfaces, creating robust APIs, 
  and collaborating effectively within cross-functional teams. 
  Eager to join a forward-thinking organization where I can expand my 
  knowledge and gain practical exposure, contributing to both organizational and personal growth.
`;

export const ABOUT_TEXT = `
  A dedicated Software Developer with expertise in building intuitive, 
  responsive interfaces and developing secure, scalable solutions for web applications. 
  I excel in full-stack development, API integration, and implementing features such as 
  user authentication and payment gateways. Passionate about leveraging modern technologies 
  to create innovative solutions that enhance user experience and drive business growth, 
  I maintain a strong focus on clean code and performance optimization. 
  My goal is to deliver robust applications that effectively meet both client and user needs. 
  Continuously learning and adapting to new trends, I strive to stay ahead in an ever-evolving technology landscape.
`;

export const EXPERIENCES = [
  {
    year: "Aug 2022 - Present",
    role: "Senior Analyst",
    company: "Capgemini",
    description: `Gained hands-on experience in front-end development, focusing on designing and implementing user-friendly, responsive interfaces compatible with various devices and browsers. Developed and maintained dynamic single-page applications (SPAs) using ReactJS, consistently meeting project deadlines. Implemented robust user authentication and authorization features to enhance application security. Integrated RESTful APIs to efficiently fetch and display data, ensuring a seamless and intuitive user experience.`,
    technologies: ["MERN", "SQL", "Java", "Spring Boot"],
  },
  {
    year: "Jan 2022 - Jun 2022",
    role: "Software Developer Intern",
    company: "Digiklug Solutions LLP",
    description: `Developed end-to-end solutions for full-stack web applications, utilizing React.js, Node.js, and Express.js for both frontend and backend development. Created responsive user interfaces using HTML5, CSS3, and JavaScript frameworks like React.js and AngularJS, while implementing database interactions and data modeling with MongoDB. Led the seamless integration of major payment gateways, such as Stripe, ensuring secure and efficient transaction processing.`,
    technologies: ["MERN", "MEAN", "Stripe"],
  }
];

export const PROJECTS = [
  {
    title: "Chatverse",
    date: "Dec 2024 - Jan 2025",
    image: chatverse,
    link: "https://github.com/veeraj2404/chatverse",
    description:
      `Chatverse is a MERN-based real-time chat application that ensures instant communication through robust WebSocket integration, secure messaging, and a dynamic user interface.`,
    technologies: ["MERN", "Tailwind", "Daisy UI", "Socket.io"],
  },
  {
    title: "Portfolio Website",
    date: "Dec 2024",
    image: portfolio,
    link: "https://github.com/veeraj2404/portfolio",
    description:
      `A personal portfolio website showcasing experience, projects, skills, and contact information.`,
    technologies: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Gemini AI Chatbot",
    date: "Oct 2024 - Nov 2024",
    image: geminiai,
    link: "https://github.com/veeraj2404/gemini-ai",
    description:
      `Developed a Gemini AI API Integration Project with a seamless React.js frontend and a Node.js backend that processes user-provided text and image inputs to generate AI-driven insights.`,
    technologies: ["React", "Bootstrap", "Node.js", "Gemini_AI_API"],
  },
  {
    title: "Forever Clone",
    date: "Jul 2024 - Sept 2024",
    image: foreverclone,
    link: "https://github.com/veeraj2404/Ecommerce-app",
    description:
      `An e-commerce application offering a complete shopping experience, including product browsing, cart management, and secure payment processing. The admin dashboard includes features for managing orders and products.`,
    technologies: ["React", "Tailwind", "Node.js", "mongoDB"],
  },
  {
    title: "CSV Manager",
    date: "Mar 2024",
    image: csvmanager,
    link: "https://github.com/veeraj2404/csv_manager",
    description:
      `Built an application for importing, editing, and exporting CSV files with a modular design and an intuitive React-based frontend for seamless user interaction.`,
    technologies: ["React", "Bootstrap", "mongoDB", "Node.js"],
  },
  // {
  //   title: "E-Commerce Web Services",
  //   date: "Oct 2022",
  //   image: project4,
  //   link: "https://github.com/veeraj2404/ecommerce",
  //   description:
  //     `The E-commerce Web Services Spring Boot
  //     application efficiently handles product browsing,
  //     ordering, and payment processing for a seamless
  //     online transaction experience.
  //     `,
  //   technologies: ["Spring Boot", "JDBC", "Hibernate", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Pune, MH, INDIA - 400057",
  phoneNo: "+91 721 9494 988 ",
  email: "virajwasnik24@gmail.com",
};
