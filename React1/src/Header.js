import React from "react"
import logo from './logo.svg';

export default function Header() {
    return (
      <header>
        <nav className="nav">
          <img className = "nav-logo" src = {logo}></img>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }