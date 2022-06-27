import React from "react";
import "./index.css";
import logo from "./img/sport-logo.png";
function Nav() {
  return (
    <nav className="nav-top">
      <div className="logo-with-text-container">
        <img className="logo-img" src={logo} alt="sport-logo" />
        <h1 className="text-for-logo">book & play</h1>
      </div>
      <div className="nav-buttons-container">
        <button className="become-partner-btn nav-btn">Become a partner</button>
        <button className="sign-up-btn nav-btn">Sign Up</button>
        <button className="sign-in-btn nav-btn">Sign In</button>
      </div>
    </nav>
  );
}

export default Nav;
