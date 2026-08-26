export const content = {
  en: {
    profile: {
      name: "Rebeca Medina Gómez",
      role: "Frontend Developer",
      location: "Costa Rica · Remote / Hybrid / On-Site",
      phone: "(506) 8639-9527",
      email: "rebemedi99@gmail.com",
      linkedin: "https://www.linkedin.com/in/rebemedina99/",
      github: "https://github.com/RebeMedina",
      summary:
        "Frontend Developer with experience building responsive, user-centered web applications and a solid background in IT technical support. I turn ideas into clean, accessible digital experiences, with a strong focus on usability, dynamic data, and continuous improvement.",
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
        period: "Aug 2026 – Present",
        description:
          "Full stack fitness planning application focused on generating personalized workout routines using user data such as age, height, weight, fitness level, goals, availability, and available equipment. The project combines React and Node.js with a structured recommendation system and AI-powered features to create adaptive and personalized training experiences.",
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
        period: "Jul 2026 – Present",
        description:
          "Sports web platform focused on Costa Rican football, created to centralize information from the Campeonato Nacional in a modern, clear, and responsive experience. The platform brings together match results, matchdays, standings, statistics, top scorers, news, and team information. The project continues to evolve through new features and improvements based on the client’s needs.",
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
        id: "nimbuazul",
        name: "Nimbuazul",
        tag: "Community project",
        current: false,
        live: false,
        period: "Previous project",
        description:
          "Children’s website created as part of a university community outreach project. The project provides a friendly, accessible, and easy-to-maintain digital space adapted to the needs of its audience and organization.",
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
          "Implemented a responsive experience focused on making sports information accessible across mobile and desktop devices.",
          "Developed functionality for browsing different matchdays and viewing historical match information.",
          "Integrated dynamic content through APIs to keep the information published on the platform up to date.",
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
        "Desarrolladora Frontend con experiencia construyendo aplicaciones web responsivas y centradas en la persona usuaria, además de una sólida base en soporte técnico de TI. Convierto ideas en experiencias digitales limpias, accesibles y funcionales, con especial atención a la usabilidad, los datos dinámicos y la mejora continua.",
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
        period: "Ago 2026 – Actualidad",
        description:
          "Aplicación full stack para la planificación personalizada de entrenamientos, utilizando datos como edad, altura, peso, nivel de experiencia, objetivos, disponibilidad y equipamiento. El proyecto combina React y Node.js con un sistema estructurado de recomendaciones y funcionalidades impulsadas por IA para crear experiencias de entrenamiento personalizadas y adaptables.",
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
        period: "Jul 2026 – Actualidad",
        description:
          "Plataforma web deportiva enfocada en el fútbol costarricense, creada para centralizar la información del Campeonato Nacional en una experiencia moderna, clara y responsive. La plataforma reúne resultados, jornadas, tabla de posiciones, estadísticas, goleadores, noticias e información de los equipos. El proyecto continúa evolucionando mediante nuevas funcionalidades y mejoras según las necesidades del cliente.",
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
        id: "nimbuazul",
        name: "Nimbuazul",
        tag: "Proyecto comunitario",
        current: false,
        live: false,
        period: "Proyecto anterior",
        description:
          "Sitio web infantil creado como parte de un proyecto de trabajo comunitario universitario. El proyecto ofrece un espacio digital amigable, accesible y fácil de mantener, adaptado a las necesidades de su público y de la organización.",
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
          "Implementación de una experiencia responsive enfocada en facilitar el acceso a la información deportiva desde dispositivos móviles y escritorio.",
          "Desarrollo de funcionalidades para consultar diferentes jornadas y visualizar información histórica de los partidos.",
          "Integración de contenido dinámico mediante APIs para mantener actualizada la información publicada en la plataforma.",
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
