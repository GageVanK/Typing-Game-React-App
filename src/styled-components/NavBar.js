import styled from "styled-components"; 
import { Link } from "react-router-dom";

export const StyledNavBar = styled.nav`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 20px;
`

export const StyledNavDiv = styled.div`
    font-size: 19px;
    & > a 
    {
    text-decoration: none;
    
    } 
`

export const StyledUL = styled.ul`
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 30px;
    align-items: center;
    
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 14px;
    transition: color 200ms;
    &:hover {
        color: #ff0000;
    }
    
`



