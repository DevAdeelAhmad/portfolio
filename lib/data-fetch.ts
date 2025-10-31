import React from 'react';

// Type definitions
export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Experience {
  title: string;
  location: string;
  description: string;
  icon: string; // Will be converted to React element in component
  date: string;
}

export interface Intro {
  name: string;
  title: string;
  description: string;
  upworkLink: string;
  linkedinLink: string;
  githubLink: string;
  profileImageUrl: string;
}

// Temporary fallback data functions until Prisma is working
// TODO: Replace with actual database calls once Prisma is fixed

export const getProjects = async (): Promise<Project[]> => {
  // Fallback data - will be populated via admin panel later
  return [
    {
      title: "Stupid Monkeys",
      description: "A magnificent NFT Website. I developed this website for my Client. It's developed according to the design guidelines.",
      tags: ["NextJs", "ReactJs", "ThreeJs", "TypeScript", "Framer Motion", "IPFS", "Web3"],
      imageUrl: "/StupidMonkeys.png",
      link: "https://www.stupidmonkeys.io/",
    },
    {
      title: "Nike Clone",
      description: "The client wanted the clone of Original Nike Website. I have worked on the Front End Only in a team.",
      tags: ["NextJs", "ReactJs", "TypeScript", "TailwindCSS", "Shadcn/ui"],
      imageUrl: "/nike.png",
      link: "https://nike-adeelahmad.vercel.app/",
    },
    {
      title: "B-one Consulting",
      description: "This is a website built for my client on Fiverr. This website shows my strong grip on Front-End.",
      tags: ["NextJs", "Three.Js", "Framer Motion", "TailwindCSS", "TypeScript"],
      imageUrl: "/B-one.png",
      link: "https://b-one-consulting.vercel.app/",
    },
    {
      title: "Auto-one",
      description: "This is a website I built for my local client. He has a car dealership app and he wanted a showcase website according to the Figma Design.",
      tags: ["ReactJs", "Framer Motion", "TailwindCSS", "JavaScript"],
      imageUrl: "/AutoOne.png",
      link: "https://auto-one-dev.vercel.app/",
    },
    {
      title: "DBIT - Mining Platform",
      description: "This is a mining platform I have created for my Fiverr Client. I have done the Front-End Part Only.",
      tags: ["NextJs", "React", "TailwindCSS", "TypeScript"],
      imageUrl: "/DBIT - Mining Platform.png",
      link: "https://dbit-devadeelahmad.vercel.app/",
    },
  ];
};

export const getSkills = async (): Promise<string[]> => {
  // Fallback data - will be populated via admin panel later
  return [
    "NextJs", "ReactJs", "NodeJs", "ExpressJs", "TypeScript", "JavaScript", "Solidity",
    "Git", "MongoDB", "Redux", "Tailwind CSS", "Vercel", "AWS S3", "PostgreSQL",
    "GraphQL", "Framer Motion", "Shadcn/ui", "FlowBite", "Prisma", "Sanity.io",
    "Wordpress", "Elementor", "HTML", "CSS", "SCSS", "Bootstrap", "C", "C++",
    "C#", "Java", "GO"
  ];
};

export const getExperiences = async (): Promise<Experience[]> => {
  // Fallback data - will be populated via admin panel later
  return [
    {
      title: "Software Engineer",
      location: "Greyfibre · Remote",
      description: "I am leading the frontend development at Greyfibre, working on a SaaS application. My role involves architecting and developing the frontend using Next.js and TypeScript, while closely collaborating with backend engineers working with Django and Python.",
      icon: "FaReact",
      date: "Oct 2024 - Present",
    },
    {
      title: "Software Engineer",
      location: "CRAFTR · Netherlands · Remote",
      description: "As a Software Engineer at CRAFTR, I contributed to the development of cutting-edge AI SaaS applications. I leveraged my expertise in Next.js and TypeScript to build scalable and efficient software solutions.",
      icon: "CgWorkAlt",
      date: "Feb 2024 - Sep 2024",
    },
    {
      title: "Full Stack Developer",
      location: "Upwork · Freelance · Remote",
      description: "I work as a Full Stack Developer at Upwork, specializing in AI SAAS Applications with NextJs, React Native, PostgreSQL, Unipile and other technologies as per requirements. My role involves collaborating with global clients to deliver high-quality solutions.",
      icon: "CgWorkAlt",
      date: "Dec 2023 - Present",
    },
    {
      title: "Front-End Freelancer",
      location: "Fiverr · Remote",
      description: "I worked as a front-end developer for 6 months at Fiverr. But it was affecting my studies so I stopped after working for 6 months. Some of the projects from my Fiverr journey are at the last in the Projects Section.",
      icon: "CgWorkAlt",
      date: "2020 - 2021",
    },
  ];
};

export const getAbout = async (): Promise<string> => {
  // Return default about content
  return `I am a graduate with a degree in BS Software Engineering from COMSATS. I am currently working as a Frontend Team Lead at Greyfibre, while also freelancing on Upwork. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack is Next.js, TypeScript, TailwindCSS, and React Native. I am also familiar with Python, Django, and PostgreSQL. I am always looking to learn new technologies and expand my skillset.

When I'm not coding, I enjoy playing video games, and going out with friends and family. I also enjoy learning new things.`;
};

export const getIntro = async (): Promise<Intro> => {
  return {
    name: 'Adeel Ahmad',
    title: 'Software Engineer',
    description: "Hello, I'm Adeel. I'm a Software Engineer with 3+ years of experience. I enjoy building sites & apps. My focus is Next.js, React Native and Gen AI.",
    upworkLink: 'https://www.upwork.com/freelancers/~018ad37dbf86a6b06e',
    linkedinLink: 'https://www.linkedin.com/in/devadeelahmad/',
    githubLink: 'https://github.com/DevAdeelAhmad',
    profileImageUrl: '/profile-pic.jpeg',
  };
};
