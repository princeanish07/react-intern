import React from 'react'
import './Work.css';
import neon from '../../assets/images/neon.svg';
import arrow_icon from '../../assets/images/arrow_icon.svg';
import mywork_data from '../../assets/images/mywork_data';

const Work = () => {
  return (
    <div id='work' className='mywork'>
    <div className="mywork-title">
      <h1>My Latest Work</h1>
      <img className='neon-img3' src={neon} alt="" />
    </div>
    <div className="mywork-container">
      {mywork_data.map((work,index)=>{
return <img key={index} src={work.w_img} alt="" />
      })}
    </div>
    <div className="mywork-showmore">
      <p>Show More</p>
      <img src={arrow_icon} alt="" />
    </div>
  </div>
  )
}

export default Work