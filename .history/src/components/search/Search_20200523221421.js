import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import Pagination from '../pagination/Pagination';
import Loader from '../../loader.gif';

const Search = () => {

    const [query, setQuery] = useState('');
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [beersPerPage, setBeersPerPage] = useState(6);




    const fetchSearchBeers = (query) => {
        let cancel = "";
        // const pageNumber = updatedPageNo ? `&per_page=${updatedPageNo}` : '';
        // const searchUrl = `https://api.punkapi.com/v2/beers?beer_name=${query}${pageNumber}`;

        const searchUrl = `https://api.punkapi.com/v2/beers?beer_name=${query}`;
        if (cancel) {
            cancel.cancel();
        }
        cancel = axios.CancelToken.source();
        axios.get(searchUrl, {
            cancelToken: cancel.token
        })
            .then((res) => {
                const resultNotFoundMsg = !res.data.length
                    ? 'There are no more search beers. Please try a new search..'
                    : '';
                setMessage(resultNotFoundMsg);
                setLoading(false);
                setBeers(res.data);
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    setLoading(false);
                    setMessage('Failed to fetch beers.Please check network..');
                }
            });
    };


    const handleOnInputChange = (event) => {
        const query = event.target.value;
        if (!query) {
            setQuery(query);
            setBeers([]);
            setMessage("");
        } else {
            setQuery(query);
            setLoading(true);
            setMessage("");
            fetchSearchBeers(query);
        }
    };

    // Get current beers
    const indexOfLastBeer = currentPage * beersPerPage;
    const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
    const currentBeers = beers.slice(indexOfFirstBeer, indexOfLastBeer);


    //move to the Beers component with props
    const renderSearchbeers = () => {
        if (Object.keys(currentBeers).length && currentBeers.length) {
            return (
                <div className="image-container">
                    {currentBeers.map((result) => {
                        return (
                            <div>
                                <img className="beer-img" src={result.image_url} alt={result.name} />
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
            {renderSearchbeers()}
            <Pagination beersPerPage={beersPerPage} totalBeers={beers.length}/>
            {/*Error Message*/}
            {message && <p className="message">{message}</p>}

            {/*Loader*/}
            <img src={Loader} className={`search-loading ${loading ? 'show' : 'hide'}`} alt="loader" />

        </>
    )
}

export default Search;

