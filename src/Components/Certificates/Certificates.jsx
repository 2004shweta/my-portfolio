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
      title: 'Data Structures and Algorithms (Self-Paced)',
      issuer: 'GeeksforGeeks',
      date: '2024',
      link: 'https://drive.google.com/file/d/1tpoyRJKEUsDAgRdAL6ZsOAQB-MwZbWmD/view?usp=sharing'
    },
    {
      title: 'Server-side JavaScript with Node.js',
      issuer: 'Coursera',
      date: '2024',
      link: 'https://coursera.org/share/0ede09445285ee69fc1f5ecf44a3d288'
    },
    {
      title: 'Cloud Computing Concepts',
      issuer: 'NPTEL',
      date: '2024',
      link: 'https://drive.google.com/file/d/1wewl6PsdRX_Qk4hFQifJNmYMqqPBRHR-/view?usp=sharing'
    }
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