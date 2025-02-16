import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AuthPage.css"; // Import CSS


const AuthPage = () => {
  const navigate = useNavigate();
  

  const handleLogin = () => {
    // Authentication logic will go here later
    navigate("/lobby"); // Redirect to Lobby after login
  };

  return (
    
    <div>
    {
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Welcome to Quiz Battle!</h2>
        <p className="auth-text">Please sign in to continue.</p>
        <button className="auth-button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
    }
    </div>
  );
};

export default AuthPage;
