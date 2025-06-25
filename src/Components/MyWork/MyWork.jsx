import React, { useEffect } from 'react';
import './MyWork.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import project1 from '../../assets/project_1.png';
import project2 from '../../assets/project_2.png';
import project3 from '../../assets/project_3.png';

const projects = [
    {
      title: 'AnaQuest',
      image: project1,
      description: 'An AI-powered EdTech platform for practicing analytical questions with real-time feedback and adaptive learning.',
      link: 'https://github.com/2004shweta/anaquest',
      demo: 'https://anaquest.vercel.app/'
    },
    {
      title: 'Kisaan Bazaar',
      image: project2,
      description: 'A contract farming platform connecting farmers with certified contractors, ensuring transparency and dispute resolution.',
      link: 'https://github.com/2004shweta/Kisaan_Bazar',
      demo: 'https://kisaanbazaar.vercel.app/'
    },
    {
      title: 'SkillXStream',
      image: project3,
      description: 'A platform for collaborative skill-building and project sharing with a responsive and accessible interface.',
      link: 'https://github.com/2004shweta/SkillXStream',
      demo: 'https://skillxstream.vercel.app/'
    }
  ];
  

function MyWork() {
  useEffect(() => {
    AOS.init({ duration: 1800, once: true });
  }, []);

  return (
    <div id="projects" className="mywork">
      <div className="mywork-title" data-aos="fade-right">
        <h1>My Projects</h1>
      </div>
      <div className="mywork-container" data-aos="fade-up">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 200}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWork; 