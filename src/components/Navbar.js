import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Make sure this path is correct according to your project structure

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);  // State to manage toggle

    const toggleNavbar = () => {
        setIsOpen(!isOpen);  // Toggle the state between true and false
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/">Career Pathway Advisor</Link>
            </div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`} id="navbarLinks">
                <Link to="/dashboard">Home</Link>
                <Link to="/about">About</Link>
                
                <Link to="/my-account">My Account</Link>
            </div>
            <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} id="navbarToggle" onClick={toggleNavbar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Navbar;
