import React from 'react';
import './Projects.css';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  role: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, githubLink, role }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
          aria-label={`View ${title} on GitHub`}
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="project-role">
        <span>{role}</span>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Music Player Application",
      role: "Backend Developer and Database Administrator",
      description: "Developed a desktop music player using C# and MySQL for playlist and song management. Deployed locally on a MAMP server for smooth operation and testing with comprehensive database design.",
      technologies: ["C#", "MySQL", "MAMP", "Desktop App", "Database Design"],
      githubLink: "https://github.com/Thushardm"
    },
    {
      title: "Emotion Detection & Sentiment Analysis System",
      role: "Backend Developer",
      description: "Built an advanced ML model using Logistic Regression and NLP techniques to classify text into emotions with ~90% accuracy. Features real-time prediction API for instant sentiment inference.",
      technologies: ["Python", "Scikit-learn", "NLP", "Flask", "Logistic Regression", "API"],
      githubLink: "https://github.com/Thushardm"
    },
    {
      title: "Media Authenticator and Fake Content Detector",
      role: "Backend Developer",
      description: "Designed a sophisticated CNN-based model to detect fraudulent images and videos for digital media authentication. Helps combat deepfakes and manipulated content using advanced computer vision techniques.",
      technologies: ["Python", "TensorFlow", "CNN", "Computer Vision", "Deep Learning", "Image Processing"],
      githubLink: "https://github.com/Thushardm"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of my key technical projects that demonstrate my skills in 
          full-stack development, machine learning, and system design.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              role={project.role}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
            />
          ))}
        </div>
        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a 
            href="https://github.com/Thushardm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <i className="fab fa-github"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
