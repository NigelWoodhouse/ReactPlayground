import React from "react";
import logo from "./../images/ngb.png"

export default function Header () {
    return (
        <nav className="header">
            <img className="header--image" src={logo}></img>
            <h1>Nigel Travel Journal</h1>
        </nav>
    )
}