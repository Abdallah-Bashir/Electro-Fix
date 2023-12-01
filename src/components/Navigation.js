import React from "react";
import badge from "../badgee.png.png";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <div>
      <header>
        <div className="header-left">
          <img src={badge} alt="badge" style={{ width: "10em" }}></img>
        </div>
        <div className="header-right">
          <Link to="/services">Services</Link>
          <Link to="/Login">Sign Up / Login</Link>
          <Link to="/TechSign" className="fixer-button">
            Become a Fixer
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
