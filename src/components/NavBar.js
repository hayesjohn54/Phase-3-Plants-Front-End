import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <header className="nav">
            <h1 className="nav-title"></h1>
            <a><NavLink exact="true" to="/">🏠</NavLink></a>
            
            <a><NavLink to="/login">🪵</NavLink></a>
            <a><NavLink to="/plantcontainer">🌱</NavLink></a>
            <a><NavLink to="/NewPlantform">Create</NavLink></a>
            <a><NavLink to="/usercontainer">User</NavLink></a>
        </header>
    )
}

export default NavBar;