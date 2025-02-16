import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Lobby from "./pages/Lobby";
import Leaderboard from "./pages/Leaderboard";
import AuthPage from "./pages/AuthPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />}/>
      </Routes>
    </Router>
  );
};

export default App;
