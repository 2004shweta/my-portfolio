import React, { useEffect } from 'react';
import './Certificates.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCertificate } from 'react-icons/fa';

const certificates = [
  {
    title: 'Data Structures and Algorithms',
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

function Certificates() {
  useEffect(() => {
    AOS.init({ duration: 1800, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <div id="certificates" className="certificates">
      <div className="certificates-title" data-aos="fade-right">
        <h1>My Certificates</h1>
      </div>
      <div className="certificates-container" data-aos="fade-up">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card modern" data-aos="fade-up" data-aos-delay={index * 150}>
            <div className="cert-icon"><FaCertificate /></div>
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <span className="issuer-badge">{cert.issuer}</span>
              <span className="cert-date">{cert.date}</span>
            </div>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-certificate">
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates; 