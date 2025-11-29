import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Computer Science student currently interning as a Systems Development Engineer 
              at Amazon, Chennai. My work focuses on building GenAI-based tools and automation systems 
              that save hundreds of engineering hours per month.
            </p>
            <p>
              With a strong foundation in full-stack development, machine learning, and system design, 
              I enjoy tackling complex problems and creating innovative solutions. I'm particularly 
              interested in the intersection of AI and software engineering, where I can leverage 
              cutting-edge technologies to solve real-world problems.
            </p>
            <p>
              Currently pursuing my B.E. in Computer Science & Engineering from Bangalore Institute of Technology 
              with a CGPA of 9.5, alongside a B.S. in Data Science & Applications from IIT Madras. 
              I believe in continuous learning and staying updated with the latest technological advancements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
