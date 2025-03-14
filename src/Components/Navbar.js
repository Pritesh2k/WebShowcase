import React from "react";
import "./CSS/navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo">
        <span>MyLogo</span> {/* Replace with your logo or text */}
      </div>
      <ul>
        <li><a href="#section-1">Home</a></li>
        <li><a href="#section-2">About</a></li>
        <li><a href="#section-3">Services</a></li>
        <li><a href="#section-4">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;