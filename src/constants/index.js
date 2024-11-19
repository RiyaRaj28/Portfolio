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
  stencil,
  gharmandir,
  studiorav,
  stree,
  ugportal,
  konnect,
  redis,
  cronjob,
  bullmq,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Freelancer",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "redis",
    icon: redis,
  },
  {
    name: "cronjob",
    icon: cronjob,
  },
  {
    name: "bullmq",
    icon: bullmq,
  }

];

const experiences = [
  {
    title: "Backend Contributor",
    company_name: "Stencil",
    icon: stencil,
    iconBg: "#383E56",
    date: "May 2024 - June 2024",
    points: [
      "Collaborating with cross-functional teams to create high-quality contributions.",
      "Among the top 3 contributors at the Stencil Repository of SamagraX. Worked with NestJS, Typescript and various DevOps tools",
      "Have over 5+ successfully merged PRs, also participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Backend Developer",
    company_name: "Ghar Mandir",
    icon: gharmandir,
    iconBg: "#383E56",
    date: "Jun 2024 - Jul 2024",
    points: [
      "Testing out web applications and collaborating with a team of web developers, designers and other testers.",
      "Fixing bugs and communicating about the same with the client and developers.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Studio Rav",
    icon: studiorav,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
      "Developing and maintaining website using Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality outputs.",
      "Delivering high-quality work on time."
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
    name: "Stree",
    description:
      "Hackathon winning proect! A platform for women to report crimes, access tech resources and connect with community. Secure, anonymous crime reporting feature on map which can be viewed by anyone on a different map.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react-leaflet",
        color: "pink-text-gradient",
      },
    ],
    image: stree,
    source_code_link: "https://github.com/RiyaRaj28/Stree",
  },
  {
    name: "Konnect",
    description:
      "A logistics platform designed for connecting clients to vehicle drivers using a microservices architecture, focusing on modular, scalable, and efficient systems for real-time tracking, booking, and driver management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: konnect,
    source_code_link: "https://github.com/RiyaRaj28/Konnect",
  },
  {
    name: "UGOnlinePortal",
    description:
      "An innovative UG Online Portal designed for undergraduates, enabling professors to effortlessly upload marks and update the attendance system. Currently in its development phase, the portal aims to streamline academic management.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "cronjob",
        color: "orange-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "bullmq",
        color: "green-text-gradient",
      },
    ],
    image: ugportal,
    source_code_link: "https://github.com/RiyaRaj28/UGOnlinePortal",
  },
];

export { services, technologies, experiences, testimonials, projects };
