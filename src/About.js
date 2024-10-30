import React from 'react';
import './About.css'; // Optional: Add your CSS for About page

const About = () => {
    return (
        <div className="about-container">
        <h1>About This Project</h1>
        <p>
            This project is a simple code snippet manager built with React. 
            Users can view saved code snippets, and those with access can manage their snippets effectively.
        </p>
        <p>
            The application fetches snippets from a JSON file and displays them in a user-friendly format. 
            It includes a static login mechanism to simulate user authentication, enhancing snippet management functionality.
        </p>
        <p>
            This project demonstrates effective state management in React, utilizing local storage for user sessions 
            and managing asynchronous data fetching for a seamless experience.
        </p>
        <h2>Features</h2>
        <ul>
            <li>View saved code snippets.</li>
            <li>Manage snippets with secure access.</li>
            <li>Responsive design for optimal user experience.</li>
        </ul>
    </div>
    );
};

export default About;
