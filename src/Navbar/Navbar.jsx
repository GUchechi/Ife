import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav>
        <div className='container'>
          <div className="logo">
            <img src={logo} alt="logo" width="40px" height="40px" />
          </div>
          <div className={`menu ${toggleIcon ? "show" : ""}`}>
            <p className="menu_text active">Get early Access</p>
          </div>
          <div className="nav-icon" onClick={handleToggle}>
          {toggleIcon ? <AiOutlineClose size={30} /> : <BiMenuAltRight size={30} />}
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
