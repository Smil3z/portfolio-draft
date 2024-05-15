import React from "react";
import Logo from "../Logo/Logo.jsx";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <ul className="nav">
        <Logo />
        <li className="list1">Home </li>
        <li className="list1">About </li>
        <li className="list1">Projects </li>
        <li className="list1">Contact </li>
      </ul>
    </>
  );
}

export default Navbar;

// text-white flex justify-between items-center px-8 h-24 max-w-[1240px] mx-auto
// hidden md:flex
