import printing from "@/public/3d-printing.webp";
import bOne from "@/public/B-one.png";
import dbit from "@/public/DBIT - Mining Platform.png";
import stupidMonkeys from "@/public/StupidMonkeys.png";
import empyreal from "@/public/empyreal_attire.webp";
import hope from "@/public/hope-medical.webp";
import linden from "@/public/linden1.png";
import maxvid from "@/public/maxvid.webp";
import mentalHq from "@/public/mentalHq.png";
import nike from "@/public/nike.png";
import autoOne from "@/public/AutoOne.png";
import renaissance from "@/public/renaissance-art.webp";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Software Engineer",
    location: "Greyfibre · Remote",
    description:
      "I am leading the frontend development at Greyfibre, working on a SaaS application. My role involves architecting and developing the frontend using Next.js and TypeScript, while closely collaborating with backend engineers working with Django and Python.",
    icon: React.createElement(FaReact),
    date: "Oct 2024 - Present",
  },
  {
    title: "Software Engineer",
    location: "CRAFTR · Netherlands · Remote",
    description:
      "As a Software Engineer at CRAFTR, I contributed to the development of cutting-edge AI SaaS applications. I leveraged my expertise in Next.js and TypeScript to build scalable and efficient software solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Sep 2024",
  },
  {
    title: "Full Stack Developer",
    location: "Upwork · Freelance · Remote",
    description:
      "I work as a Full Stack Developer at Upwork, specializing in AI SAAS Applications with NextJs, React Native, PostgreSQL, Unipile and other technologies as per requirements. My role involves collaborating with global clients to deliver high-quality solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Present",
  },
  {
    title: "Front-End Freelancer",
    location: "Fiverr · Remote",
    description:
      "I worked as a front-end developer for 6 months at Fiverr. But it was affecting my studies so I stopped after working for 6 months. Some of the projects from my Fiverr journey are at the last in the Projects Section.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  }
] as const;

export const projectsData = [
  {
    title: "Stupid Monkeys",
    description:
      "A magnificent NFT Website. I developed this website for my Client. It's developed according to the design guidelines.",
    tags: [
      "NextJs",
      "ReactJs",
      "ThreeJs",
      "TypeScript",
      "Framer Motion",
      "IPFS",
      "Web3",
    ],
    imageUrl: stupidMonkeys,
    link: "https://stupid-monkeys.vercel.app/",
  },
  {
    title: "Nike Clone",
    description:
      "The client wanted the clone of Original Nike Website. I have worked on the Front End Only in a team.",
    tags: ["NextJs", "ReactJs", "TypeScript", "TailwindCSS", "Shadcn/ui"],
    imageUrl: nike,
    link: "https://nike-adeelahmad.vercel.app/",
  },
  {
    title: "B-one Consulting",
    description:
      "This is a website built for my client on Fiverr. This website shows my strong grip on Front-End.",
    tags: ["NextJs", "Three.Js", "Framer Motion", "TailwindCSS", "TypeScript"],
    imageUrl: bOne,
    link: "https://b-one-consulting.vercel.app/",
  },
  {
    title: "Auto-one",
    description:
      "This is a website I built for my local client. He has a car dealership app and he wanted a showcase website according to the Figma Design. ",
    tags: ["ReactJs", "Framer Motion", "TailwindCSS", "JavaScript"],
    imageUrl: autoOne,
    link: "https://auto-one-dev.vercel.app/",
  },
  {
    title: "DBIT - Mining Platform",
    description:
      "This is a mining platform I have created for my Fiverr Client. I have done the Front-End Part Only.",
    tags: ["NextJs", "React", "TailwindCSS", "TypeScript"],
    imageUrl: dbit,
    link: "https://dbit-devadeelahmad.vercel.app/",
  },
  {
    title: "Empyreal Attire",
    description:
      "I am currently working on this project as a full-stack developer. It is an Online Leather Store. It also has an admin dashboard.",
    tags: ["NextJs", "React", "MongoDB", "TailwindCSS", "TypeScript", "AWS S3"],
    imageUrl: empyreal,
    link: "https://empyreal-attire.vercel.app/",
  },
  {
    title: "Mental HQ",
    description:
      "I developed this landing page for my client in just one day, according to the design.",
    tags: ["NextJs", "Typescript", "TailwindCSS", "Framer Motion"],
    imageUrl: mentalHq,
    link: "https://mental-hq.vercel.app/",
  },
  {
    title: "Linden Homes",
    description:
      "I developed this landing page for my client in just one day, according to the design.",
    tags: ["NextJs", "Typescript", "TailwindCSS", "Framer Motion"],
    imageUrl: linden,
    link: "https://linden-homes.vercel.app/",
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
  "TypeScript",
  "JavaScript",
  "Solidity",
  "Git",
  "MongoDB",
  "Redux",
  "Tailwind CSS",
  "Vercel",
  "AWS S3",
  "PostgreSQL",
  "GraphQL",
  "Framer Motion",
  "Shadcn/ui",
  "FlowBite",
  "Prisma",
  "Sanity.io",
  "Wordpress",
  "Elementor",
  "HTML",
  "CSS",
  "SCSS",
  "Bootstrap",
  "C",
  "C++",
  "C#",
  "Java",
  "GO"
] as const;
