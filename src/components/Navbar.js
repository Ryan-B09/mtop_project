import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo">
            </div>
            <ul className="navbar menu">
                <li><Link to="/loginpage">login</Link></li>
                <li><a href="/MtopNew 2">New Franchise</a></li>
            </ul>
        </div>
    )
}

export default Navbar