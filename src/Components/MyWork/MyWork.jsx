import React, { useEffect } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyWork() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Slower animation duration
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title" data-aos="fade-left">
        <h1>My Latest Work</h1>
        {/* <img src={theme_pattern} alt="pattern" /> */}
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <img
            key={index}
            src={work.w_img}
            alt="work"
            data-aos="fade-up"
            data-aos-delay={index * 300} // Slight delay for each image
          />
        ))}
      </div>

      {/* <div className="mywork-showmore" data-aos="fade-left" data-aos-delay="500">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow" />
      </div> */}
    </div>
  );
}

export default MyWork;
