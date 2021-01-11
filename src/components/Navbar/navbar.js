import React from 'react'
import {NavLink} from "react-router-dom";
import './navbar.css'

const Navbar=()=>{
    console.log('Прорисовка Navbar')
    return (
        <div className="links">
            <NavLink to="/planets" className="links__btn" >
                <button type="button" className="btn btn-outline-primary">Planets</button></NavLink>
            <NavLink to="/statistics" className="links__btn">
                <button type="button" className="btn btn-outline-primary">Statistics</button></NavLink>

        </div>
    )
}

export default Navbar;