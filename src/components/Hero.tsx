import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Thushar D M</span>
          </h1>
          <h2 className="hero-subtitle">
            Systems Development Engineer Intern @ Amazon
          </h2>
          <p className="hero-description">
            Final-year Computer Science student with hands-on experience in full-stack development, 
            ML, and system automation. Passionate about building scalable solutions and AI-driven tools 
            that save thousands of engineering hours.
          </p>
          <div className="hero-buttons">
            <a 
              href="https://drive.google.com/file/d/1sB7ltWGY_lQYf3oBbkGmAbzlFitVJhZ1/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fas fa-file-pdf"></i>
              View Resume
            </a>
            <button 
              className="btn btn-secondary" 
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </button>
          </div>
          <div className="hero-social">
            <a 
              href="https://linkedin.com/in/thushar-d-m" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/Thushardm" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="mailto:tushardm123@gmail.com" 
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/profile-image.jpg" 
            alt="Thushar D M - Systems Development Engineer" 
            className="profile-photo"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.setAttribute('style', 'display: flex');
            }}
          />
          <div className="profile-placeholder" style={{display: 'none'}}>
            <i className="fas fa-user"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
