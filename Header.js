import { useState } from "react";
import { LOGO_URL } from "../Utils.js/contents";
import { Link } from "react-router-dom";

export const Header = () => {

const [btnNameReact, setBtnNameReact] = useState("login");    //setBtnNameReact is used to update the btnNameReact i.e. LOGOUT

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL} //dont use "LOGO_URL" i.e. " " this sign
          alt="Food Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
          <Link to = "/">Home</Link>  {/*using link instead of a href link  i.e. link to /contact or contact.js*/}
          </li>
          <li>
          <Link to = "/about">About</Link>  {/*using link instead of a href link  i.e. link to /contact or contact.js*/}
          </li>
          <li>
            <Link to = "/contact">Contact</Link>  {/*using link instead of a href link  i.e. link to /contact or contact.js*/}
          </li>
          <li>Cart</li>

          <button className="login"
          onClick={() => {      //useState
            //below is ternary operator and basically it is IF-ELSE statement short form
            //condition ? expressionIfTrue : expressionIfFalse
            btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
          }}
          >
          {btnNameReact}   
          </button>

        </ul>
      </div>
    </div>
  );
};

export default Header;
