import React, { useEffect } from 'react';
import './Certificates.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Certificates() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const certificates = [
    {
      title: 'Full Stack Development',
      issuer: 'Coding Ninjas',
      date: '2023',
      link: 'https://certificate.codingninjas.com/view/your-certificate-id'
    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'GeeksforGeeks',
      date: '2023',
      link: 'https://your-certificate-link'
    },
    // Add more certificates as needed
  ];

  return (
    <div id="certificates" className="certificates">
      <div className="certificates-title" data-aos="fade-right">
        <h1>My Certificates</h1>
      </div>

      <div className="certificates-container" data-aos="fade-up">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card" data-aos="fade-up" data-aos-delay={index * 200}>
            <h3>{cert.title}</h3>
            <p className="issuer">{cert.issuer}</p>
            <p className="date">{cert.date}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-certificate">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates; 