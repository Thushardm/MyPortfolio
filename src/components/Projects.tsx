import React from 'react';
import './Projects.css';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  role: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, githubLink, liveLink, role }) => {
  const handleCardClick = () => {
    if (liveLink) {
      window.open(liveLink, '_blank');
    }
  };

  return (
    <div className={`project-card ${liveLink ? 'clickable' : ''}`} onClick={handleCardClick}>
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <div className="project-links">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`View ${title} on GitHub`}
            onClick={(e) => e.stopPropagation()}
          >
            <i className="fab fa-github"></i>
          </a>
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link live-link"
              aria-label={`View ${title} live demo`}
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          )}
        </div>
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
      title: "Beat Studio",
      role: "Full-Stack Developer, Database Administrator",
      description: "Developed comprehensive desktop music application using C# .NET Framework and MySQL database with advanced playlist management, album organization, and dynamic track metadata handling. Implemented Data Access Object (DAO) pattern for efficient CRUD operations.",
      technologies: ["C#", ".NET Framework", "MySQL", "Windows Forms", "DAO Pattern", "HTTP Client"],
      githubLink: "https://github.com/Thushardm/BeatStudio.git"
    },
    {
      title: "EmotionLens",
      role: "Machine Learning Engineer, Backend Developer",
      description: "Engineered machine learning pipeline using Logistic Regression and TF-IDF vectorization for multi-class emotion classification with comprehensive NLTK-based text preprocessing. Deployed Flask-based REST API for real-time sentiment prediction and emotion analysis with interactive web interface.",
      technologies: ["Python", "Scikit-learn", "NLTK", "Flask", "TF-IDF", "Logistic Regression", "REST API", "Railway"],
      githubLink: "https://github.com/Thushardm/EmotionLens.git",
      liveLink: "https://emotion-lens-prod.up.railway.app"
    },
    {
      title: "VerityLens",
      role: "AI/ML Engineer, Full-Stack Developer",
      description: "Developed full-stack web application using Flask and TensorFlow for deepfake detection in images and videos, implementing dual CNN architecture with Xception model for images and CNN-LSTM hybrid for temporal video analysis. Integrated blockchain technology using Ethereum smart contracts for immutable detection logging.",
      technologies: ["Python", "TensorFlow", "Flask", "CNN-LSTM", "Xception", "Blockchain", "Ethereum", "Docker"],
      githubLink: "https://github.com/Thushardm/VerityLens.git"
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
              liveLink={project.liveLink}
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
