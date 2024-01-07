import React from "react";
import Assortment from "./../images/HeroImage.png"

export default function Hero() {
    return (
        <div className="hero">
            <img className="hero--image" src={Assortment}></img>
            <div className="hero--text">
                <h1>Online Experiences</h1>
                <h3>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</h3>
            </div>
        </div>
    )
}