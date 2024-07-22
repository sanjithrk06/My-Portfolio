import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  threejs,
  mobile1,
  home,
  user,
  project,
  travel,
  event,
  email,
  res,
  aff,
  api,
  recipe
} from "../index";

export const navLinks = [
  {
    id: "",
    title: "Home",
    logo: home,
  },
  {
    id: "about",
    title: "About",
    logo: user,
  },
  {
    id: "projects",
    title: "Projects",
    logo: project,
  },
  {
    id: "contact",
    title: "Contact",
    logo: mobile1,
  },
];

const services = [
  {
    title: "RESTful API Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: web,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "EZLIL",
    description:
      "A RESTful API for the Ezlil e-commerce website manages core functionalities with inventory management.",
    tags: [
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "mongoose",
        color: "green-text-gradient",
      },
      {
        name: "ongoing",
        color: "blue-text-gradient",
      },
    ],
    image: api,
    source_code_link: "https://github.com/sanjithrk06/Ezlil-API",
  },
  {
    name: "V-Prayukti'24",
    description:
      "Website experiences the buzz of campus events firsthand! Explore schedules, venue details, and more, all in one accessible platform. ",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: event,
    source_code_link: "https://github.com/sanjithrk06/bit-vprayukti.git",
  },
  {
    name: "Smart Tourism",
    description:
      "Web application that enables users to search for tourist places, view nearby places & restaurants with distance and location based on their current location. And also provides tour packages.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/sanjithrk06/Smart_Tourism.git",
  },
  {
    name: "Recipe Maker",
    description:
      "A user-friendly web application with drag-and-drop functionality for cooking enthusiasts to create and download recipes.",
    tags: [
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "ongoing",
        color: "blue-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://github.com/sanjithrk06/Recipe-Maker.git",
  },
  // {
  //   name: "Auction Website",
  //   description:
  //   "Cutting-edge auction platform enabling users to seamlessly bid, purchase, fostering an engaging marketplace with transparency and efficiency as its hallmark.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "js",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: res,
  //   source_code_link: "https://github.com/sanjithrk06",
  // },
  {
    name: "Email Spam Detection",
    description:
      "Innovative web-based solution utilizing cutting-edge algorithms to detect and mitigate email spam, safeguarding inboxes and ensuring seamless communication experiences",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: email,
    source_code_link: "https://github.com/sanjithrk06/Email-Spam-Detection.git",
  },
  {
    name: "Restaurant Website",
    description:
    "Sophisticated online hub enabling diners to seamlessly explore, reserve, and oversee table bookings and pre-order meals, enhancing restaurant experiences with convenience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: res,
    source_code_link: "https://github.com/sanjithrk06",
  },
  {
    name: "Markater Portfolio",
    description:
      "Web platform empowering users to effortlessly discover, book, and manage car rentals from diverse providers, streamlining transportation solutions with ease and efficiency.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: aff,
    source_code_link: "https://github.com/sanjithrk06/Affliate-Marketing.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
