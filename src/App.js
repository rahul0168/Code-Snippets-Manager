import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import SnippetPage from './SnippetPage';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About'; // Import About component
import './App.css'; // Optional: Add your CSS here
import Contact from './Contact'; // Import Contact component

const App = () => {
    const [snippets, setSnippets] = useState([]);
    const [loading, setLoading] = useState(true); // For loading state
    const [loggedIn, setLoggedIn] = useState(false); // User authentication state

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
        setLoggedIn(isLoggedIn);

        const fetchSnippets = async () => {
            try {
                const response = await fetch('/snippets.json'); // Adjust path if necessary
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSnippets(data); // Set the snippets state
            } catch (error) {
                console.error('Error fetching snippets:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchSnippets(); // Call the fetch function
    }, []);

    const handleLogin = () => {
        setLoggedIn(true);
        localStorage.setItem('loggedIn', 'true');
    };

    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.removeItem('loggedIn');
    };

    const deleteSnippet = (id) => {
        console.log(`Delete snippet with id: ${id}`);
        setSnippets(snippets.filter(snippet => snippet.id !== id)); // Remove the deleted snippet
    };

    return (
        <Router>
            <div>
                <Navbar />
                <Routes> {/* Use Routes instead of Switch */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/" element={
                        <div className="snippet-container">
                            {loading ? (
                                <div>Loading snippets...</div>
                            ) : (
                                <SnippetPage snippets={snippets} loggedIn={loggedIn} deleteSnippet={deleteSnippet} />
                            )}
                            {loggedIn ? (
                               <div className='w-100'>
                                <button onClick={handleLogout}>Logout</button>
                                </div>
                            ) : (
                                <div className='w-100 d-none'>
                                    <h2>Please Log In</h2>
                                    <button onClick={handleLogin}>Login</button>
                                </div>
                            )}
                        </div>
                    } />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
