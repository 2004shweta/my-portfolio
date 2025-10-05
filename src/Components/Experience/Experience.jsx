import React, { useEffect } from 'react';
import './Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experience = [
    {
      role: 'AI Intern',
      company: 'Outlier',
      date: 'Dec 2024 - Jan 2025',
      description: 'Created coding-related content tailored for learners in India, focusing on Python, Java, C/C++, data structures, and algorithms. Developed problem sets, code solutions, and explanations for various difficulty levels. Collaborated with the core team to align content with curriculum goals and learner needs.'
    },
    {
        role: 'Open Source Contributor',
        company: 'GirlScript Summer of Code',
        date: 'Oct 2024 - Nov 2024',
        description: 'Contributed to open source projects, fixed bugs, and added new features. Recognized as a top 4% contributor.'
    },
    {
      role: 'Frontend Developer',
      company: 'Creative Minds',
      date: 'Jun 2023 - Nov 2023',
      description: 'Built responsive user interfaces with React and improved website performance by 30%. Worked closely with designers to implement modern UI/UX.'
    },
   
  ];
  


function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1800, once: true });
  }, []);

  return (
    <div id="experience" className="experience">
      <div className="experience-title" data-aos="fade-right">
        <h1>Experience</h1>
      </div>
      <div className="timeline" data-aos="fade-up">
        {experience.map((exp, index) => (
          <div key={index} className="timeline-event" data-aos="fade-up" data-aos-delay={index * 200}>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3>{exp.role}</h3>
              <div className="company">{exp.company}</div>
              <div className="date">{exp.date}</div>
              <div className="description">{exp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience; 