import React from "react";
import { useState } from "react";
import "./NavBar.css";
import logo from "../Assets/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" width="35px" height="35px" />
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {clicked ? <AiOutlineClose size={30}  className='close'/> : <BiMenuAltRight size={30} className='open'/>}
      </div>
      <span className={clicked ? "menu-list" : "menu-list close"}>
        Get early Access
      </span>
    </nav>
  );
};

export default NavBar;
