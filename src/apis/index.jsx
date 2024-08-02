

import nav_logo from "../assets/image/band-logos.png";
import color_image from "../assets/image/latest-bw2.jpg";
import black_image from "../assets/image/latest-color.jpg";
import pcl from "../assets/pcl.jpg";
import next from "../assets/next.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import innovate from "../assets/innovate.jpg";
import gymnasium from "../assets/gymnasium.jpg";
import apppon from "../assets/apppon.jpg";
import grow from "../assets/grow.jpg";
import social from "../assets/social.jpg";
import messenger from "../assets/messenger.jpg";


import { emptyStar, fullStar, hulfStar } from "./Icon";

//hearder

export const navbar = {
  nav_logo: nav_logo,
  links: [
    {
      id: 1,
      name: "home",
      path: "/",
      my: 0,
    },
    {
      id: 2,
      name: "about",
      path: "/about",
      my: 3,
    },
    {
      id: 3,
      name: "education",
      path: "/education",
      my: 0,
    },
    {
      id: 4,
      name: "showcase",
      path: "/showcase",
      my: 3,
    },
    // {
    //   id: 5,
    //   name: "client reviews",
    //   path: "/reviews",
    //   my: 0,
    // },

    {
      id: 6,
      name: "contact me",
      path: "/contact",
      my: 3,
    },
  ],
};

//hero section
export const hero = {
  first: "Hi, My Name is",
  second: "Umme Taieba Mitasha.",
  third: "I build website for client.",
  fouth:
    "I'm a full-stack web developer who specializes in building web things. I'm focused on building UI design and development together. I make 100% error-free website for client satisfaction which make me awesome.",
  color_image,
};

//about section
export const about = {
  color_image,
  black_image,
  about_info: {
    paragraph: [
      {
        id: 1,
        para: "Hello! My name is Umme Taieba Mitasha. I'm a full-stack web developer who loves to create amazing user experiences. I specialize in using the latest technologies like JavaScript, React.js, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase to build robust and scalable web applications from scratch.",
      },
      {
        id: 2,
        para: "I am fresher in work environment as a Software Enginneer.But I have a lot of experience building web applications. I use React.js and Next.js to create responsive and dynamic user interfaces that are easy to use. I also use Tailwind CSS to make your website look beautiful and professional.",
      },
      {
        id: 3,
        para: "On the server-side, I use Node.js and Express.js to create fast and reliable applications. And when it comes to data storage, I use MongoDB and Firebase to keep everything organized and efficient.",
      },
      {
        id: 4,
        para: `I keep up with the latest trends and technologies in web development so that I can build the best websites possible. I always try to make sure that my work exceeds client expectations, and I want to make sure that you have an amazing experience working with me.
        So, if you need a web developer who can help you create an amazing website, let's talk!`,
      },
    ],
    technologies1: [
      "JavaScript",
      "node js",
      "firebase",
      "mongo db",
      "tailwind css",
    ],
    technologies2: [
      "React js",
      "Next js",
      "express js",
      "redux toolkit",
      "bootstrap 5",
    ],
    choose1: [
      "freshers",
      "clean code",
      "100% error free",
      "requirement analysis",
      "100% working dedication",
    ],
    choose2: [
      "readable code",
      "hand code",

      "unlimited revision",
      "before live preview",
      "client satisfaction",
    ],
  },
};

// services section card list
export const education = [
  {
    id: 1,
    educationHead: "B.TECH(Bechlor of Technology)",
    desc: "I completed my b.tech degree in Software Engineering from Jain University, Bangalore.The course started from 2020 and finished in 2024. CGPA is 9.3 out of 10. Percenatge of marks 90%", 
  },
  {
    id: 2,
    educationHead: "S.S.C(Secondary School Certificate)",
    desc: "I completed my ssc with Science from CGGHS Chittagong Government Girl's High School And College , Nasirabad.My batch was 2017. CGPA is 5.00 out of 5.00. Percenatge of marks 88%", 
  },
  {
    id: 3,
    educationHead: "H.S.C(Higher School Certificate)",
    desc: "I completed my hsc with Science from BMS Bangladesh Mohila Somity Girl's High School And College.My batch was 2019. CGPA is 4.17 out of 5.00. Percenatge of marks 80%", 
  },
  // {
  //   id: 2,
  //   cardHead: "Design with bootstrap",
  //   desc: "Bootstrap is a widely used open-source front-end framework that provides a set of pre-designed HTML, CSS, and JavaScript components for building responsive and mobile-first websites and applications.",
  //   tools: ["JavaScript", "CSS-3", "Bootstrap-5"],
  // },
  // {
  //   id: 3,
  //   cardHead: "Design with tailwind",
  //   desc: "Tailwind CSS is a popular utility-first CSS framework that provides a wide range of pre-designed classes for building modern and responsive user interfaces. It allows developers to rapidly style their applications without custom CSS.",
  //   tools: ["HTML-5", "Tailwind CSS", "JavaScript"],
  // },
  // {
  //   id: 4,
  //   cardHead: "Frontend with react.js",
  //   desc: "React.js is an open-source JavaScript library for building user interfaces.it used by developers to create dynamic and responsive web applications. React.js uses a component-based architecture for reusable pieces of code.",
  //   tools: ["React.Js", "Tailwind CSS", "Vite.Js"],
  // },

  // {
  //   id: 5,
  //   cardHead: "Build with next.js",
  //   desc: "Next.js is a popular open-source framework for building server-side rendered React applications. It provides a set of tools and features for building static,server-side rendering and dynamic web pages with optimized performance.",
  //   tools: ["Next.Js", "Tailwind CSS", "Firebase"],
  // },
  // {
  //   id: 6,
  //   cardHead: "Build with firebase",
  //   desc: "Firebase is a mobile and web application development platform that provides a suite of backend services, including real-time database, cloud storage, authentication, hosting for quickly build app.",
  //   tools: ["React.Js", "Tailwind CSS", "Firebase"],
  // },
  // {
  //   id: 7,
  //   cardHead: "Build with express.js",
  //   desc: "Express.js is a minimalist web framework for Node.js that simplifies the process of building web applications and APIs. It provides a set of robust features for creating HTTP servers and routing requests with middleware architecture.",
  //   tools: ["HTML-5", "Express.Js", "MongoDB"],
  // },
  // {
  //   id: 8,
  //   cardHead: "build with mongo db",
  //   desc: "MongoDB is a popular NoSQL database that uses a document-based model to store data in a flexible and scalable way. It is designed to handle large amounts of unstructured data and is often used in modern web applications.",
  //   tools: ["React.js", "Express.JS", "MongoDB"],
  // },
];

//potfolio section
export const potfolio = [
  {
    id: 1,
    name: "social app",
    image: social,
    technology: [
      "node js",
      "react js",
      "tailwind css",
      "mongodb"
    ],
    github: "#",
    deploy_url: "https://github.com/mita-sha20/social-media/",
  },
  {
    id: 2,
    name: "messenger app",
    image: messenger,
    technology: [
      "javascript (ES6+)",
      "react js",
      "css",
      "firebase"
    ],
    github: "#",
    deploy_url: "https://leafy-torrone-06187a.netlify.app/",
  },
  {
    id: 3,
    name: "pcl project",
    image: pcl,
    technology: [
      "javascript (ES6+)",
      "react js",
      "css",
      "firebase"
    ],
    github: "#",
    deploy_url: "https://radiant-macaron-96d8d9.netlify.app/",
  },
  {
    id: 4,
    name: "next project",
    image: next,
    technology: [
      "next js",
      "css",
    ],
    github: "#",
    deploy_url: "https://portfolio-yy76-gr7p10p79-mita-sha20.vercel.app/",
  },
  {
    id: 5,
    name: "ecommerce project",
    image: ecommerce,
    technology: [
      "react js",
      "css",
      "node js",
      "next js",
      "mongodb"
    ],
    github: "#",
    deploy_url: "https://classy-smakager-d3ed36.netlify.app/",
  },
  {
    id: 6,
    name: "innovate project",
    image: innovate,
    technology: [
      "javascript (ES6+)",
      "html 5",
      "css",
      "bootstrape"
    ],
    github: "#",
    deploy_url: "https://mita-sha20.github.io/First-project/",
  },
  {
    id: 7,
    name: "gymnasium project",
    image: gymnasium,
    technology: [
      "javascript (ES6+)",
      "html 5",
      "css",
      "bootstrape"
    ],
    github: "#",
    deploy_url: "https://mita-sha20.github.io/gymnasium/",
  },
  {
    id: 8,
    name: "appon project",
    image: apppon,
    technology: [
      "javascript (ES6+)",
      "react js",
      "css",
    ],
    github: "#",
    deploy_url: "https://mita-sha20.github.io/Photoshop-project/",
  },
  {
    id: 9,
    name: "grow project",
    image: grow,
    technology: [
      "javascript (ES6+)",
      "react js",
      "css",
    ],
    github: "#",
    deploy_url: "https://mita-sha20.github.io/new-project/",
  },
  // {
  //   id: 2,
  //   name: "potfolio",
  //   image: personal,
  //   technology: ["javascript (ES6+)", "react js", "tailwind css", "type js"],
  //   github: "#",
  //   deploy_url: "https://shipons.netlify.app/",
  // },
  // {
  //   id: 4,
  //   name: "burger lover",
  //   image:burger ,
  //   technology: ["javascript (ES6+)", "react js", "tailwind css", "figma"],
  //   github: "#",
  //   deploy_url: "http://burgerlover.onrender.com/",
  // },
  // {
  //   id: 4,
  //   name: "prayer time for mosque",
  //   image: prayertimeMosque,
  //   technology: ["javascript (ES6+)", "react js","firebase","css","tailwind css", "figma"],
  //   github: "#",
  //   deploy_url: "https://usaprayertime.vercel.app",
  // },
  
  // {
  //   id: 5,
  //   name: "usa mosque",
  //   image: usamosque,
  //   technology: ["javascript (ES6+)","next js","react js","css","tailwind css", "figma"],
  //   github: "#",
  //   deploy_url: "https://usamosque.vercel.app/",
  // },
  // {
  //   id: 6,
  //   name: "usa rental apt",
  //   image: rental,
  //   technology: ["javascript (ES6+)","next js", "react js", "tailwind css","node js","mongodb", "figma"],
  //   github: "#",
  //   deploy_url: "http://burgerlover.onrender.com/",
  // },
  // {
  //   id: 7,
  //   name: "friends club social media",
  //   image: friendsclub,
  //   technology: ["javascript (ES6+)", "react js","firebase","framer-motion","tailwind css", "figma"],
  //   github: "#",
  //   deploy_url: "https://friendsclub.onrender.com/",
  // },
  // {
  //   id: 8,
  //   name: "jumping game",
  //   image: games,
  //   technology: ["html 5", "css 3", "javascript (ES6+)"],
  //   github: "#",
  //   deploy_url: "https://shipon-islam.github.io/jgames/",
  // },
];

//client reviews section
export const client_reviews = [
  // {
  //   id: 1,
  //   name: "john doe",
  //   avatar: four,
  //   desc: "It has been a pleasure working with shipon islam. I appreciate your dedication to the projects that you and your team are on. It is nice from the customers stand point to be able to get in touch with you. You did a great.",
  //   starIconPath: [fullStar, fullStar, fullStar, fullStar, fullStar],
  // },

  // {
  //   id: 2,
  //   name: "ben don",
  //   avatar: one,
  //   desc: "Thank you so much for the work!I think our website is performing extremely well and our calls and emails are flooding in.I i have referred a few others to you guys that have needed ui design.Keep up the good work!",
  //   starIconPath: [fullStar, fullStar, fullStar, hulfStar, emptyStar],
  // },
  // {
  //   id: 3,
  //   name: "john head",
  //   avatar: two,
  //   desc: "shipon has done a great job designing our new site here at Aeon Systems Inc. and we are impressed overall with the fontend services. After approximately 6 months we are really starting to see some results on google.thanks shipon!",
  //   starIconPath: [fullStar, fullStar, fullStar, fullStar, hulfStar],
  // },
  // {
  //   id: 4,
  //   name: "dr david ",
  //   avatar: three,
  //   desc: "shipon has done a great job designing our new site here at Aeon Systems Inc. and we are impressed overall with the fontend services. After approximately 6 months we are really starting to see some results on google.thanks shipon!",
  //   starIconPath: [fullStar, fullStar, fullStar, fullStar, emptyStar],
  // },
  // {
  //   id: 5,
  //   name: "joe lerry",
  //   avatar: six,
  //   desc: "Thank you so much for the work!I think our website is performing extremely well and our calls and emails are flooding in.I i have referred a few others to you guys that have needed ui design.Keep up the good work!",
  //   starIconPath: [fullStar, fullStar, fullStar, fullStar, hulfStar],
  // },
  // {
  //   id: 6,
  //   name: "osman sheikh",
  //   avatar: five,
  //   desc: "It has been a pleasure working with shipon islam. I appreciate your dedication to the projects that you and your team are on. It is nice from the customers stand point to be able to get in touch with you. You did a great.",
  //   starIconPath: [fullStar, fullStar, fullStar, fullStar, fullStar],
  // },
];
