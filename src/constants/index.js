import chatverse from "../assets/projects/chatverse.jpeg";
import portfolio from "../assets/projects/portfolio.jpeg";
import geminiai from "../assets/projects/geminiaai.jpeg";
import foreverclone from "../assets/projects/foreverclone.jpeg";
import csvmanager from "../assets/projects/csvmanager.jpeg";

export const HERO_CONTENT = `
  Software Engineer with 3+ years of experience building full-stack applications, 
  cloud data pipelines, and enterprise analytics solutions. 
  Experienced in MERN stack development along with Azure-based data engineering 
  using Azure Functions, Azure Data Factory, and Power BI to deliver scalable data-driven systems. 
  I enjoy working across the full stack—from application development and backend APIs to data platforms and analytics.
`;

export const ABOUT_TEXT = [
  `Hi, I'm Viraj Wasnik, a Software Engineer working across full-stack development, 
  data engineering, and analytics platforms. I build scalable web applications using 
  the MERN stack and develop cloud-based data solutions on Microsoft Azure. `,

  `I have experience designing backend systems, building data pipelines, and creating 
  Power BI dashboards that support operational insights and business decisions. 
  My work focuses on developing end-to-end solutions — from application interfaces 
  and APIs to data workflows and analytics platforms. `,

  `I enjoy working across different layers of technology and continuously improving systems 
  to make them more efficient, scalable, and reliable. `
];

export const EXPERIENCES = [
  {
    year: "Sept 2025 - Present",
    role: "Power BI Developer - Analytics Engineering",
    company: "Capgemini",
    description: `Manage and optimize enterprise Power BI dashboards across multiple workspaces, implementing multi-language support and performance enhancements. Develop datasets, data models, and advanced DAX measures to enable dynamic KPI tracking and analytics insights. Oversee publishing of Power BI reports, deployment of Power Apps solutions, and integration of data workflows to support enterprise analytics operations..`,
    technologies: ["Power BI", "DAX", "Translations Builder", "Incremental Refresh"]
  },
  {
    year: "Mar 2025 - Aug 2025",
    role: "Data Engineer",
    company: "Capgemini",
    description: `Developed cloud data pipelines using Azure Functions, Azure Data Factory, and Azure SQL to automate ingestion and processing of operational data. Implemented ETL workflows and data transformation logic to ensure accurate, consistent, and reliable datasets. Delivered structured data powering analytics platforms and dashboards for enterprise reporting and operational insights.`,
    technologies: ["Python", "Azure Functions", "Azure Data Factory"," Azure SQL", "ETL"]
  },
  {
    year: "Mar 2023 - Dec 2024",
    role: "Software Engineer - Full Stack",
    company: "Capgemini",
    description: `Built full-stack web applications and prototypes using React.js, Node.js, Express.js, and MongoDB, enabling interactive and scalable solutions. Designed RESTful APIs, JWT-based authentication, and modular backend and frontend architecture to support real-time workflows. Developed dynamic user interfaces and integrated external APIs to enhance application functionality and user experience.`,
    technologies: ["MERN", "WebSocket", "JWT", "REST APIs", "Git", "Postman"]
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
    title: "AI Chatbot",
    date: "Oct 2024 - Nov 2024",
    image: geminiai,
    link: "https://github.com/veeraj2404/gemini-ai",
    description:
      `Built an AI-powered chatbot integrating the Google Gemini API to handle text and image-based prompts through a full-stack architecture.`,
    technologies: ["React", "Bootstrap", "Node.js", "Gemini_AI_API"],
  },
  {
    title: "E-Commerce Platform",
    date: "Jul 2024 - Sept 2024",
    image: foreverclone,
    link: "https://github.com/veeraj2404/Ecommerce-app",
    description:
      `An e-commerce application offering a complete shopping experience, including product browsing, cart management, and secure payment processing. The admin dashboard includes features for managing orders and products.`,
    technologies: ["React", "Tailwind", "Node.js", "mongoDB"],
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
