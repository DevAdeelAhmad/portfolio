import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

const projectsData = [
  {
    title: "Stupid Monkeys",
    description: "A magnificent NFT Website. I developed this website for my Client. It's developed according to the design guidelines.",
    tags: ["NextJs", "ReactJs", "ThreeJs", "TypeScript", "Framer Motion", "IPFS", "Web3"],
    imageFile: "StupidMonkeys.png",
    link: "https://www.stupidmonkeys.io/",
  },
  {
    title: "Nike Clone",
    description: "The client wanted the clone of Original Nike Website. I have worked on the Front End Only in a team.",
    tags: ["NextJs", "ReactJs", "TypeScript", "TailwindCSS", "Shadcn/ui"],
    imageFile: "nike.png",
    link: "https://nike-adeelahmad.vercel.app/",
  },
  {
    title: "B-one Consulting",
    description: "This is a website built for my client on Fiverr. This website shows my strong grip on Front-End.",
    tags: ["NextJs", "Three.Js", "Framer Motion", "TailwindCSS", "TypeScript"],
    imageFile: "B-one.png",
    link: "https://b-one-consulting.vercel.app/",
  },
  {
    title: "Auto-one",
    description: "This is a website I built for my local client. He has a car dealership app and he wanted a showcase website according to the Figma Design.",
    tags: ["ReactJs", "Framer Motion", "TailwindCSS", "JavaScript"],
    imageFile: "AutoOne.png",
    link: "https://auto-one-dev.vercel.app/",
  },
  {
    title: "DBIT - Mining Platform",
    description: "This is a mining platform I have created for my Fiverr Client. I have done the Front-End Part Only.",
    tags: ["NextJs", "React", "TailwindCSS", "TypeScript"],
    imageFile: "DBIT - Mining Platform.png",
    link: "https://dbit-devadeelahmad.vercel.app/",
  },
  {
    title: "Empyreal Attire",
    description: "I am currently working on this project as a full-stack developer. It is an Online Leather Store. It also has an admin dashboard.",
    tags: ["NextJs", "React", "MongoDB", "TailwindCSS", "TypeScript", "AWS S3"],
    imageFile: "empyreal_attire.webp",
    link: "https://empyreal-attire.vercel.app/",
  },
  {
    title: "Mental HQ",
    description: "I developed this landing page for my client in just one day, according to the design.",
    tags: ["NextJs", "Typescript", "TailwindCSS", "Framer Motion"],
    imageFile: "mentalHq.png",
    link: "https://mental-hq.vercel.app/",
  },
  {
    title: "Linden Homes",
    description: "I developed this landing page for my client in just one day, according to the design.",
    tags: ["NextJs", "Typescript", "TailwindCSS", "Framer Motion"],
    imageFile: "linden1.png",
    link: "https://linden-homes.vercel.app/",
  },
  {
    title: "Renaissance Art",
    description: "This is an old project I did for my Fiverr client. It's like an one page blog.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageFile: "renaissance-art.webp",
    link: "https://devadeelahmad.github.io/RenaissanceArt/",
  },
  {
    title: "Hope Medical",
    description: "This is a website I created for my client on Fiverr and this is a paid template and I configured it according to my client's needs.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageFile: "hope-medical.webp",
    link: "https://devadeelahmad.github.io/HopeMedical/",
  },
  {
    title: "Max Vid",
    description: "This is an old project I did for my Fiverr client. It was a paid template and I had to configure it according to his needs.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageFile: "maxvid.webp",
    link: "https://devadeelahmad.github.io/MaxVid/",
  },
  {
    title: "3d-Et",
    description: "This is an old project I did for my Fiverr client. It was for his physical workshop where he did 3d Printing.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageFile: "3d-printing.webp",
    link: "https://devadeelahmad.github.io/3dPrinting/",
  },
];

const skillsData = [
  "NextJs", "ReactJs", "NodeJs", "ExpressJs", "TypeScript", "JavaScript", "Solidity",
  "Git", "MongoDB", "Redux", "Tailwind CSS", "Vercel", "AWS S3", "PostgreSQL",
  "GraphQL", "Framer Motion", "Shadcn/ui", "FlowBite", "Prisma", "Sanity.io",
  "Wordpress", "Elementor", "HTML", "CSS", "SCSS", "Bootstrap", "C", "C++",
  "C#", "Java", "GO"
];

const experiencesData = [
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

async function uploadImage(imageFile: string): Promise<string> {
  try {
    const imagePath = path.join(process.cwd(), 'public', imageFile);
    const imageBuffer = fs.readFileSync(imagePath);

    // Create a File object from the buffer
    const file = new File([imageBuffer], imageFile, {
      type: imageFile.endsWith('.webp') ? 'image/webp' :
            imageFile.endsWith('.png') ? 'image/png' :
            imageFile.endsWith('.jpg') || imageFile.endsWith('.jpeg') ? 'image/jpeg' : 'image/png'
    });

    const blob = await put(`portfolio-${Date.now()}-${imageFile}`, file, {
      access: 'public',
    });

    console.log(`✅ Uploaded ${imageFile} -> ${blob.url}`);
    return blob.url;
  } catch (error) {
    console.error(`❌ Failed to upload ${imageFile}:`, error);
    // Return the local path as fallback
    return `/${imageFile}`;
  }
}

export async function POST() {
  // Temporarily disabled until Prisma is working
  return NextResponse.json(
    { error: 'Database seeding is temporarily disabled' },
    { status: 503 }
  );
}

