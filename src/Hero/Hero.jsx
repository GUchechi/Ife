import React from "react";
import "./Hero.css";
import {
  FaDiscord,
  FaInstagram,
  FaTelegramPlane, 
  FaTwitter,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <div className="hero_left_section">
          <h1 className="title">World's largest AI gift sharing platform</h1>
          <p className="subTitle">
            Share gifts easily and securely using blockchain technology
          </p>
          <button className="btn">Get Early Access</button>
          <div className="social_icons">
          <span>Follow us on</span>
            <FaTwitter size={22} />
            <FaInstagram size={22} />
            <FaDiscord size={22} />
          </div>
        </div>
      </div>
      <div className="hero_right"></div>
    </div>
  );
};

export default Hero;
