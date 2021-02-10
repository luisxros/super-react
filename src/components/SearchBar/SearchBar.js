import React from 'react';
import './SearchBar.css';

function SearchBar({keyword, setKeyword}) {
    return (
        <div className="Bar">
            <input 
            type="text"
            key='random1'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            />
        </div>
    );
}