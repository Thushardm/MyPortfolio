import React from 'react';
import './Skills.css';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => {
  return (
    <div className="skill-category">
      <div className="skill-header">
        <i className={icon}></i>
        <h3>{title}</h3>
      </div>
      <div className="skill-tags">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"]
    },
    {
      title: "Web Technologies",
      icon: "fas fa-globe",
      skills: ["HTML", "CSS", "ReactJS", "SpringBoot", "Flask", "Node.js"]
    },
    {
      title: "Machine Learning & AI",
      icon: "fas fa-brain",
      skills: ["TensorFlow", "Scikit-learn", "NLP", "Computer Vision", "Deep Learning", "GenAI"]
    },
    {
      title: "Databases & Storage",
      icon: "fas fa-database",
      skills: ["MySQL", "MongoDB", "JDBC", "Database Design", "Data Modeling"]
    },
    {
      title: "Tools & Frameworks",
      icon: "fas fa-tools",
      skills: ["Git", "Linux", "AWS", "Docker", "Servlet", "Swing"]
    },
    {
      title: "Core Computer Science",
      icon: "fas fa-microchip",
      skills: ["DSA", "OOPS", "Operating Systems", "DBMS", "Computer Networks", "System Design"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A comprehensive overview of my technical expertise across different domains
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
        <div className="additional-skills">
          <h3>Additional Competencies</h3>
          <div className="competencies">
            <div className="competency">
              <i className="fas fa-trophy"></i>
              <span>Data Structures and Algorithms (LeetCode)</span>
            </div>
            <div className="competency">
              <i className="fas fa-project-diagram"></i>
              <span>System Architecture & Design</span>
            </div>
            <div className="competency">
              <i className="fas fa-robot"></i>
              <span>Automation & DevOps</span>
            </div>
            <div className="competency">
              <i className="fas fa-chart-line"></i>
              <span>Performance Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
