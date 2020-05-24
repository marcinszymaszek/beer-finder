import React, { useState, useEffect } from 'react';
import './Search.css';


const Search = () => {

    return (
        <div className="inline-container">
            <div>
                <input name="text" type="text" placeholder="Search" />
            </div>
            <button>Search</button>
        </div>
    )
}

export default Search;


