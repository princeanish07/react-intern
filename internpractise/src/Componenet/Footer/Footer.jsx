import React from 'react'
import './Footer.css';
import mylogo from "../../assets/images/coverlogo.jpg";
import user_icon from "../../assets/images/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img className="footer-logo" src={mylogo} alt="" />
          <p>
          🌟 Frontend Developer 🚀 Passionate about crafting immersive web experiences. 💻 Fluent in HTML, CSS, JavaScript, and React.js. 🎨 Design enthusiast with an eye for detail. 📱 Let's connect and create something amazing together!{" "}
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="enter  your email" />
          </div>
          <div  className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @2024 Prince Anish. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>Privacy Policies</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer