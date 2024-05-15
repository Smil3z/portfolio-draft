import React from "react";
import logoImage from "./Smil3z_IT-Logo.png";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logoImage} alt="logo" className="logo-img" />
    </div>
  );
}

export default Logo;
