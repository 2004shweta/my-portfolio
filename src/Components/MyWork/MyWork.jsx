// import React, { useEffect } from 'react';
// import './MyWork.css';
// import theme_pattern from '../../assets/theme_pattern.svg';
// import mywork_data from '../../assets/mywork_data';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function MyWork() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1700,
//       once: true,
//       easing: 'ease-in-out',
//     });
//   }, []);

//   return (
//     <div id='work' className='mywork'>
//       <div className="mywork-title" data-aos="fade-left">
//         <h1>My Projects</h1>
//         <img src={theme_pattern} alt="pattern" />
//       </div>

//       <div className="mywork-container">
//         {mywork_data.map((work, index) => (
//           <div
//             className={`work-row ${index % 2 !== 0 ? 'reverse' : ''}`}
//             key={index}
//             data-aos="fade-up"
//           >
//             <div className="work-img-box">
//               <img src={work.w_img} alt={work.w_name} />
//             </div>
//             <div className="work-text-box">
//               <h3>{work.w_name}</h3>
//               <p>{work.w_desc}</p>
//               <p><strong>Tech Stack:</strong> {work.w_tech}</p>
//               {work.w_link && (
//                 <a href={work.w_link} target="_blank" rel="noreferrer">
//                   View Project
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyWork;
import React, { useEffect } from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyWork() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false, // You can set it to false for repeated animation on scroll
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title" data-aos="fade-left">
        <h1>My Projects</h1>
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          const isEven = index % 2 === 0;

            return (
            <div className={`work-row ${isEven ? '' : 'reverse'}`} key={index}>
              <div
              className="work-img-box"
              data-aos={isEven ? 'fade-left' : 'fade-right'}
              >
              <img className="work-img" src={work.w_img} alt={work.w_name} />
              </div>

              <div
              className="work-info"
              data-aos={isEven ? 'fade-right' : 'fade-left'}
              >
              <h3>{work.w_name}</h3>
              <p>{work.w_desc}</p>
              <p><strong>Tech Stack:</strong> {work.w_tech}</p>
              {work.w_link && (
                <a
                href={work.w_link}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#ff1d61' }} // Change the color here
                >
                View Project
                </a>
              )}
              </div>
            </div>
            );
        })}
      </div>
    </div>
  );
}

export default MyWork;
