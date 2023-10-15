import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import stupidMonkeys from "@/public/StupidMonkeys.png";
import empyreal from "@/public/empyreal_attire.webp";
import dbit from "@/public/DBIT - Mining Platform.png";
import bOne from "@/public/B-one.png";
import printing from "@/public/3d-printing.webp";
import maxvid from "@/public/maxvid.webp";
import renaissance from "@/public/renaissance-art.webp";
import simplePortfolio from "@/public/simple-portfolio.png";
import hope from "@/public/hope-medical.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Freelancer",
    location: "Fiverr, Remote",
    description:
      "I worked as a front-end developer for 6 months at Fiverr. But it was effecting my studies so I stopped after working for 6 months. Some of the project from my Fiverr journey are in the Projects Section",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Lahore, Pk",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to remote opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
  {
    title: "Graduation",
    location: "Lahore, Pk",
    description:
      "I'll graduate in BS Software Engineering in 2024 from COMSATS, Lhr. Then I will work full-time.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "NFT Website",
    description:
      "Stupid Monkeys is a NFT Website. I have developed this website for my Client on Fiverr. The client provided a design and I developed this website according to it.",
    tags: [
      "Next.js 13.5",
      "ReactJs",
      "ThreeJs",
      "TailwindCSS",
      "TypeScript",
      "Framer Motion",
      "React Hooks",
      "IPFS Image Fetching",
    ],
    imageUrl: stupidMonkeys,
    link: "https://stupid-monkeys.vercel.app/",
  },
  {
    title: "DBIT - Mining Platform",
    description:
      "This is a mining platform I have created for my Fiverr Client. I have done the Front-End Part Only.",
    tags: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    imageUrl: dbit,
    link: "https://dbit-devadeelahmad.vercel.app/",
  },
  {
    title: "B-one Consulting",
    description:
      "This is a website built for my client on Fiverr. This website shows my strong grip on Front-End.(It's in progress)",
    tags: ["Next.js", "Three.Js", "Framer Motion", "TailwindCSS", "TypeScript"],
    imageUrl: bOne,
    link: "https://b-one-consulting.vercel.app/",
  },
  {
    title: "Empyreal Attire",
    description:
      "I am currently working on this project as a full-stack developer. It is an Online Leather Store. It also has an admin dashboard.",
    tags: [
      "Next.js",
      "React",
      "MongoDB",
      "TailwindCSS",
      "TypeScript",
      "AWS S3",
    ],
    imageUrl: empyreal,
    link: "https://empyreal-attire.vercel.app/",
  },
  {
    title: "Simple Portfolio",
    description:
      "This is a simple portfolio I have created for myself. It has GuestBook Page, Projects and Intro Page and also it showcases my skills.",
    tags: ["Next.js", "React", "Sanity.io", "Tailwind", "TypeScript"],
    imageUrl: simplePortfolio,
    link: "https://devadeelsimpleportfolio.vercel.app/",
  },
  {
    title: "Renaissance Art",
    description:
      "This is an old project I did for my Fiverr client. It's like an one page blog.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: renaissance,
    link: "https://devadeelahmad.github.io/RenaissanceArt/",
  },
  {
    title: "Hope Medical",
    description:
      "This is a website I created for my client on Fiverr and this is a paid template and I configured it according to my client's needs.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: hope,
    link: "https://devadeelahmad.github.io/HopeMedical/",
  },
  {
    title: "Max Vid",
    description:
      "This is an old project I did for my Fiverr client. It was a paid template and I had to configure it according to his needs.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: maxvid,
    link: "https://devadeelahmad.github.io/MaxVid/",
  },
  {
    title: "3d-Et",
    description:
      "This is an old project I did for my Fiverr client. It was for his physical workshop where he did 3d Printing.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: printing,
    link: "https://devadeelahmad.github.io/3dPrinting/",
  },
] as const;

export const skillsData = [
  "NextJs",
  "ReactJs",
  "NodeJs",
  "ExpressJs",
  "MongoDB",
  "Tailwind",
  "TypeScript",
  "Redux",
  "AWS S3",
  "PostgreSQL",
  "GraphQL",
  "Framer Motion",
  "Shad Cdn",
  "FlowBite",
  "Vercel",
  "Prisma",
  "Sanity.io",
  "Git",
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
] as const;
