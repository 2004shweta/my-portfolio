// import React, { useState, useEffect } from 'react';
// import './Hero.css';
// import profile_img from '../../assets/profile_img.svg';  // default profile image

// const Hero = () => {
//   // Dynamic data (you can later replace these with data from props, API, or state)
//   const [name, setName] = useState("Shweta Jaiswal");
//   const [role, setRole] = useState("Full Stack Web Developer");
//   const [description, setDescription] = useState("As a developer in India with hands-on experience in building dynamic web applications, you might be interested in exploring some of the most effective technologies and frameworks that can enhance your projects.");
  
//   const [image, setImage] = useState(profile_img); // Dynamically load the profile image (can be from an API or user input)

//   // Effect for dynamic text animations (for example, change role or name)
//   useEffect(() => {
//     const roles = ["Full Stack Web Developer", "JavaScript Enthusiast", "Tech Innovator"];
//     let i = 0;

//     const interval = setInterval(() => {
//       setRole(roles[i % roles.length]);
//       i++;
//     }, 3000); // Change role every 3 seconds

//     return () => clearInterval(interval); // Clear the interval on unmount
//   }, []);

//   // Handle resume download or redirection (dummy behavior here)
//   const handleResumeClick = () => {
//     window.open("https://www.example.com/my_resume.pdf", "_blank"); // Replace with actual resume link
//   };

//   return (
//     <div id="home" className="hero">
//       {/* <img src={image} alt="Profile" /> */}
//       <h1><span>I am {name}</span>, {role}</h1>
//       <p>{description}</p>
//       <div className="hero-action">
//         <div className="hero-connect" onClick={() => window.location.href = 'mailto:jaiswalshweta021@gmail.com'}>Connect with me</div>
//         <div className="hero-resume" onClick={handleResumeClick}>My resume</div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg'; // default profile image
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {
  const [name, setName] = useState("Shweta Jaiswal");
  const [role, setRole] = useState("Full Stack Web Developer");
  const [description, setDescription] = useState(
    "Based in India, I specialize in creating dynamic web applications using cutting-edge technologies and frameworks to deliver impactful solutions."
  );
  const [image, setImage] = useState(profile_img);

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
    window.open("https://www.example.com/my_resume.pdf", "_blank"); // Replace with actual resume link
  };

  return (
    <div id="home" className="hero">
      <div className="hero-img">
        {/* <img src={image} alt="Profile" /> */}
      </div>

      <h1><span>I am {name}</span>, {role}</h1>
      <p>{description}</p>


      <div className="hero-action">
        <div className="hero-connect" onClick={() => window.location.href = 'mailto:jaiswalshweta021@gmail.com'}>
          Connect with me
        </div>
        <div className="hero-resume" onClick={handleResumeClick}>
          My resume
        </div>
        
      </div>
      <div className="hero-icons">
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-google"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  );
};

export default Hero;
