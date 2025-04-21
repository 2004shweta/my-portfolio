import React from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';

function MyWork() {
  return (
    <section id='work' className='mywork'>
      <div className="mywork-content">
        <h2>My Projects</h2>
        
        <div className="work-grid">
          {mywork_data.map((work, index) => (
            <article className="work-card" key={index}>
              <div className="work-info">
                <h3>{work.w_name}</h3>
                <p>{work.w_desc}</p>
                
                <div className="work-meta">
                  <div className="work-author">
                    <img 
                      className="author-avatar" 
                      src={work.w_img} 
                      alt={work.w_name} 
                    />
                    <span className="author-name">Tech Stack: {work.w_tech}</span>
                  </div>
                  {work.w_link && (
                    <a 
                      href={work.w_link}
                      target="_blank"
                      rel="noreferrer"
                      className="read-time"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyWork;
