import React, { useState, useEffect } from 'react';
import './Search.css';
import axios from 'axios';

const Search = () => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');


    return (
        <div className="inline-container">
            <h1 className="app-title">Welcome to the Beer-finder app</h1>
            <div className="input-container">
                <label className="search-label" htmlFor="search-input">
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Beer name"
                        value=""
                    />
                    <i className="fa fa-search search-icon" />
                </label>
            </div>

            }
        </div>
    )
}

export default Search;


