import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Make sure to add the necessary CSS styles in this file

function Header() {
  return (
    <div className="header-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <img
            alt="Logo"
            src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/tic-tac-toe.png"
            width="30"
            height="30"
            className="logo"
          />
          <span className="brand-name">Tic Tac Toe Fun!</span>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/tictac" className="nav-link">Game</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;


