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
  // Return empty array for now - will be populated via admin panel later
  return [];
};

export const getSkills = async (): Promise<string[]> => {
  // Return empty array for now - will be populated via admin panel later
  return [];
};

export const getExperiences = async (): Promise<Experience[]> => {
  // Return empty array for now - will be populated via admin panel later
  return [];
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
