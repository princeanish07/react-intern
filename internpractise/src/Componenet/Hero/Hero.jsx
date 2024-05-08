import React from 'react'
import './Hero.css';
import profile_img from '../../assets/images/profile.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="hero-front">
    
    <h1><span>hello its me Prince,</span>Frontend Developer</h1>
    <img src={profile_img} alt="" />
      </div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, veniam odio laborum facere quisquam, assumenda accusantium, harum hic similique.</p>
     <div className="hero-action">
     <div className="hero-connect">Connect with me</div>
     <div className="hero-resume">My Resume</div>

     </div>
    </div>
  )
}

export default Hero