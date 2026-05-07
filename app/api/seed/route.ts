import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { prisma } from "@/lib/db";
import { put } from "@vercel/blob";
import fs from "fs";
import path from "path";
import upworkPortfolioJson from "@/test.json";

type SeedProjectLocal = {
  title: string;
  description: string;
  tags: string[];
  imageFile: string;
  link: string;
  order: number;
};

type SeedProjectRemote = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  order: number;
};

type SeedProject = SeedProjectLocal | SeedProjectRemote;

type UpworkPortfolioRow = {
  title: string;
  description: string;
  skills_and_deliverables: string[];
  images: string[];
  upwork_portfolio_url: string;
  live_url?: string;
};

function upworkRowsToSeed(rows: UpworkPortfolioRow[]): SeedProjectRemote[] {
  return rows.map((row, idx) => {
    const link =
      row.live_url != null && row.live_url.trim().length > 0
        ? row.live_url.startsWith("http")
          ? row.live_url
          : `https://${row.live_url}`
        : row.upwork_portfolio_url;
    const imageUrl = row.images[0];
    if (!imageUrl) {
      throw new Error(`Upwork portfolio row "${row.title}" has no images`);
    }
    return {
      title: row.title,
      description: row.description,
      tags: row.skills_and_deliverables,
      imageUrl,
      link,
      order: idx + 1,
    };
  });
}

const legacyProjectsBase: Omit<SeedProjectLocal, "order">[] = [
  {
    title: "Stupid Monkeys",
    description:
      "A magnificent NFT Website. I developed this website for my Client. It's developed according to the design guidelines.",
    tags: ["NextJs", "ReactJs", "ThreeJs", "TypeScript", "Framer Motion", "IPFS", "Web3"],
    imageFile: "StupidMonkeys.png",
    link: "https://www.stupidmonkeys.io/",
  },
  {
    title: "Nike Clone",
    description:
      "The client wanted the clone of Original Nike Website. I have worked on the Front End Only in a team.",
    tags: ["NextJs", "ReactJs", "TypeScript", "TailwindCSS", "Shadcn/ui"],
    imageFile: "nike.png",
    link: "https://nike-adeelahmad.vercel.app/",
  },
  {
    title: "B-one Consulting",
    description:
      "This is a website built for my client on Fiverr. This website shows my strong grip on Front-End.",
    tags: ["NextJs", "Three.Js", "Framer Motion", "TailwindCSS", "TypeScript"],
    imageFile: "B-one.png",
    link: "https://b-one-consulting.vercel.app/",
  },
  {
    title: "Auto-one",
    description:
      "This is a website I built for my local client. He has a car dealership app and he wanted a showcase website according to the Figma Design.",
    tags: ["ReactJs", "Framer Motion", "TailwindCSS", "JavaScript"],
    imageFile: "AutoOne.png",
    link: "https://auto-one-dev.vercel.app/",
  },
  {
    title: "DBIT - Mining Platform",
    description:
      "This is a mining platform I have created for my Fiverr Client. I have done the Front-End Part Only.",
    tags: ["NextJs", "React", "TailwindCSS", "TypeScript"],
    imageFile: "DBIT - Mining Platform.png",
    link: "https://dbit-devadeelahmad.vercel.app/",
  },
  {
    title: "Empyreal Attire",
    description:
      "I am currently working on this project as a full-stack developer. It is an Online Leather Store. It also has an admin dashboard.",
    tags: ["NextJs", "React", "MongoDB", "TailwindCSS", "TypeScript", "AWS S3"],
    imageFile: "empyreal_attire.webp",
    link: "https://empyreal-attire.vercel.app/",
  },
  {
    title: "Mental HQ",
    description:
      "I developed this landing page for my client in just one day, according to the design.",
    tags: ["NextJs", "Typescript", "TailwindCSS", "Framer Motion"],
    imageFile: "mentalHq.png",
    link: "https://mental-hq.vercel.app/",
  },
  {
    title: "Linden Homes",
    description:
      "I developed this landing page for my client in just one day, according to the design.",
    tags: ["NextJs", "Typescript", "TailwindCSS", "Framer Motion"],
    imageFile: "linden1.png",
    link: "https://linden-homes.vercel.app/",
  },
  {
    title: "Renaissance Art",
    description:
      "This is an old project I did for my Fiverr client. It's like an one page blog.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageFile: "renaissance-art.webp",
    link: "https://devadeelahmad.github.io/RenaissanceArt/",
  },
  {
    title: "Hope Medical",
    description:
      "This is a website I created for my client on Fiverr and this is a paid template and I configured it according to my client's needs.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageFile: "hope-medical.webp",
    link: "https://devadeelahmad.github.io/HopeMedical/",
  },
  {
    title: "Max Vid",
    description:
      "This is an old project I did for my Fiverr client. It was a paid template and I had to configure it according to his needs.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageFile: "maxvid.webp",
    link: "https://devadeelahmad.github.io/MaxVid/",
  },
  {
    title: "3d-Et",
    description:
      "This is an old project I did for my Fiverr client. It was for his physical workshop where he did 3d Printing.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageFile: "3d-printing.webp",
    link: "https://devadeelahmad.github.io/3dPrinting/",
  },
];

const upworkProjectsSeed = upworkRowsToSeed(upworkPortfolioJson as UpworkPortfolioRow[]);

const legacyProjectsSeed: SeedProjectLocal[] = legacyProjectsBase.map((p, i) => ({
  ...p,
  order: upworkProjectsSeed.length + i + 1,
}));

const projectsData: SeedProject[] = [...upworkProjectsSeed, ...legacyProjectsSeed];

const skillsData = [
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
  "GO",
];

const experiencesData = [
  {
    title: "Software Engineer",
    location: "Greyfibre · Remote",
    description:
      "I am leading the frontend development at Greyfibre, working on a SaaS application. My role involves architecting and developing the frontend using Next.js and TypeScript, while closely collaborating with backend engineers working with Django and Python.",
    icon: "FaReact",
    date: "Oct 2024 - Present",
    order: 1,
  },
  {
    title: "Software Engineer",
    location: "CRAFTR · Netherlands · Remote",
    description:
      "As a Software Engineer at CRAFTR, I contributed to the development of cutting-edge AI SaaS applications. I leveraged my expertise in Next.js and TypeScript to build scalable and efficient software solutions.",
    icon: "CgWorkAlt",
    date: "Feb 2024 - Sep 2024",
    order: 2,
  },
  {
    title: "Full Stack Developer",
    location: "Upwork · Freelance · Remote",
    description:
      "I work as a Full Stack Developer at Upwork, specializing in AI SAAS Applications with NextJs, React Native, PostgreSQL, Unipile and other technologies as per requirements. My role involves collaborating with global clients to deliver high-quality solutions.",
    icon: "CgWorkAlt",
    date: "Dec 2023 - Present",
    order: 3,
  },
  {
    title: "Front-End Freelancer",
    location: "Fiverr · Remote",
    description:
      "I worked as a front-end developer for 6 months at Fiverr. But it was affecting my studies so I stopped after working for 6 months. Some of the projects from my Fiverr journey are at the last in the Projects Section.",
    icon: "CgWorkAlt",
    date: "2020 - 2021",
    order: 4,
  },
];

async function uploadImage(imageFile: string): Promise<string> {
  try {
    const imagePath = path.join(process.cwd(), "public", imageFile);
    if (!fs.existsSync(imagePath)) {
      console.log(`Image not found at ${imagePath}, using local path`);
      return `/${imageFile}`;
    }
    const imageBuffer = fs.readFileSync(imagePath);
    const mimeType = imageFile.endsWith(".webp")
      ? "image/webp"
      : imageFile.endsWith(".png")
        ? "image/png"
        : "image/jpeg";
    const bytes = new Uint8Array(imageBuffer);
    const file = new File([bytes], imageFile, { type: mimeType });
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return `/${imageFile}`;
    }
    const blob = await put(`portfolio/${imageFile}`, file, { access: "public" });
    console.log(`Uploaded ${imageFile} -> ${blob.url}`);
    return blob.url;
  } catch (error) {
    console.error(`Failed to upload ${imageFile}:`, error);
    return `/${imageFile}`;
  }
}

export async function POST(request: Request) {
  if (process.env.NODE_ENV === "production") {
    const secret = process.env.SEED_SECRET;
    if (!secret) {
      return NextResponse.json(
        { error: "Set SEED_SECRET in production to enable seeding, or seed locally." },
        { status: 403 }
      );
    }
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    await prisma.project.deleteMany();
    await prisma.skill.deleteMany();
    await prisma.experience.deleteMany();
    await prisma.about.deleteMany();
    await prisma.intro.deleteMany();

    const projectResults = [];
    for (const project of projectsData) {
      const imageUrl =
        "imageUrl" in project ? project.imageUrl : await uploadImage(project.imageFile);
      const created = await prisma.project.create({
        data: {
          title: project.title,
          description: project.description,
          tags: project.tags,
          imageUrl,
          link: project.link,
          order: project.order,
        },
      });
      projectResults.push(created);
    }

    for (let i = 0; i < skillsData.length; i++) {
      await prisma.skill.upsert({
        where: { name: skillsData[i] },
        update: { order: i + 1 },
        create: { name: skillsData[i], order: i + 1 },
      });
    }

    for (const exp of experiencesData) {
      await prisma.experience.create({ data: exp });
    }

    await prisma.about.create({
      data: {
        content: `I am a graduate with a degree in BS Software Engineering from COMSATS. I am currently working as a Frontend Team Lead at Greyfibre, while also freelancing on Upwork. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack is Next.js, TypeScript, TailwindCSS, and React Native. I am also familiar with Python, Django, and PostgreSQL. I am always looking to learn new technologies and expand my skillset.

When I'm not coding, I enjoy playing video games, and going out with friends and family. I also enjoy learning new things.`,
      },
    });

    const profileImageUrl = await uploadImage("profile-pic.jpeg");
    await prisma.intro.create({
      data: {
        name: "Adeel Ahmad",
        title: "Software Engineer",
        description:
          "Hello, I'm Adeel. I'm a Software Engineer with 3+ years of experience. I enjoy building sites & apps. My focus is Next.js, React Native and Gen AI.",
        upworkLink: "https://www.upwork.com/freelancers/~018ad37dbf86a6b06e",
        linkedinLink: "https://www.linkedin.com/in/devadeelahmad/",
        githubLink: "https://github.com/DevAdeelAhmad",
        profileImageUrl,
      },
    });

    revalidateTag("projects");
    revalidateTag("skills");
    revalidateTag("experiences");
    revalidateTag("about");
    revalidateTag("intro");

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully",
      counts: {
        projects: projectResults.length,
        skills: skillsData.length,
        experiences: experiencesData.length,
      },
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Failed to seed database", details: String(error) },
      { status: 500 }
    );
  }
}
