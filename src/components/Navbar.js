import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router
import "../components/Navbar.css"; // Import CSS file
import logo from "../assets/CodeClashLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar" >
      <div className="nav-container">
      <div >
        <Link to="/" className="nav-logo">
          <img src={logo} alt="" />
        </Link>
      </div>

        {/* Hamburger Menu for Mobile */}
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/lobby">Lobby</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          {/* <li><Link to="/profile">Profile</Link></li> */}
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
