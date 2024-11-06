import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [input, setInput] = useState('');

    const handleSearch = () => {
        onSearch(input);
        setInput('');
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter city name"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;
