import React, { useState, useEffect } from 'react';
import './Search.css';


const Search = () => {

    return (
        <div className="inline-container">
            <input name="text" type="text" placeholder="Search" />
            <button>Search</button>
        </div>
    )
}

export default Search;


