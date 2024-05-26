import React from "react";
import videoBg from "./particle-wave.mp4";
import "./HomePage.css";

const VideoBackground = () => {
  return (
    <div className="videoBackground">
      <video className="bg" src={videoBg} autoPlay loop muted />
      <h1>Welcome To My Portfolio</h1>
    </div>
  );
};

export default VideoBackground;
