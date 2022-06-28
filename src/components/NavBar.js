import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
            </div>
            <ul>
                <li><Link to="/game">Game</Link></li>
                <li><Link to="/highScores">High Scores</Link></li>
                <li><Link to="/gameOver">Game Over</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;