import React from 'react';
import './Education.css';

interface EducationCardProps {
  degree: string;
  institution: string;
  duration: string;
  cgpa: string;
  description?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ degree, institution, duration, cgpa, description }) => {
  return (
    <div className="education-card">
      <div className="education-header">
        <h3 className="degree">{degree}</h3>
        <div className="cgpa">CGPA: {cgpa}</div>
      </div>
      <p className="institution">{institution}</p>
      <p className="duration">{duration}</p>
      {description && <p className="description">{description}</p>}
    </div>
  );
};

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "B.E. Computer Science & Engineering",
      institution: "Bangalore Institute of Technology",
      duration: "2022 – 2026",
      cgpa: "9.5",
      description: "Specializing in software engineering, data structures, algorithms, and system design. Active participant in coding competitions and technical clubs."
    },
    {
      degree: "B.S. Data Science & Applications",
      institution: "IIT Madras (Online)",
      duration: "2023 – Present",
      cgpa: "8.0",
      description: "Comprehensive program covering machine learning, statistical analysis, data mining, and advanced analytics techniques."
    }
  ];

  const previousEducation = [
    {
      level: "Pre-University",
      institution: "Boscoss PU College",
      percentage: "96.33%",
      year: "2020–2022"
    },
    {
      level: "SSLC",
      institution: "Navachethana School",
      percentage: "98.56%",
      year: "2020"
    }
  ];

  const certifications = [
    {
      name: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford University (Coursera)",
      credential: "Verified Certificate"
    },
    {
      name: "Web Development Training Certificate",
      issuer: "Corizo",
      credential: "Training & Internship Certificate"
    },
    {
      name: "Google Cloud Computing Foundations Certificate",
      issuer: "Google Cloud",
      credential: "Professional Certificate"
    }
  ];

  const achievements = [
    "Winner at the Crack Jack coding contest organised by NodeDotAI Club, BIT",
    "Participant in October Sky workshop, Aeromania Event by Team Antariksk, RVCE",
    "Consistent academic excellence with top-tier performance",
    "Active member of technical communities and coding clubs"
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education & Achievements</h2>
        
        {/* Current Education */}
        <div className="current-education">
          <h3 className="subsection-title">Current Education</h3>
          <div className="education-grid">
            {educationData.map((edu, index) => (
              <EducationCard
                key={index}
                degree={edu.degree}
                institution={edu.institution}
                duration={edu.duration}
                cgpa={edu.cgpa}
                description={edu.description}
              />
            ))}
          </div>
        </div>

        {/* Previous Education */}
        <div className="previous-education">
          <h3 className="subsection-title">Academic Background</h3>
          <div className="previous-edu-grid">
            {previousEducation.map((edu, index) => (
              <div key={index} className="previous-edu-card">
                <h4>{edu.level}</h4>
                <p className="institution">{edu.institution}</p>
                <div className="performance">
                  <span className="percentage">{edu.percentage}</span>
                  <span className="year">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="certifications">
          <h3 className="subsection-title">Certifications</h3>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="cert-info">
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer}</p>
                </div>
                <div className="cert-credential">
                  <i className="fas fa-certificate"></i>
                  <span>{cert.credential}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="achievements">
          <h3 className="subsection-title">Awards & Achievements</h3>
          <div className="achievements-list">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <i className="fas fa-trophy"></i>
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
