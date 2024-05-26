import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
