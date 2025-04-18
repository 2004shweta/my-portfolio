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
        {/* <img src={theme_pattern} alt="Theme Pattern" /> */}
      </div>

      <div className="about-sections">
        <div className="about-left" data-aos="fade-right">
          {/* <img src={profile_img} alt="Profile" /> */}
        </div>

        <div className="about-right" data-aos="fade-left">
          <div className="about-para">
            <p>Passionate and detail-oriented <strong>Full Stack Developer</strong> with a strong foundation in front-end and back-end technologies
            Currently pursuing <strong>B.Tech in Computer Science and Engineering</strong>, transforming ideas into real-world web apps using <strong>JavaScript</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and modern frameworks.
            Skilled at designing responsive UIs and building secure backends — always striving for clean, user-friendly, and efficient solutions.
            Curious learner, strong team player, and a believer in <strong>continuous improvement</strong>.</p>
          </div>

          {/* <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>NodeJs & MongoDB</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div> */}
        </div>
      </div>

      {/* <div className="about-achievements" data-aos="fade-up">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20</h1>
          <p>Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10</h1>
          <p>Happy Clients</p>
        </div>
      </div> */}
    </div>
  );
}

export default About;
