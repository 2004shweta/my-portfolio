import React, { useEffect } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1800, // ⏳ slower animation (in milliseconds)
      once: true,
      easing: 'ease-in-out', // smooth transition
    });
  }, []);

  return (
    <div id='services' className='services'>
      <div className="services-titile" data-aos="fade-left">
        <h1>My Services</h1>
        {/* <img src={theme_pattern} alt="pattern" /> */}
      </div>

      <div className="services-container" data-aos="fade-left" data-aos-delay="300">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className="services-format"
            data-aos="fade-up"
            data-aos-delay={index * 200} // ⏳ slight delay between cards
          >
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            {/* <div className="services-readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt="arrow" />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
