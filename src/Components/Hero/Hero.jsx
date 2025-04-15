import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'


const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={profile_img} alt="" />
    <h1><span>I'am Shweta </span> hello</h1>
    <p> full stack web developer</p>
    <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
    </div>

    </div>
  )
}

export default Hero