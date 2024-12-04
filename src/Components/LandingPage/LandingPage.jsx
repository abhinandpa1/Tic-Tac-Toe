import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Tic Tac Toe Fun!</h1>
            <p className="home-description">
                Enjoy a classic game of Tic Tac Toe with a funny twist! Compete against friends or yourself in this colorful, entertaining version of a timeless game.
            </p>
            <div className="section">
                <h2>Game Rules</h2>
                <ul className="rules-list">
                    <li>Two players take turns marking their symbol (X or O) on the grid.</li>
                    <li>The first player to align three of their symbols in a row, column, or diagonal wins.</li>
                    <li>If all 9 cells are filled and no one wins, it's a draw.</li>
                </ul>
            </div>
            <div className="section">
                <h2>Game Details</h2>
                <p>
                    This version of Tic Tac Toe adds a playful twist with colorful designs, sound effects, and a quirky interface. Perfect for a quick game and lots of laughs!
                </p>
            </div>
            <Link to="/tictac">
                <button className="start-button">Get Started</button>
            </Link>
        </div>
    );
}

export default LandingPage;

