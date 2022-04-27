import React from 'react';
import './style.css';

const Search = ({onSearch}) => {
    const handleKeyUp = (e) => {
      onSearch(e.target.value);
    };

    return (
        <div className="container">
            <input className="search" type="text" name="search" onKeyUp={handleKeyUp} placeholder="Hledat"/>
        </div>
    )
}

export default Search;