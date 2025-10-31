"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

// Types based on our Prisma schema
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  order: number;
}

interface Skill {
  id: number;
  name: string;
  order: number;
}

interface Experience {
  id: number;
  title: string;
  location: string;
  description: string;
  icon: string;
  date: string;
  order: number;
}

interface About {
  id: number;
  content: string;
}

interface Intro {
  id: number;
  name: string;
  title: string;
  description: string;
  upworkLink: string;
  linkedinLink: string;
  githubLink: string;
  profileImageUrl: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [about, setAbout] = useState<About | null>(null);
  const [intro, setIntro] = useState<Intro | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch all data on component mount
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const [projectsRes, skillsRes, experiencesRes, aboutRes, introRes] = await Promise.all([
        fetch('/api/admin/projects'),
        fetch('/api/admin/skills'),
        fetch('/api/admin/experiences'),
        fetch('/api/admin/about'),
        fetch('/api/admin/intro'),
      ]);

      if (projectsRes.ok) setProjects(await projectsRes.json());
      if (skillsRes.ok) setSkills(await skillsRes.json());
      if (experiencesRes.ok) setExperiences(await experiencesRes.json());
      if (aboutRes.ok) setAbout(await aboutRes.json());
      if (introRes.ok) setIntro(await introRes.json());
    } catch (error) {
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Portfolio Admin Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Skills' },
              { id: 'experiences', label: 'Experience' },
              { id: 'about', label: 'About' },
              { id: 'intro', label: 'Intro' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {activeTab === 'projects' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Add Project
                </button>
              </div>
              <div className="grid gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Add Skill
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <div key={skill.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 dark:text-white">{skill.name}</span>
                      <div className="flex space-x-2">
                        <button className="px-2 py-1 bg-yellow-500 text-white text-xs rounded hover:bg-yellow-600">
                          Edit
                        </button>
                        <button className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'experiences' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Add Experience
                </button>
              </div>
              <div className="space-y-6">
                {experiences.map((experience) => (
                  <div key={experience.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {experience.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {experience.location} • {experience.date}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                          {experience.description}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'about' && about && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About Section</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Edit About
                </button>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {about.content}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'intro' && intro && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Intro Section</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Edit Intro
                </button>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <p className="mt-1 text-gray-900 dark:text-white">{intro.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Title
                  </label>
                  <p className="mt-1 text-gray-900 dark:text-white">{intro.title}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Description
                  </label>
                  <p className="mt-1 text-gray-900 dark:text-white">{intro.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Upwork Link
                    </label>
                    <p className="mt-1 text-gray-900 dark:text-white break-all">{intro.upworkLink}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      LinkedIn Link
                    </label>
                    <p className="mt-1 text-gray-900 dark:text-white break-all">{intro.linkedinLink}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      GitHub Link
                    </label>
                    <p className="mt-1 text-gray-900 dark:text-white break-all">{intro.githubLink}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
