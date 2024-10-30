import React from 'react';
import './Footer.css'; // Optional: Import CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Code Snippets. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
