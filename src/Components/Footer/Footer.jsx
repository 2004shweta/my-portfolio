import React, { useEffect } from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1800, // Slow down the animation duration
      once: true, // Trigger animation only once
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className='footer'>
      {/* Top Footer */}
      <div className="footer-top" data-aos="fade-up">
        <div className="footer-top-left" data-aos="fade-left" data-aos-delay="200">
          <p>Made by Shweta Jaiswal</p>
        </div>

        <div className="footer-top-right" data-aos="fade-right" data-aos-delay="400">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type='email' placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 All rights reserved</p>

        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
