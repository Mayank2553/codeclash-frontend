import React from "react";
import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-container">
      <h1 className="landing-title">Welcome to CodeClash ⚔️</h1>
      <p className="landing-description">
        A real-time competitive quiz platform where students battle it out!
      </p>
      <button onClick={() => navigate("/auth")} className="landing-button">Start Playing 🚀</button>
    </div>
  );
};

export default LandingPage;
