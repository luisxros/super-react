import React from 'react';
import './SearchBar.css';

function SearchBar({keyword, setKeyword}) {

    

    return (
        <div className="Bar">
            <input 
            key='random1'
            value={keyword}
            placeholder={'Search hero/villain'}
            onChange={(e) => setKeyword(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;