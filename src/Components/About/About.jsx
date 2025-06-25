import React, { useEffect, useState } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  const [typedText, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const codeLines = [
    "const aboutMe = {",
    "  name: 'Shweta Jaiswal',",
    "  role: 'Full Stack Developer',",
    "  education: 'B.Tech in Computer Science',",
    "  skills: [",
    "    'JavaScript', 'React', 'Next.js', 'Node.js',",
    "    'MongoDB', 'Express', 'HTML/CSS'",
    "  ],",
    "  description: 'Passionate developer focused on creating",
    "    clean, efficient, and user-friendly solutions.'",
    "};"
  ];

  useEffect(() => {
    AOS.init({ duration: 1800, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine];
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex <= line.length) {
          setTypedText(prev => prev + line[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setCurrentLine(prev => prev + 1);
          setTypedText(prev => prev + '\n');
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [currentLine]);

  return (
    <div id="about" className="about">
      <div className="about-title" data-aos="fade-right">
        <h1>About Me</h1>
      </div>

      {/*
      <div className="code-editor" data-aos="fade-up">
        <div className="editor-header">
          <div className="window-controls">
            <span className="control close"></span>
            <span className="control minimize"></span>
            <span className="control maximize"></span>
          </div>
          <div className="file-name">about.js</div>
        </div>
        <div className="editor-content">
          <pre className="code">
            {typedText}
            {showCursor && <span className="cursor">|</span>}
          </pre>
        </div>
        <div className="terminal">
          <div className="terminal-header">
            <span>Terminal</span>
          </div>
          <div className="terminal-content">
            <p className="command-line">
              <span className="prompt">$</span> npm run dev
            </p>
            <p className="output">Starting development server...</p>
            <p className="output">Compiled successfully!</p>
          </div>
        </div>
      </div>
      */}
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
