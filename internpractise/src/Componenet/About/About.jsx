import React from 'react'
import './About.css';
import theme_pattern from '../../assets/images/neon.svg';
import profile_img from '../../assets/images/king.jpg';


const About = () => {
  return (
    <div id='aboutus' className="about">

        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />

            </div>
            <div className="about-right">
                <div className="about-para">
                    <p> I am a experienced frontend developer </p>
                    <p>my passion is only for frontend developer  </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">   <p>HTML & CSS</p>    <hr style={{width:"400px"}}/> </div>
                    <div className="about-skill">   <p>React Js</p> <hr style={{width:"350px"}}/></div>
                    <div className="about-skill">   <p>Javascript</p> <hr style={{width:"300px"}}/></div>
                    <div className="about-skill">   <p>Next Js</p> <hr style={{width:"200px"}}/></div>


                    {/* <div className="about-skill">
                        <p>Html</p> <hr style={{width:"300px"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Html</p> <hr style={{}}/>
                    </div>
                    <div className="about-skill">
                        <p>Html</p> <hr style={{}}/>
                    </div> */}

                </div>


            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <div className="about-achievement">
                <h1>50+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}


export default About