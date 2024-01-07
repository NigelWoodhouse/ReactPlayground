import React from "react";

export default function ContactButtons() {
    return(
        <div className="contactbtn--btn">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <button class="contact--btn"><i class="fa fa-envelope"></i> Email</button>
            <button class="contact--btn"><i class="fa fa-linkedin"></i> Linkedin</button>
        </div>
    )
}