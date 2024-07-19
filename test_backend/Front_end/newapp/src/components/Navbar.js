import React from "react";
import logo from "../img/download.png"; // Assuming you move the image to src/img

export default function Navbar() {
    return (
        <nav className="navbar">
<img src={logo} alt="Logo" className="navbar__logo" />      

<h1 className="header1">this is my fist react app</h1>

  </nav>
    );
}
