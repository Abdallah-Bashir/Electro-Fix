import React from "react";
import "../styles/Hero.css";
import SearchIcon from "@mui/icons-material/Search";
function Hero() {
  return (
    <div className="hero">
      <p>
        Tired of waiting for unreliable handymen? With our website, you can find
        and hire
      </p>
      <p>skilled and vetted fixers in just a few clicks</p>
      <div className="search-bar">
        <input
          placeholder="what do you need help with? "
          aria-invalid="false"
          type="text"
        ></input>
        <SearchIcon style={{ color: "black" }} className="search-icon" />
      </div>
    </div>
  );
}

export default Hero;
