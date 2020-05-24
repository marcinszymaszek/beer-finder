import React, { useState, useEffect } from 'react';
import './Search.css';


const Search = () => {

    const [numberOfUsers, setNumberOfUsers] = useState();

    return (
        <div className="inline-container">
            <div className="input-container">
                <input name="text" type="text" placeholder="Search" />
            </div>
            <button>Search</button>
        </div>
    )
}

export default Search;


