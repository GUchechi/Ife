import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import {BiMenuAltRight} from "react-icons/bi"
import {FaBars} from "react-icons/fa"

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div className="navbar">
      <nav>
        <div className='container'>
          <div className="logo">
            <img src={logo} alt="logo" width="40px" height="40px" />
          </div>
          <div className="menu">
            <p className="menu_text">Get early Access</p>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
