import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

//Header Component
const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const handleClick = () => {
    buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login");
  };

  useEffect(() => {
    console.log("useEffect getting called basis buttonName login/logout");
  }, [buttonName]);

  //Selector --> subscribing to our store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-wrap justify-between bg-green-100 shadow-lg m-2 rounded-md">
      <div className="logo-container">
        <img className="w-44 border rounded" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex flex-wrap p-6 m-3">
          <li className="px-3">Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-3 hover:bg-green-200 rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 hover:bg-green-200 rounded-md">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3  hover:bg-green-200 rounded-md">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3  hover:bg-green-200 rounded-md">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3 text-lg hover:bg-green-200 rounded-md">
            <Link to="/cart">
              Cart 🛒 {cartItems.length == 0 ? null : cartItems.length}
            </Link>
          </li>
          <button
            className="px-3 hover:bg-green-300 rounded-md"
            onClick={handleClick}
          >
            {buttonName}
          </button>
          {onlineStatus ? (
            <li className="px-3 font-bold  hover:bg-green-200 rounded-md">
              {loggedInUser}
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
