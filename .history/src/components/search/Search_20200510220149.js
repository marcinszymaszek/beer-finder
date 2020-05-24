import React, { useState, useEffect } from 'react';
import './Search.css';
import axios from 'axios';

const Search = () => {

    const [searchValue, setSearchValue] = useState('');

    const handleOnChange = event => {
        setSearchValue(event.target.value);
    };

    const makeApiCall = searchInput => {

        let searchUrl = `https://api.punkapi.com/v2/beers?beer_name=${searchInput}`;

        axios(searchUrl).then(response => {
            return response.json();
        })
            .then(jsonData => {
                console.log(jsonData);
            })
            .catch(error => console.log(error));

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


