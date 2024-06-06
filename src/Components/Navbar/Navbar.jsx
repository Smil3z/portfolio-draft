import React from "react";
import Logo from "../Logo/Logo.jsx";
import "./Navbar.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul className="nav">
        <Logo />
        <Link className="list1" to="/">
          Home
        </Link>
        <Link className="list1" to="about">
          About
        </Link>
        <Link className="list1" to="projects">
          Projects
        </Link>
        <Link className="list1" to="contact">
          Contact
        </Link>
      </ul>
    </>
  );
}

export default Navbar;

// text-white flex justify-between items-center px-8 h-24 max-w-[1240px] mx-auto
// hidden md:flex
