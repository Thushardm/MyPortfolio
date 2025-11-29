import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="position">Systems Development Engineering Intern</h3>
                <div className="company-info">
                  <span className="company">Amazon</span>
                  <span className="location">Chennai, India</span>
                </div>
                <span className="duration">July 2025 – Present</span>
              </div>
              <div className="timeline-body">
                <ul className="achievements">
                  <li>
                    <strong>GenAI Multi-Agent Tool:</strong> Built a GenAI based multi-agent orchestration tool 
                    for making automated code changes to the Diagnostics workflows, saving 130+ SE hours 
                    per month per diagnostic tool
                  </li>
                  <li>
                    <strong>Amazon-wide Impact:</strong> Planned an Amazon-wide rollout for 32 diagnostics tools, 
                    projected to save 2250+ SE hours per month across the organization
                  </li>
                  <li>
                    <strong>Alert System:</strong> Built an intelligent alert system using Anomaly Detection ML models 
                    to identify sudden surges in ticket inflow, enabling immediate customer service response
                  </li>
                  <li>
                    <strong>CI/CD Enhancement:</strong> Resolved critical blockers in CI/CD workflows to achieve full 
                    continuous deployment, accelerating the team's release-to-production cycle
                  </li>
                  <li>
                    <strong>System Migration:</strong> Orchestrated a large-scale migration of critical backend services 
                    from JDK 8 to JDK 17, achieving up to a 15% increase in application throughput
                  </li>
                </ul>
                <div className="technologies">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">GenAI</span>
                  <span className="tech-tag">ML</span>
                  <span className="tech-tag">System Design</span>
                  <span className="tech-tag">Automation</span>
                  <span className="tech-tag">JDK Migration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
