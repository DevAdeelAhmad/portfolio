// Simple seeding script that uses the existing API endpoints
const projectsData = [
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

async function seedData() {
  console.log('🌱 Starting simple database seeding...');

  try {
    // Seed projects
    console.log('📸 Seeding projects...');
    for (let i = 0; i < projectsData.length; i++) {
      const project = { ...projectsData[i], order: i };

      const response = await fetch('http://localhost:3000/api/admin/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      });

      if (response.ok) {
        console.log(`✅ Added project: ${project.title}`);
      } else {
        console.log(`❌ Failed to add project: ${project.title}`);
      }
    }

    // Seed skills
    console.log('💡 Seeding skills...');
    for (let i = 0; i < skillsData.length; i++) {
      const skill = { name: skillsData[i], order: i };

      const response = await fetch('http://localhost:3000/api/admin/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(skill),
      });

      if (response.ok) {
        console.log(`✅ Added skill: ${skill.name}`);
      } else {
        console.log(`❌ Failed to add skill: ${skill.name}`);
      }
    }

    // Seed experiences
    console.log('🏢 Seeding experiences...');
    for (let i = 0; i < experiencesData.length; i++) {
      const experience = { ...experiencesData[i], order: i };

      const response = await fetch('http://localhost:3000/api/admin/experiences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(experience),
      });

      if (response.ok) {
        console.log(`✅ Added experience: ${experience.title}`);
      } else {
        console.log(`❌ Failed to add experience: ${experience.title}`);
      }
    }

    console.log('\n🎉 Database seeding completed!');
    console.log('\n📊 Summary:');
    console.log(`   - ${projectsData.length} projects`);
    console.log(`   - ${skillsData.length} skills`);
    console.log(`   - ${experiencesData.length} experiences`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  }
}

seedData();
