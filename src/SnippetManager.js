// src/SnippetManager.js
import React, { useEffect, useState } from 'react';
import './SnippetManager.css';

const SnippetManager = ({ loggedIn }) => {
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

    return (
        <>
      
        <div className="snippet-manager">
            {loggedIn && (
                <>
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
                </>
            )}

        
        </div>
        <h2>Saved Snippets</h2>
            <ul>
                {snippets.map(snippet => (
                    <li key={snippet.id}>
                        <h3>{snippet.title}</h3>
                        <pre><code>{snippet.code}</code></pre>
                        {loggedIn && (
                            <button onClick={() => deleteSnippet(snippet.id)}>Delete</button>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default SnippetManager;
