import React from "react";

export default function TravelCard(props) {
    return(
        <div className="travelcard">
            <img className="travelcard--image" src={props.item.image}></img>
            <div className="travelcard--items">
            <h1 className="travelcard--title">{props.item.title}</h1>
            <h6 className="travelcard--subtitle">{props.item.location} | {props.item.date}</h6>
            <h5 className="travelcard--description">{props.item.description}</h5>
            </div>
        </div>
    )
}