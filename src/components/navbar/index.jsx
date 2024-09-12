import React from "react";
import './nav.css'
import { NavLink } from "react-router-dom";
import { router } from "../../routes/routes";
import logo from "../../assests/icons/quiz_logo.jpg"

const Navbar = () => {
    return(
        <div className="nav-container">
            <div className="logo"><img height={50} width={60} src={logo} alt="logo"/></div>
            <ul>
                <li><NavLink to={router.dashBoard}>Dashboard</NavLink></li>
                <li><NavLink to={router.quiz}>Compete</NavLink></li>
                <li><NavLink to={router.about}>About Us</NavLink></li>
                <li><NavLink to={router.contact}>Contact Us</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar