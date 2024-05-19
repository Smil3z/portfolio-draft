import React from "react";
import videoBg from "../VideoBackground/particle-wave.mp4";
import "./VideoBackground.css"; // Import the CSS file

const VideoBackground = () => {
  return (
    <div className="videoBackground">
      <video className="bg" src={videoBg} autoPlay loop muted />
      <h1>Welcome To My Portfolio</h1>
    </div>
  );
};

export default VideoBackground;
