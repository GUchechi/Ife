import React from "react";
import "./Footer.css";
import logo2 from "../Assets/logo2.png";
import {
  FaDiscord,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
 
const Footer = () => {
  return (
    <div className="footer_section">
      <div className="logo">
        <img src={logo2} width="55px" height="55px" alt="logo" />
      </div>
      <div className="socialIcons">
        <FaTwitter size={22} />
        <FaInstagram size={22} />
        <FaTelegramPlane size={22} />
        <FaDiscord size={22} />
      </div>
      <div className="copyRight">
        <p>&copy; ifẹ, 2022</p>
      </div>
    </div>
  );
};

export default Footer;
