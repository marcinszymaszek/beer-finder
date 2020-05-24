import React, { useState, useEffect } from 'react';
import './Search.css';


const Search = () => {

    const [searchValue, setSearchValue] = useState('');

    const handleOnChange = event => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {

    };

    return (
        <div className="inline-container">
            <div className="input-container">
                <input
                    name="text"
                    type="text"
                    placeholder="Beer name"
                    onChange={event => handleOnChange(event)}
                    value={searchValue}
                />
            </div>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search;


