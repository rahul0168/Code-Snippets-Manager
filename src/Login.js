// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Optional: you can create a CSS file for styling

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Hardcoded credentials
        const validUsername = 'rahuluser';
        const validPassword = 'password@4488';

        if (username === validUsername && password === validPassword) {
            onLogin(); // Call the onLogin prop to indicate successful login
            setError('');
            navigate('/snippets'); // Navigate to snippets page
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
