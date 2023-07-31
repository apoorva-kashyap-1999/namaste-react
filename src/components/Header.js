import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

//Header Component
const Header = () => {

  const [buttonName,setButtonName]=useState('Login');
  const handleClick=()=>{
    buttonName === 'Login' ? setButtonName('Logout') : setButtonName('Login')
  }

  useEffect(()=>{console.log('useEffect getting called basis buttonName login/logout')},[buttonName]);

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
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="btn-login" onClick={handleClick}>{buttonName}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;