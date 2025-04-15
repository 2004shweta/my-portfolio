import React from 'react'
import './About.css'
import theme_pattern from'../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

function About() {
  return (
    <div id='about' className='about'>
    <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
    </div>
    <div className="about-sections">
      <div className="about-left">
        <img src={profile_img} alt="" />
      </div>
      <div className="about-right">
        <div className="about-para">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe fugiat molestias porro culpa aliquid quasi voluptatibus dicta facilis veniam. Quis aliquid est error praesentium modi aliquam autem voluptatem veritatis eius.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corporis dignissimos inventore quae rerum a, saepe libero. Deleniti quaerat neque eum perferendis nostrum sed ratione asperiores officiis, nulla recusandae unde!</p>
        </div>
        <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width : "50%"}}/></div>
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width : "70%"}}/></div>
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width : "80%"}}/></div>
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width : "90%"}}/></div>
        </div>
      </div>
    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>yeras of expersive</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>20</h1>
            <p> Projects</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>10</h1>
            <p> happy clients</p>
        </div>

    </div>
</div>
  )
}

export default About