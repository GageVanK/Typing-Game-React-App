import React from "react";
import { StyledNavBar, StyledUL, StyledLink, StyledNavDiv } from "../styled-components/NavBar";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <StyledNavBar>
       
            <StyledNavDiv>
                <Link to="/">Gage's Typing React Game</Link>
            </StyledNavDiv>
            <StyledUL>
                <li><StyledLink to="/game">Game</StyledLink></li>
                <li><StyledLink to="/highScores">High Scores</StyledLink></li>
            </StyledUL>
        </StyledNavBar>
    );
}

export default NavBar;