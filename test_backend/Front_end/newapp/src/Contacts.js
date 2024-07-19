import React from "react";
import im1 from "./images/phone-icon.png";
import mailIcon from "./images/mail-icon.png";

export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img} alt="Profile" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={im1} alt="Phone Icon" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} alt="Email Icon" />
                <p>{props.email}</p>
            </div>
        </div>
    );
}
