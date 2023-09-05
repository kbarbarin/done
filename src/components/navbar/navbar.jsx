import React from "react";
import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <section className="navbar-projects">
                <div className="square"></div>
                <div className="square"></div>
            </section>
            <section className="navbar-profile">
            <div className="square"></div>
            </section>
        </nav>
    );
}