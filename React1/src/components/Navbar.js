import React from "react";
import Logo from "./../images/react-logo.svg"

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={Logo} width = "60px"></img>
            <h3 className="nav--logo_text"> ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
};