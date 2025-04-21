import React from 'react';
import './Experience.css';
import experience_data from '../../assets/experience_data';

function Experience() {
  return (
    <section id='experience' className='experience'>
      <div className="experience-content">
        <h2>Experience</h2>
        
        <div className="experience-grid">
          {experience_data.map((exp, index) => (
            <article className="experience-card" key={index}>
              <div className="experience-info">
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <p className="description">{exp.description}</p>
                
                <div className="experience-meta">
                  <div className="experience-tech">
                    <span>Technologies: {exp.tech}</span>
                  </div>
                  {exp.link && (
                    <a 
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="experience-link"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience; 