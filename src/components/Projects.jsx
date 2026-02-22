import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Social Media Web App",
    description:
      "A Facebook-style social media platform with login, signup, posts, and profile system built using React, Node.js, and MongoDB.",
    image:
      "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=60",
    tech: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    github: "https://github.com/yourusername/social-media-app",
    live: "#",
  },

  {
    id: 3,
    title: "Student Management System",
    description:
      "A full CRUD student management dashboard with React frontend and Node.js backend for managing students, courses, and payments.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=60",
    tech: ["React", "Node.js", "MongoDB", "Bootstrap"],
    github: "https://github.com/yourusername/student-management",
    live: "#",
  },

  {
    id: 4,
    title: "Personal Portfolio Website",
    description:
      "A modern responsive portfolio website built with React.js featuring animations, projects showcase, and contact form.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60",
    tech: ["React", "CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section"> {/* id added here */}
      <div className="container">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;