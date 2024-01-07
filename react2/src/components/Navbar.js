import React from "react";
import logo from "./../images/Airbnb-logo.jpg"

export default function Navbar () {
    return (
        <nav className="navbar">
            <img className="navbar--logo" src={logo} height="50px"></img>
        </nav>
    )
}