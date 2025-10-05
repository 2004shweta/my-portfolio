import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1800, once: true });
  }, []);

  return (
    <div id="about" className="about">
      <div className="about-title" data-aos="fade-right">
        <h1>About Me</h1>
      </div>

      <div className="about-skills" data-aos="fade-up">
        <h2>Skills</h2>
        <div className="skills-list">
          {[
            { name: 'JavaScript', level: 90 },
            { name: 'React', level: 85 },
            { name: 'Next.js', level: 80 },
            { name: 'Node.js', level: 80 },
            { name: 'MongoDB', level: 75 },
            { name: 'Express', level: 75 },
            { name: 'HTML', level: 95 },
            { name: 'CSS', level: 90 },
          ].map(skill => (
            <div className="skill-bar" key={skill.name}>
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div className="progress" style={{width: `${skill.level}%`}}></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
