import React from 'react';
import './Navbar.css'; // Optional: Import CSS for styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Code Snippets</div>
            <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li> {/* Add About link */}
                <li><Link to="/contact">Contact Us</Link></li> {/* Add Contact Us link */}

            </ul>
        </nav>
    );
};

export default Navbar;
