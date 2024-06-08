import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
