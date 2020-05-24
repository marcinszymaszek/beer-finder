import React, { useState, useEffect } from 'react';
import './Search.css';
import axios from 'axios';

const Search = () => {

    const [searchValue, setSearchValue] = useState('');
    const [beers, setBeers] = useState({beers: []});

    const handleOnChange = event => {
        setSearchValue(event.target.value);
    };

    const makeApiCall = searchInput => {

        let searchUrl = `https://api.punkapi.com/v2/beers?beer_name=${searchInput}`;

        axios(searchUrl).then(response => {
            return response.json();
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log(error));
    };

    const handleSearch = () => {
        makeApiCall(searchValue);
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

            {/* {beers ?
                (<div>
                    {beers.map((beer, index) => (
                        <div key={index}>
                            <h1>{beer.name}</h1>
                            <img src={beer.image_url} alt="beer-thumbnail" />
                        </div>))}
                </div>)
                : (<p>Not found such beer, find another one..</p>)
            } */}
        </div>
    )
}

export default Search;


