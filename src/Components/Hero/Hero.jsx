import React, { useState, useEffect } from 'react';
import './Hero.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
 

const Hero = () => {
  const [name, setName] = useState("Shweta Jaiswal");
  const [role, setRole] = useState("Full Stack Web Developer");
  const [description, setDescription] = useState(
    "Based in India, I specialize in creating dynamic web applications using cutting-edge technologies and frameworks to deliver impactful solutions."
  );
  const [showCvDropdown, setShowCvDropdown] = useState(false);

  useEffect(() => {
    const roles = ["Full Stack Web Developer", "JavaScript Enthusiast", "Tech Innovator"];
    let i = 0;

    const interval = setInterval(() => {
      setRole(roles[i % roles.length]);
      i++;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleResumeClick = () => {
    setShowCvDropdown(!showCvDropdown);
  };

  const handleCvSelect = (cvType) => {
    const cvLinks = {
      specialized: "https://drive.google.com/file/d/1A91npRTIb55x73AYtFN16j5VaGGrQkxu/view?usp=sharing",
      general: "https://drive.google.com/file/d/1MoN0fuFp8NXljEWbe12951zPZphGdVWT/view?usp=sharing" // Replace with your general CV link
    };
    window.open(cvLinks[cvType], "_blank");
    setShowCvDropdown(false);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-greeting">Hi, I'm</span>
              <span className="hero-name">
                <span className="hero-first-name">Shweta</span>
                <span className="hero-last-name"> Jaiswal</span>
              </span>
              <span className="hero-role">{role}</span>
            </h1>
            <p className="hero-description">{description}</p>
            <div className="tech-stack-row">
              {[
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Express",
                "HTML5",
                "CSS3"
              ]?.map((tech, idx) => (
                <span
                  className={`tech-badge tech-badge-${tech
                    .toLowerCase()
                    .replace(/\W/g, "")}`}
                  key={tech}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <i className={`fab fa-${tech.toLowerCase().replace(/\W/g, "")}`}></i> {tech}
                </span>
              ))}
            </div>
            <div className="hero-actions">
              <button
                className="hero-button primary-button"
                onClick={() => (window.location.href = "mailto:jaiswalshweta021@gmail.com")}
              >
                <i className="fas fa-envelope"></i> Connect with me
              </button>
              <div className="cv-dropdown-container">
                <button
                  className="hero-button secondary-button"
                  onClick={handleResumeClick}
                >
                  <i className="fas fa-file-alt"></i> View Resume
                </button>
                {showCvDropdown && (
                  <div className="cv-dropdown">
                    <button onClick={() => handleCvSelect("specialized")}> 
                      <i className="fas fa-code"></i> Specialized CV
                    </button>
                    <button onClick={() => handleCvSelect("general")}> 
                      <i className="fas fa-file"></i> General CV
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="hero-social">
              <a href="https://github.com/2004shweta" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/shweta-jaiswal-b5b538252/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:jaiswalshweta021@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-google"></i>
              </a>
              <a href="https://x.com/ShwetaJais2745" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/_jaiswalshwetajaiswal" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
