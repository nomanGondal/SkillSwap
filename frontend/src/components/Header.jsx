import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  // check if user is logged in (token stored in localStorage after login)
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo / Brand */}
        <div className="logo">
          <Link to="/" className="logo-link">SkillSwap</Link>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/browse" className="nav-link">Browse</Link>
        </nav>

        {/* Right Side Buttons */}
        <div className="auth-buttons">
          {!token ? (
            <>
              <Link to="/login" className="btn btn-outline">Login</Link>
              <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            </>
          ) : (
            <>
              <button onClick={handleProfile} className="btn btn-outline">Profile</button>
              <button onClick={handleLogout} className="btn btn-danger">Logout</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
