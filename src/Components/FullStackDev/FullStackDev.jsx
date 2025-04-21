import React from "react";
import "./FullStackDev.css";

const FullStackDev = () => {
    const icons = [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML", name: "HTML" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS", name: "CSS" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "Javascript", name: "Javascript" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP", name: "PHP" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java", name: "Java" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "C", name: "C" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++", name: "C++" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", name: "React" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL", name: "MySQL" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git", name: "Git" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB", name: "MongoDB" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma", name: "Figma" },
        // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg", alt: "Laravel", name: "Laravel" }
    ];

    const IconSet = () => (
        <div className="icon-grid">
            {icons.map((icon, index) => (
                <div key={index}>
                    <img src={icon.src} alt={icon.alt} />
                    <p>{icon.name}</p>
                </div>
            ))}
        </div>
    );

    return (
        <div className="fullstack-container">
            <h1>Skills</h1>

            <div className="icon-container">
                <div className="scroll-container">
                    <IconSet />
                    <IconSet />
                </div>
            </div>

            <div className="skills-text">
                <p>Building responsive website front end using <strong>ReactJS</strong> and <strong>JavaScript</strong></p>
                {/* <p>⚡ Developing mobile applications using <strong>Flutter</strong> and native <strong>Android</strong></p> */}
                <p>Backend development using the <strong>MERN</strong> stack (MongoDB, ExpressJS, ReactJS, NodeJS)</p>
            </div>
        </div>
    );
};

export default FullStackDev;
