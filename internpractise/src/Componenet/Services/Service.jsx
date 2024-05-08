import React from 'react'
import "./Service.css";
import theme_pattern from "../../assets/images/theme_pattern.svg"
import Services_Data from '../../assets/images/services_data'
import arrow_icon from "../../assets/images/arrow_icon.svg"
import neon_icon from "../../assets/images/neon.svg"
const Service = () => {
  return (
    <div id='Servicess' className="services">
      <div className="service-title">
        <h1>My Services</h1>
        <img src={neon_icon} alt="" />
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>
         {
          return <div className="services-format">
           <h3>{service.s_no}</h3> 
           <h2>{service.s_name}</h2>
           <p>{service.s_desc}</p>
           <div className="services-readmore">
            <p>Read More</p>
            <img src={arrow_icon} alt="" />
           </div>


          </div>
         })}
      </div>



    </div>
  )
}

export default Service