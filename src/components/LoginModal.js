import React from "react";
import "../styles/LogSign.css";
import { Link } from "react-router-dom";
import badge from "../badgee.png.png";
function LoginModal() {
  return (
    <div className="container">
      <div className="modal">
        <img src={badge} className="logo" />
        <div className="buttons">
          <Link to="/SignUp" className="sign-btn btn">
            Sign up
          </Link>
          <Link to="/Login" className="login-btn btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
