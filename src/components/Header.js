import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//Header Component
const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const handleClick = () => {
    buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login");
  };

  useEffect(() => {
    console.log("useEffect getting called basis buttonName login/logout");
  }, [buttonName]);

  return (
    <div className="flex flex-wrap justify-between bg-orange-300 shadow-lg m-2 rounded-md">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex flex-wrap p-6 m-3">
          <li className="px-3">Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-3 border border-solid border-transparent bg-orange-400 rounded-md mx-2">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 border border-solid border-transparent bg-orange-400 rounded-md mx-2">
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li className="px-3 border border-solid border-transparent bg-orange-400 rounded-md mx-2">
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3 border border-solid border-transparent bg-orange-400 rounded-md mx-2">
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3">Cart</li>
          <button className="btn-login" onClick={handleClick}>
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
