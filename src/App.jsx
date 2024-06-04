import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
