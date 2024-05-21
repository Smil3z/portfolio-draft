import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import VideoBackground from "./Components/VideoBackground/VideoBackground";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <VideoBackground />
      </div>
    </Router>
  );
}

export default App;
