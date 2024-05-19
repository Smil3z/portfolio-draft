import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import VideoBackground from "./Components/VideoBackground/VideoBackground";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <VideoBackground />
      </div>
    </>
  );
}

export default App;
