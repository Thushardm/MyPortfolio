import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Thushar D M</h3>
            <p>Systems Development Engineer Intern @ Amazon</p>
            <p>Building scalable solutions and AI-driven tools</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a 
                  href="https://linkedin.com/in/thushar-d-m" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/Thushardm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a 
                  href="mailto:tushardm123@gmail.com" 
                  aria-label="Email"
                >
                  <i className="fas fa-envelope"></i>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Thushar D M. All rights reserved.</p>
            <p>Made with <i className="fas fa-heart"></i> using React & TypeScript</p>
          </div>
          
          <button 
            className="scroll-top-btn" 
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
