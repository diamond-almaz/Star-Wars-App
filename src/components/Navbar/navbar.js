import React from 'react'
import {NavLink} from "react-router-dom";
import './navbar.css'

const Navbar=()=>{
    return (
        <div className="links">
            <NavLink to="/planets" className="links__btn">Planets</NavLink>
            <NavLink to="/statistics" className="links__btn">Statistics</NavLink>
        </div>
    )
}

export default Navbar;