import React, { useState, useEffect } from 'react';
import './OpenToWork.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OpenToWork = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
    
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div 
        className={`open-to-work-button ${isVisible ? 'visible' : ''}`}
        onClick={togglePopup}
        data-aos="fade-left"
      >
        <span>Open to Work</span>
      </div>
      {isOpen && (
        <div className="open-to-work-popup" data-aos="fade-up">
          <div className="popup-content">
            <div className="popup-header">
              <h2>I'm Open to Work!</h2>
              <button className="close-button" onClick={togglePopup}>
                ×
              </button>
            </div>
            <div className="popup-body">
              <p>I'm currently looking for new opportunities in:</p>
              <ul>
                <li>Software Development Engineer (SDE)</li>
                <li>Full Stack Development</li>
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Web Development</li>
              </ul>
              <p className="contact-text">Feel free to reach out for potential collaborations!</p>
              <div className="popup-actions">
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OpenToWork; 