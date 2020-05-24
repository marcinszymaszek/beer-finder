import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import Loader from '../../loader.gif';

const Search = () => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');


    const fetchSearchResults = (updatedPageNo = '', query) => {
        let cancel = "";
        const pageNumber = updatedPageNo ? `&per_page=${updatedPageNo}` : '';
        const searchUrl = `https://api.punkapi.com/v2/beers?beer_name=${query}${pageNumber}`;
        if (cancel) {
            cancel.cancel();
        }
        cancel = axios.CancelToken.source();
        axios.get(searchUrl, {
            cancelToken: cancel.token
        })
            .then((res) => {
                const resultNotFoundMsg = !res.data.length
                    ? 'There are no more search results. Please try a new search..'
                    : '';
                setMessage(resultNotFoundMsg);
                setLoading(false);
                setResults(res.data);
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    setLoading(false);
                    setMessage('Failed to fetch results.Please check network..');
                }
            });
    };


    const handleOnInputChange = (event) => {
        const query = event.target.value;
        if (!query) {
            setQuery(query);
            setResults([]);
            setMessage("");
        } else {
            setQuery(query);
            setLoading(true);
            setMessage("");
            fetchSearchResults(20, query);
        }
    };


    //move to the BeersList component
    const renderSearchResults = () => {
        if (Object.keys(results).length && results.length) {
            return (
                <div className="image-container">
                    {results.map((result) => {
                        return (
                            <div>
                                <img class="beer-img" src={result.image_url} alt={result.name} />
                                <h2>{result.name}</h2>
                            </div>
                        );
                    })}
                </div>
            );
        }
    };



    return (
        <>
            <div className="inline-container">


                <h1 className="app-title">Welcome to the Beer-finder app</h1>
                <label className="search-label" htmlFor="search-input">
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Beer name"
                        value={query}
                        onChange={event => handleOnInputChange(event)}
                    />
                    <i className="fa fa-search search-icon" />
                </label>
            </div>
            {renderSearchResults()}
            {/*Error Message*/}
            {message && <p className="message">{message}</p>}

            {/*Loader*/}
            <img src={Loader} className={`search-loading ${loading ? 'show' : 'hide'}`} alt="loader" />

        </>
    )
}

export default Search;

