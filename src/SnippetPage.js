// src/SnippetPage.js
import React, { useEffect, useState } from 'react';
import './SnippetManager.css';

const SnippetPage = ({ loggedIn }) => {
    const [snippets, setSnippets] = useState([]);
    const [title, setTitle] = useState('');
    const [code, setCode] = useState('');

    useEffect(() => {
        const storedSnippets = JSON.parse(localStorage.getItem('snippets')) || [];
        setSnippets(storedSnippets);
    }, []);

    const addSnippet = () => {
        const newSnippet = {
            id: Date.now(),
            title,
            code,
        };

        const updatedSnippets = [...snippets, newSnippet];
        setSnippets(updatedSnippets);
        localStorage.setItem('snippets', JSON.stringify(updatedSnippets));

        setTitle('');
        setCode('');
    };

    const deleteSnippet = (id) => {
        const updatedSnippets = snippets.filter(snippet => snippet.id !== id);
        setSnippets(updatedSnippets);
        localStorage.setItem('snippets', JSON.stringify(updatedSnippets));
    };
    const [searchTerm, setSearchTerm] = useState('');

    // Filter snippets based on the search term
    const filteredSnippets = snippets.filter(snippet =>
        snippet.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
      
            {loggedIn && (
                <>
                 <div className="snippet-manager">
                    <h1>Code Snippet Manager</h1>
                    <input
                        type="text"
                        placeholder="Snippet Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Your Code Here"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                        rows="6"
                    />
                    <button onClick={addSnippet}>Add Snippet</button>
                    </div>
                </>
            )}

        
       
<div className="snippet-page">
            <h2>Saved Snippets</h2>
            <input
                type="text"
                placeholder="Search snippets..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="snippet-container">
                {filteredSnippets.length > 0 ? (
                    filteredSnippets.map(snippet => (
                        <div key={snippet.id} className="snippet-item">
                            <h3 className="snippet-title">{snippet.title}</h3>
                            <pre className="snippet-code"><code>{snippet.code}</code></pre>
                            {loggedIn && (
                                <button className="delete-button" onClick={() => deleteSnippet(snippet.id)}>
                                    Delete
                                </button>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No snippets found!</p>
                )}
            </div>
        </div>

        </>
    );
};

export default SnippetPage;
