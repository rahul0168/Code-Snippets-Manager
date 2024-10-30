import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>If you have any questions or feedback, feel free to reach out!</p>
            <div className="contact-info">
                <h2>My Name</h2>
                <p>Rahul Naik Mule</p>
                <h3>Email</h3>
                <p><a href="mailto:rahulnaikmule@gmail.com">rahulnaikmule@gmail.com</a></p>
            </div>
        </div>
    );
};

export default Contact;
