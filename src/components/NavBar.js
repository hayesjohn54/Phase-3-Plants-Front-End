import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <header className="nav">
            <a><NavLink exact="true" to="/">🏠</NavLink></a>
            <a><NavLink to="/login">🪵</NavLink></a>
            <a><NavLink to="/plantcontainer">🌱</NavLink></a>
            
            
            
        </header>
    )
}

export default NavBar;