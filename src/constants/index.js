import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "À propos",
    },
    {
      id: "work",
      title: "Mes projets",
    },
    {
      id: "contact",
      title: "Me contacter",
    },
  ];
  
  const services = [
    {
      title: "Développeur web",
      icon: web,
    },
    {
      title: "Développeur React",
      icon: mobile,
    },
    {
      title: "Développeur frontend",
      icon: backend,
    },
    {
      title: "Étudiant",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];
  
  const experiences = [
    {
      title: "Étudiant à IPI école d'informatique",
      company_name: "Étudiant en développement",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Depuis 2023",
      points: [
        "j'ai pu développer des compétences solides en informatique,",
        "notamment en HTML, CSS, JavaScript, GitBash, et GitHub, MySql, Python.",
        "Ces technologies m'ont permis de renforcer mes capacités de développement frontend et des bases en backend.",
      ],
    },
    {
      title: "Lycée Saint Exupery Blagnac",
      company_name: "Obtention Baccalauréat",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2020 - 2023",
      points: [
        "Obtention du baccalauréat STI2D option SIN (système informatique et numérique) mention assez bien.",
        "J'ai pu découvrir le monde de l'informatique",
      ],
    },
    {
      title: "Collège Henri Guillaumet Blagnac",
      company_name: "Brevet des collèges",
      icon: shopify,
      iconBg: "#383E56",
      date: "2017 - 2020",
      points: [
        "Obtention du brevet des collèges mention bien au collège Henri Guillaumet Blagnac",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ma page web",
      description:
        "Ma page web, un défi que je me suis lancé, il s'agit de mon CV sous forme de site web codé avec HTML CSS et JavaScript",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://theoc0702.github.io/chellyCV",
    },
    {
      name: "Voiture",
      description:
        "Une page web pour tester des compétences apprises en CSS et HTML",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://theoc0703.github.io/BibiCar",
    },
    {
      name: "Tirage",
      description:
        "J'avais pour objectif de créer un site web permettant à un professeur de tirer au sort un élève de la classe. On m'a donné des contraintes et des exigences que je devais respecter.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://theoc0703.github.io/Tirage",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };