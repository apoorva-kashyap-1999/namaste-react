import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

//Header Component
const Header = () => {

  const [buttonName,setButtonName]=useState('Login');
  const handleClick=()=>{
    buttonName === 'Login' ? setButtonName('Logout') : setButtonName('Login')
  }
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="btn-login" onClick={handleClick}>{buttonName}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;