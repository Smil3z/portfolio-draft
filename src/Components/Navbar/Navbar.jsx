import React from "react";
import Logo from "../Logo/Logo.jsx";

function Navbar() {
  return (
    <div className="navbar-layout">
      <Logo />
      <ul className="nav-links">
        <li>Home </li>
        <li>About </li>
        <li>Projects </li>
        <li>Contact </li>
      </ul>
    </div>
  );
}

export default Navbar;

// text-white flex justify-between items-center px-8 h-24 max-w-[1240px] mx-auto
// hidden md:flex
