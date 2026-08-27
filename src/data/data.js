export const content = {
en: {
profile: {
name: "Rebeca Medina Gómez",
role: "Frontend Developer",
location: "Costa Rica · Remote / Hybrid / On-Site",
email: "rebemedi99@gmail.com",
linkedin: "https://www.linkedin.com/in/rebemedina99/",
github: "https://github.com/RebeMedina",
summary:
"Frontend Developer focused on building responsive, user-centered web experiences with React, Vue.js, and modern web technologies.",
},

skillCategories: [
  {
    title: "Frontend & Web",
    icon: "code",
    items: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vue.js 3",
      "React",
      "React Router",
      "Tailwind CSS",
      "WordPress",
    ],
  },
  {
    title: "Backend & Data",
    icon: "database",
    items: [
      "C#",
      ".NET",
      "ASP.NET MVC",
      "SQL",
      "PostgreSQL",
      "REST APIs",
      "Power BI",
    ],
  },
  {
    title: "Design & UX",
    icon: "palette",
    items: [
      "Figma",
      "UI/UX Principles",
      "Responsive Design",
      "Accessibility",
    ],
  },
  {
    title: "AI & Productivity",
    icon: "bot",
    items: [
      "AI Productivity Tools",
      "Prompt Engineering",
      "Claude",
      "GitHub Copilot",
    ],
  },
  {
    title: "Tools & Methods",
    icon: "wrench",
    items: [
      "Git",
      "GitHub",
      "Jira",
      "Scrum",
      "VS Code",
      "Visual Studio",
      "Netlify",
    ],
  },
  {
    title: "Soft Skills",
    icon: "users",
    items: [
      "Creativity",
      "Teamwork",
      "Effective Communication",
      "Problem Solving",
      "Attention to Detail",
      "Adaptability",
      "User Empathy",
    ],
  },
],

spokenLanguages: [
  {
    name: "Spanish",
    level: "Native",
  },
  {
    name: "English",
    level: "Intermediate — B1",
  },
],

certifications: [
  "Cybersecurity Awareness Professional Certification (CAPC) — CertiProf",
],

projects: [
  {
    id: "fitness-ai",
    name: "Fitness AI Planner",
    tag: "Personal project — In progress",
    current: true,
    live: true,
    status: "in-progress",
    period: "Aug 2026 – Present",
    description:
      "Full stack fitness planning application that combines React, Node.js, PostgreSQL, and AI-powered features to create personalized and adaptable workout experiences based on user goals, experience, availability, and equipment.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "REST API",
      "AI",
    ],
    url: null,
    accent: "emerald",
  },

  {
    id: "jeansport",
    name: "JeanSport",
    tag: "Freelance — In production",
    current: false,
    live: true,
    status: "production",
    period: "Jul 2026 – Present",
    description:
      "Sports web platform focused on Costa Rican football, bringing together match results, matchdays, standings, statistics, top scorers, news, and team information through a modern and responsive experience. The platform continues to evolve based on the client’s needs.",
    stack: [
      "React",
      "Vite",
      "JavaScript",
      "React Router",
      "REST API",
      "Netlify",
    ],
    url: "https://jeansport.netlify.app/#/",
    accent: "violet",
  },

  {
    id: "docentes",
    name: "Teacher Assignment System",
    tag: "Supervised internship — UCR",
    current: false,
    live: false,
    status: "completed",
    period: "Mar 2023 – Feb 2024",
    description:
      "Academic management system developed during a supervised internship at the Universidad de Costa Rica. The project was designed to streamline the assignment of teachers to courses and schedules, while providing a centralized way to manage availability and academic information. It includes organized views, search and filtering capabilities, and reusable functionality that helps make the assignment process more efficient and easier to manage.",
    stack: ["Vue.js", "Laravel", "Axios", "PHP", "REST API"],
    url: null,
    accent: "sky",
  },

  {
    id: "nimbuazul",
    name: "Nimbu Azul",
    tag: "Community project",
    current: false,
    live: false,
    status: "completed",
    period: "Previous project",
    description:
      "Educational website created as part of a university community project focused on environmental awareness among children. The platform presents environmental topics through interactive and accessible content, encouraging children to learn about recycling, energy conservation, and the protection of nature in a simple and engaging way. The name “Nimbu” has its roots in the Chorotegan language and means “water”, reflecting the project's connection to environmental health, cultural heritage, and the natural richness of Guanacaste.",
    stack: ["WordPress", "PHP", "Responsive Design", "UI/UX"],
    url: "https://nimbuazul.netlify.app",
    accent: "indigo",
  },
],

experience: [
  {
    role: "Frontend Developer — Freelance",
    org: "JeanSport",
    place: "Remote",
    period: "Jul 2026 – Present",
    bullets: [
      "Design and development of the official JeanSport web platform.",
      "Developed sections for match results, matchdays, standings, statistics, top scorers, and news.",
      "Implemented a responsive experience focused on accessibility across mobile and desktop devices.",
      "Developed functionality for browsing different matchdays and viewing historical match information.",
      "Integrated dynamic content through REST APIs to keep platform information up to date.",
      "Work directly with the client to define requirements, prioritize features, and deliver continuous improvements.",
    ],
  },

  {
    role: "Web Developer",
    org: "Universidad de Costa Rica",
    place: "Hybrid — Liberia, Guanacaste",
    period: "Jul 2023 – Mar 2024",
    bullets: [
      "Developed and maintained an educational institutional website.",
      "Customized themes and configured plugins to improve functionality, security, and performance.",
      "Structured website content and implemented responsive interfaces following usability best practices.",
      "Collaborated with academic staff to gather requirements and translate them into functional web features.",
    ],
  },

  {
    role: "Frontend Developer — Internship",
    org: "Universidad de Costa Rica",
    place: "Hybrid — Liberia, Guanacaste",
    period: "Mar 2023 – Feb 2024",
    bullets: [
      "Developed responsive user interfaces for web applications.",
      "Integrated frontend components with REST APIs for dynamic data visualization.",
      "Optimized performance and improved dynamic data loading across core pages.",
      "Collaborated with backend developers to implement and validate application functionality.",
    ],
  },

  {
    role: "IT Support Technician",
    org: "Hospital de La Anexión",
    place: "On-site — Nicoya, Guanacaste",
    period: "Sep 2017 – Dec 2017",
    bullets: [
      "Provided on-site technical support for installation, configuration, maintenance, and troubleshooting of computer equipment.",
      "Managed IT inventory by documenting equipment status and location.",
      "Assisted with equipment replacement and upgrades, ensuring efficient transitions.",
      "Resolved internal technical incidents and provided user support.",
    ],
  },
],

academicProjects: [
  {
    name: "Restaurant Management System",
    period: "Jul 2022",
    bullets: [
      "Management application following an MVC architecture.",
      "Relational database with complete CRUD operations.",
      "Business logic for menus, orders, tables, and ingredients.",
    ],
  },

  {
    name: "Vehicle Rental System",
    period: "Mar 2020",
    bullets: [
      "Vehicle rental management system with a relational database.",
      "ER diagrams and stored procedures for data operations.",
      "Testing and database administration using PostgreSQL and pgAdmin.",
    ],
  },
],

education: {
  degree: "Bachelor's Degree in Business Computing (Information Systems)",
  school: "Universidad de Costa Rica",
  place: "Liberia, Guanacaste",
  period: "March 2018 – October 2024",
},

},

es: {
profile: {
name: "Rebeca Medina Gómez",
role: "Desarrolladora Frontend",
location: "Costa Rica · Remoto / Híbrido / Presencial",
phone: "(506) 8639-9527",
email: "rebemedi99@gmail.com",
linkedin: "https://www.linkedin.com/in/rebemedina99/",
github: "https://github.com/RebeMedina",
summary:
"Desarrolladora Frontend enfocada en crear experiencias web responsivas y centradas en la persona usuaria utilizando React, Vue.js y tecnologías web modernas.",
},

skillCategories: [
  {
    title: "Frontend & Web",
    icon: "code",
    items: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vue.js 3",
      "React",
      "React Router",
      "Tailwind CSS",
      "WordPress",
    ],
  },
  {
    title: "Backend & Datos",
    icon: "database",
    items: [
      "C#",
      ".NET",
      "ASP.NET MVC",
      "SQL",
      "PostgreSQL",
      "REST APIs",
      "Power BI",
    ],
  },
  {
    title: "Diseño & UX",
    icon: "palette",
    items: [
      "Figma",
      "Principios de UI/UX",
      "Diseño responsivo",
      "Accesibilidad",
    ],
  },
  {
    title: "IA & Productividad",
    icon: "bot",
    items: [
      "Herramientas de IA",
      "Prompt Engineering",
      "Claude",
      "GitHub Copilot",
    ],
  },
  {
    title: "Herramientas & Métodos",
    icon: "wrench",
    items: [
      "Git",
      "GitHub",
      "Jira",
      "Scrum",
      "VS Code",
      "Visual Studio",
      "Netlify",
    ],
  },
  {
    title: "Habilidades Blandas",
    icon: "users",
    items: [
      "Creatividad",
      "Trabajo en equipo",
      "Comunicación efectiva",
      "Resolución de problemas",
      "Atención al detalle",
      "Adaptabilidad",
      "Empatía con la persona usuaria",
    ],
  },
],

spokenLanguages: [
  {
    name: "Español",
    level: "Nativo",
  },
  {
    name: "Inglés",
    level: "Intermedio — B1",
  },
],

certifications: [
  "Cybersecurity Awareness Professional Certification (CAPC) — CertiProf",
],

projects: [
  {
    id: "fitness-ai",
    name: "Fitness AI Planner",
    tag: "Proyecto personal — En desarrollo",
    current: true,
    live: true,
    status: "in-progress",
    period: "Ago 2026 – Actualidad",
    description:
      "Aplicación full stack para la planificación personalizada de entrenamientos que combina React, Node.js, PostgreSQL y funcionalidades impulsadas por IA para crear experiencias de entrenamiento personalizadas y adaptables según los objetivos, experiencia, disponibilidad y equipamiento de cada persona.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "REST API",
      "IA",
    ],
    url: null,
    accent: "emerald",
  },

  {
    id: "jeansport",
    name: "JeanSport",
    tag: "Freelance — En producción",
    current: false,
    live: true,
    status: "production",
    period: "Jul 2026 – Actualidad",
    description:
      "Plataforma web deportiva enfocada en el fútbol costarricense que reúne resultados, jornadas, tabla de posiciones, estadísticas, goleadores, noticias e información de los equipos en una experiencia moderna y responsive. El proyecto continúa evolucionando según las necesidades del cliente.",
    stack: [
      "React",
      "Vite",
      "JavaScript",
      "React Router",
      "REST API",
      "Netlify",
    ],
    url: "https://jeansport.netlify.app/#/",
    accent: "violet",
  },

  {
    id: "docentes",
    name: "Sistema de Asignación de Docentes",
    tag: "Práctica profesional — UCR",
    current: false,
    live: false,
    status: "completed",
    period: "Mar 2023 – Feb 2024",
    description:
      "Sistema de gestión académica desarrollado durante una práctica profesional supervisada en la Universidad de Costa Rica. El proyecto fue creado para facilitar la asignación de docentes a cursos y horarios, centralizando la gestión de disponibilidad e información académica. Incluye vistas organizadas, herramientas de búsqueda y filtrado, y funcionalidades reutilizables que permiten agilizar y ordenar el proceso de asignación docente.",
    stack: ["Vue.js", "Laravel", "Axios", "PHP", "REST API"],
    url: null,
    accent: "sky",
  },

  {
    id: "nimbuazul",
    name: "Nimbu Azul",
    tag: "Proyecto comunitario",
    current: false,
    live: false,
    status: "completed",
    period: "Proyecto anterior",
    description:
      "Sitio web educativo creado como parte de un proyecto de trabajo comunitario universitario enfocado en la educación ambiental para niños. La plataforma presenta temas ambientales mediante contenido interactivo y accesible, promoviendo el aprendizaje sobre reciclaje, ahorro de energía y protección de la naturaleza de una forma sencilla y atractiva. “Nimbu” tiene sus raíces en la lengua chorotega y significa “agua”, reflejando la conexión del proyecto con la salud ambiental, la identidad cultural y la riqueza natural de Guanacaste.",
    stack: ["WordPress", "PHP", "Diseño responsivo", "UI/UX"],
    url: "https://nimbuazul.netlify.app",
    accent: "indigo",
  },
],

experience: [
  {
    role: "Desarrolladora Frontend — Freelance",
    org: "JeanSport",
    place: "Remoto",
    period: "Jul 2026 – Actualidad",
    bullets: [
      "Diseño y desarrollo de la plataforma web oficial de JeanSport.",
      "Desarrollo de las secciones de resultados, jornadas, tabla de posiciones, estadísticas, goleadores y noticias.",
      "Implementación de una experiencia responsive enfocada en facilitar el acceso desde dispositivos móviles y escritorio.",
      "Desarrollo de funcionalidades para consultar diferentes jornadas y visualizar información histórica de los partidos.",
      "Integración de contenido dinámico mediante APIs REST para mantener actualizada la información de la plataforma.",
      "Trabajo directamente con el cliente para definir requerimientos, priorizar funcionalidades y realizar mejoras continuas.",
    ],
  },

  {
    role: "Desarrolladora Web",
    org: "Universidad de Costa Rica",
    place: "Híbrido — Liberia, Guanacaste",
    period: "Jul 2023 – Mar 2024",
    bullets: [
      "Desarrollo y mantenimiento de un sitio web educativo institucional.",
      "Personalización de temas y configuración de plugins para mejorar funcionalidad, seguridad y rendimiento.",
      "Estructuración del contenido e implementación de interfaces responsivas siguiendo buenas prácticas de usabilidad.",
      "Colaboración con personal académico para levantar requerimientos y convertirlos en funcionalidades web.",
    ],
  },

  {
    role: "Frontend Developer — Pasantía",
    org: "Universidad de Costa Rica",
    place: "Híbrido — Liberia, Guanacaste",
    period: "Mar 2023 – Feb 2024",
    bullets: [
      "Desarrollo de interfaces responsivas para aplicaciones web.",
      "Integración de componentes frontend con APIs REST para visualización dinámica de datos.",
      "Optimización del rendimiento y mejora de la carga dinámica de información en páginas principales.",
      "Coordinación con desarrolladores backend para implementar y validar funcionalidades.",
    ],
  },

  {
    role: "Técnica de Soporte de TI",
    org: "Hospital de La Anexión",
    place: "Presencial — Nicoya, Guanacaste",
    period: "Sep 2017 – Dic 2017",
    bullets: [
      "Brindé soporte técnico en sitio para instalación, configuración, mantenimiento y resolución de problemas de equipos de cómputo.",
      "Gestioné el inventario de TI documentando el estado y ubicación de los equipos.",
      "Apoyé en el reemplazo y actualización de equipos, asegurando transiciones eficientes.",
      "Resolví incidentes técnicos internos y brindé soporte a las personas usuarias.",
    ],
  },
],

academicProjects: [
  {
    name: "Sistema de Gestión de Restaurante",
    period: "Jul 2022",
    bullets: [
      "Aplicación de gestión siguiendo una arquitectura MVC.",
      "Base de datos relacional con operaciones CRUD completas.",
      "Lógica de negocio para menús, órdenes, mesas e ingredientes.",
    ],
  },

  {
    name: "Sistema de Alquiler de Vehículos",
    period: "Mar 2020",
    bullets: [
      "Sistema de gestión de alquiler de vehículos con una base de datos relacional.",
      "Diagramas ER y procedimientos almacenados para operaciones de datos.",
      "Pruebas y administración de base de datos utilizando PostgreSQL y pgAdmin.",
    ],
  },
],

education: {
  degree: "Bachiller en Informática Empresarial (Sistemas de Información)",
  school: "Universidad de Costa Rica",
  place: "Liberia, Guanacaste",
  period: "Marzo 2018 – Octubre 2024",
},

},
};

export const ui = {
en: {
nav: {
links: [
{ href: "#projects", label: "Projects" },
{ href: "#experience", label: "Experience" },
{ href: "#skills", label: "Skills" },
{ href: "#contact", label: "Contact" },
],
menuLabel: "Open menu",
},

hero: {
  eyebrow: "Portfolio",
  titleLine1: "I build web experiences that",
  titleAccent: "turn data into products.",
  ctaPrimary: "View projects",
  ctaGhost: "Let's talk",
  terminalLabel: "Terminal showing Rebeca's profile",

  terminalLines: [
    {
      cmd: "whoami",
      out: "Rebeca Medina Gómez — Frontend Developer",
    },
    {
      cmd: "stack --list",
      out: "React · Vue.js 3 · JavaScript · C# · .NET",
    },
    {
      cmd: "project --current",
      out: "Fitness AI Planner — In Progress",
    },
  ],
},

projects: {
  eyebrow: "Work",
  heading: "Projects",
  previewHint: "View live site ↗",
  openInNewTab: (name) => `Open ${name} in a new tab`,
  previewLabel: (name) => `Live preview of ${name}`,
  link: "View site ↗",
  inProgress: "In development",
  completed: "Completed",
},

experience: {
  eyebrow: "Journey",
  heading: "Experience",
  academicHeading: "Academic Projects",
  educationEyebrow: "Education",
},

skills: {
  eyebrow: "Toolbox",
  heading: "Skills",
  hint: "Tap to flip",
  languagesTitle: "Languages",
  languagesIcon: "globe",
  certificationsTitle: "Certifications",
  certificationsIcon: "award",
},

contact: {
  eyebrow: "Contact",
  heading: "Shall we build something together?",
  text: "I'm currently available for frontend opportunities and freelance projects. Write to me and let's talk about your idea.",
},

},

es: {
nav: {
links: [
{ href: "#projects", label: "Proyectos" },
{ href: "#experience", label: "Experiencia" },
{ href: "#skills", label: "Skills" },
{ href: "#contact", label: "Contacto" },
],
menuLabel: "Abrir menú",
},

hero: {
  eyebrow: "Portafolio",
  titleLine1: "Construyo experiencias web que",
  titleAccent: "convierten datos en productos.",
  ctaPrimary: "Ver proyectos",
  ctaGhost: "Hablemos",
  terminalLabel: "Terminal mostrando el perfil de Rebeca",

  terminalLines: [
    {
      cmd: "whoami",
      out: "Rebeca Medina Gómez — Desarrolladora Frontend",
    },
    {
      cmd: "stack --list",
      out: "React · Vue.js 3 · JavaScript · C# · .NET",
    },
    {
      cmd: "project --current",
      out: "Fitness AI Planner — En desarrollo",
    },
  ],
},

projects: {
  eyebrow: "Trabajo",
  heading: "Proyectos",
  previewHint: "Ver sitio en vivo ↗",
  openInNewTab: (name) => `Abrir ${name} en una pestaña nueva`,
  previewLabel: (name) => `Vista previa de ${name}`,
  link: "Ver sitio ↗",
  inProgress: "En desarrollo",
  completed: "Finalizado",
},

experience: {
  eyebrow: "Trayectoria",
  heading: "Experiencia",
  academicHeading: "Proyectos académicos",
  educationEyebrow: "Educación",
},

skills: {
  eyebrow: "Herramientas",
  heading: "Skills",
  hint: "Toca para voltear",
  languagesTitle: "Idiomas",
  languagesIcon: "globe",
  certificationsTitle: "Certificaciones",
  certificationsIcon: "award",
},

contact: {
  eyebrow: "Contacto",
  heading: "¿Construimos algo juntos?",
  text: "Actualmente disponible para oportunidades frontend y proyectos freelance. Escríbeme y conversemos sobre tu idea.",
},

},
};