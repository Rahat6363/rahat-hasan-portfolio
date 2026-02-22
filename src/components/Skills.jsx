import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'HTML5', level: 'Advanced' },
  { name: 'CSS3', level: 'Advanced' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Node.js', level: 'Beginner' },
  { name: 'Python', level: 'Intermediate' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section"> {/* ← changed */}
      <div className="container">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={index}>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div
                  className={`skill-level ${skill.level.toLowerCase()}`}
                  style={{ width: skill.level === 'Advanced' ? '90%' : skill.level === 'Intermediate' ? '60%' : '30%' }}
                ></div>
              </div>
              <span className="skill-level-text">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;