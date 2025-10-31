
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

// Database data fetching functions with caching and fallback
import { prisma } from './db';

// Helper function to conditionally use unstable_cache
async function withCache<T>(
  fn: () => Promise<T>,
  key: string[],
  options: { revalidate: number; tags: string[] }
): Promise<T> {
  // During build/static generation, skip caching
  if (typeof window === 'undefined' && !process.env.NEXT_RUNTIME) {
    return fn();
  }

  try {
    const { unstable_cache } = await import('next/cache');
    return unstable_cache(fn, key, options)();
  } catch {
    // If unstable_cache is not available, just call the function
    return fn();
  }
}

// Fallback data for when database is not available
const fallbackProjects: Project[] = [
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

const fallbackSkills: string[] = [
  "NextJs", "ReactJs", "NodeJs", "ExpressJs", "TypeScript", "JavaScript", "Solidity",
  "Git", "MongoDB", "Redux", "Tailwind CSS", "Vercel", "AWS S3", "PostgreSQL",
  "GraphQL", "Framer Motion", "Shadcn/ui", "FlowBite", "Prisma", "Sanity.io",
  "Wordpress", "Elementor", "HTML", "CSS", "SCSS", "Bootstrap", "C", "C++",
  "C#", "Java", "GO"
];

const fallbackExperiences: Experience[] = [
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

const fallbackAbout: string = `I am a graduate with a degree in BS Software Engineering from COMSATS. I am currently working as a Frontend Team Lead at Greyfibre, while also freelancing on Upwork. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack is Next.js, TypeScript, TailwindCSS, and React Native. I am also familiar with Python, Django, and PostgreSQL. I am always looking to learn new technologies and expand my skillset.

When I'm not coding, I enjoy playing video games, and going out with friends and family. I also enjoy learning new things.`;

const fallbackIntro: Intro = {
  name: 'Adeel Ahmad',
  title: 'Software Engineer',
  description: "Hello, I'm Adeel. I'm a Software Engineer with 3+ years of experience. I enjoy building sites & apps. My focus is Next.js, React Native and Gen AI.",
  upworkLink: 'https://www.upwork.com/freelancers/~018ad37dbf86a6b06e',
  linkedinLink: 'https://www.linkedin.com/in/devadeelahmad/',
  githubLink: 'https://github.com/DevAdeelAhmad',
  profileImageUrl: '/profile-pic.jpeg',
};

export const getProjects = async (): Promise<Project[]> => {
  return withCache(
    async (): Promise<Project[]> => {
      try {
        // Try to fetch from database first
        if (prisma && typeof prisma.project?.findMany === 'function') {
          const projects = await prisma.project.findMany({
            orderBy: { order: 'asc' },
            select: {
              title: true,
              description: true,
              tags: true,
              imageUrl: true,
              link: true,
            },
          });
          // Only return database results if we got actual data
          if (projects && projects.length > 0) {
            return projects;
          }
        }
      } catch (error) {
        console.log('Database not available, using fallback data for projects');
      }
      // Return fallback data if database is not available or empty
      return fallbackProjects;
    },
    ['projects'],
    { revalidate: 3600, tags: ['projects'] }
  );
};

export const getSkills = async (): Promise<string[]> => {
  return withCache(
    async (): Promise<string[]> => {
      try {
        // Try to fetch from database first
        if (prisma && typeof prisma.skill?.findMany === 'function') {
          const skills = await prisma.skill.findMany({
            orderBy: { order: 'asc' },
            select: {
              name: true,
            },
          });
          // Only return database results if we got actual data
          if (skills && skills.length > 0) {
            return skills.map((skill: { name: string }) => skill.name);
          }
        }
      } catch (error) {
        console.log('Database not available, using fallback data for skills');
      }
      // Return fallback data if database is not available or empty
      return fallbackSkills;
    },
    ['skills'],
    { revalidate: 3600, tags: ['skills'] }
  );
};

export const getExperiences = async (): Promise<Experience[]> => {
  return withCache(
    async (): Promise<Experience[]> => {
      try {
        // Try to fetch from database first
        if (prisma && typeof prisma.experience?.findMany === 'function') {
          const experiences = await prisma.experience.findMany({
            orderBy: { order: 'asc' },
            select: {
              title: true,
              location: true,
              description: true,
              icon: true,
              date: true,
            },
          });
          // Only return database results if we got actual data
          if (experiences && experiences.length > 0) {
            return experiences;
          }
        }
      } catch (error) {
        console.log('Database not available, using fallback data for experiences');
      }
      // Return fallback data if database is not available or empty
      return fallbackExperiences;
    },
    ['experiences'],
    { revalidate: 3600, tags: ['experiences'] }
  );
};

export const getAbout = async (): Promise<string> => {
  return withCache(
    async (): Promise<string> => {
      try {
        // Try to fetch from database first
        if (prisma && typeof prisma.about?.findFirst === 'function') {
          const about = await prisma.about.findFirst();
          if (about?.content) {
            return about.content;
          }
        }
      } catch (error) {
        console.log('Database not available, using fallback data for about');
      }
      // Return fallback data if database is not available or empty
      return fallbackAbout;
    },
    ['about'],
    { revalidate: 3600, tags: ['about'] }
  );
};

export const getIntro = async (): Promise<Intro> => {
  return withCache(
    async (): Promise<Intro> => {
      try {
        // Try to fetch from database first
        if (prisma && typeof prisma.intro?.findFirst === 'function') {
          const intro = await prisma.intro.findFirst();
          if (intro) {
            return {
              name: intro.name,
              title: intro.title,
              description: intro.description,
              upworkLink: intro.upworkLink,
              linkedinLink: intro.linkedinLink,
              githubLink: intro.githubLink,
              profileImageUrl: intro.profileImageUrl,
            };
          }
        }
      } catch (error) {
        console.log('Database not available, using fallback data for intro');
      }
      console.log('Database not available, using fallback data for intro');
      // Return fallback data if database is not available or empty
      return fallbackIntro;
    },
    ['intro'],
    { revalidate: 3600, tags: ['intro'] }
  );
};
