import React from 'react'

import "./Contact.css";
import neon from "../../assets/images/neon.svg";
import mail_icon from "../../assets/images/mail_icon.svg";
import location_icon from "../../assets/images/location_icon.svg";
import call_icon from "../../assets/images/call_icon.svg";
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2bc14925-4bd0-49a0-849f-9cbaba0f7bf6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("successfully sent email")
    }
  };
  return (
    <div id='contactus' className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img className="neon-img3" src={neon} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets Talk</h1>
          <p>
            
Frontend Developer with a passion for creating engaging web experiences; let's build something remarkable together!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>anishpathak456@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+977 9806121088</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Nepal</p>
            </div>
          </div>
        </div>
      <div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name Here" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your Email" name="email" />
          <label htmlFor="">Write Your Email Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact