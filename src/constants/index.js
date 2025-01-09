import chatverse from "../assets/projects/chatverse.jpeg";
import portfolio from "../assets/projects/portfolio.jpeg";
import geminiai from "../assets/projects/geminiaai.jpeg";
import foreverclone from "../assets/projects/foreverclone.jpeg";
import csvmanager from "../assets/projects/csvmanager.jpeg";

export const HERO_CONTENT = `Software Developer with 2 years of expertise in crafting and deploying
  innovative web applications across a diverse tech stack. Demonstrating
  proficiency in building responsive user interfaces, creating robust APIs, and
  effective collaboration within cross-functional teams. Eager to join a forwardthinking organization where I can expand my knowledge and gain practical
  exposure, contributing to both organizational and personal growth.
`;

export const ABOUT_TEXT = `
  A dedicated Software Developer with expertise in building intuitive, 
  responsive interfaces, and developing secure, scalable solutions for web applications. 
  I excel in full-stack development, API integration, and implementing features 
  like user authentication and payment gateways. I am passionate about leveraging 
  modern technologies to create innovative solutions that enhance user experience and 
  drive business growth. With a strong focus on clean code and performance optimization, 
  I aim to deliver robust applications that meet both client and user needs effectively. 
  Continuously learning and adapting to new trends, 
  I strive to stay ahead of the curve in an ever-evolving technology landscape.
`;

export const EXPERIENCES = [
  {
    year: "Aug 2022 - Present",
    role: "Senior Analyst",
    company: "Capgemini",
    description: `Gained hands-on experience in front-end development, focusing on designing and implementing user-friendly, responsive interfaces compatible across various devices and browsers. Developed and maintained dynamic single-page applications (SPAs) using ReactJS, consistently meeting project timelines. Implemented robust user authentication and authorization features to enhance application security. Integrated RESTful APIs to efficiently fetch and present data, ensuring a seamless and intuitive user experience.`,
    technologies: ["MERN", "SQL", "Java", "Spring Boot"],
  },
  {
    year: "Jan 2022 - Jun 2022",
    role: "Software Developer Intern",
    company: "Digiklug Solutions LLP",
    description: `Developed end-to-end solutions for full-stack web applications, utilizing React.js, Node.js, and Express.js for both frontend and backend development. Created responsive user interfaces with HTML5, CSS3, and JavaScript frameworks like React.js and AngularJS, while implementing database interactions and data modeling with MongoDB. Led seamless integration of major payment gateways, such as Stripe, ensuring secure and efficient transaction processing.`,
    technologies: ["MERN", "MEAN", "Stripe"],
  }
];

export const PROJECTS = [
  {
    title: "ChatVerse",
    date: "Dec 2024 - Jan 2025",
    image: chatverse,
    link: "https://github.com/veeraj2404/chatverse",
    description:
      "ChatVerse is a MERN real-time chat application, ensures instant communication with robust WebSocket integration, secure messaging, and a dynamic UI.",
    technologies: ["MERN", "Tailwind", "Daisy UI", "Socket.io"],
  },
  {
    title: "Portfolio Website",
    date: "Dec 2024",
    image: portfolio,
    link: "https://github.com/veeraj2404/portfolio",
    description:
      "A personal portfolio website showcasing experience, projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Gemini AI Chatbot",
    date: "Oct 2024 - Nov 2024",
    image: geminiai,
    link: "https://github.com/veeraj2404/gemini-ai",
    description:
      `Developed a Gemini AI API Integration Project with
      a seamless React.js frontend and Node.js backend
      that processes user-provided text/image inputs to
      generate AI-driven insights.`,
    technologies: ["React", "Bootstrap", "Node.js", "Gemini_AI_API"],
  },
  {
    title: "Forever Clone",
    date: "Jul 2024 - Sept 2024",
    image: foreverclone,
    link: "https://github.com/veeraj2404/Ecommerce-app",
    description:
      `The e-commerce application provides a complete shopping experience
       with product browsing, cart management, and secure payment processing.
        The backend features an admin dashboard to manage orders, products,
         users, and advanced reporting tools.`,
    technologies: ["React", "Tailwind", "Node.js", "mongoDB"],
  },
  {
    title: "CSV Manager",
    date: "Mar 2024",
    image: csvmanager,
    link: "https://github.com/veeraj2404/csv_manager",
    description:
      `Developed an application for importing, editing, and
      exporting CSV files with a modular design and an
      intuitive React-based frontend for seamless user
      interaction.
      `,
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
