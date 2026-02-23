import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'HTML5', level: 'Advanced', icon: 'code' },
  { name: 'CSS3', level: 'Advanced', icon: 'brush' },
  { name: 'JavaScript', level: 'Advanced', icon: 'data_usage' },
  { name: 'React', level: 'Intermediate', icon: 'view_module' },
  { name: 'Node.js', level: 'Intermediate', icon: 'storage' },
  { name: 'MongoDB', level: 'Intermediate', icon: 'database' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          My Skills
        </h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                <span className="material-icons">{skill.icon}</span>
              </div>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <div className="skill-bar-container">
                  <div className="skill-bar">
                    <div
                      className={`skill-fill ${skill.level.toLowerCase()}`}
                      style={{
                        width:
                          skill.level === 'Advanced'
                            ? '90%'
                            : skill.level === 'Intermediate'
                            ? '60%'
                            : '30%',
                      }}
                    ></div>
                  </div>
                  <span className={`skill-level-badge ${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;