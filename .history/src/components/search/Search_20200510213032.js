import React, { useState, useEffect } from 'react';
import './Search.css';


const Search = () => {

    const [searchValue, setSearchValue] = useState('vsgfd');

    const handleOnChange = event => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="inline-container">
            <div className="input-container">
                <input
                    name="text"
                    type="text"
                    placeholder="Search"
                    onChange={event => handleOnChange(event)}
                    value={searchValue}
                />
            </div>
            <button>Search</button>
        </div>
    )
}

export default Search;


