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
            <p>
              I'm a passionate and detail-oriented Full Stack Developer with a strong foundation in both front-end and back-end technologies. Currently pursuing my B.Tech in Computer Science and Engineering, I enjoy transforming ideas into real-world web applications using tools like JavaScript, Node.js, MongoDB, and modern frameworks.
            </p>
            <p>
              I thrive on solving complex problems, learning new technologies, and building clean, user-friendly interfaces. Whether it's designing a responsive UI or structuring a secure backend, I always aim to deliver efficient and impactful solutions. Beyond coding, I'm a curious learner, a team player, and someone who believes in continuous improvement.
            </p>
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
