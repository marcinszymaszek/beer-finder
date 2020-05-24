import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import Loader from '../../loader.gif';
import PageNavigation from '../page-navigation/PageNavigation'

const Search = () => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [totalResults, setTotalResults] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPageNo, setCurrentPageNo] = useState(0);


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
                const total = res.data.total;
                const totalPagesCount = getPagesCount(total, 20);
                const resultNotFoundMsg = !res.data.length
                    ? 'There are no more search results. Please try a new search..'
                    : '';
                setMessage(resultNotFoundMsg);
                setLoading(false);
                setResults(res.data);
                setTotalResults(res.data.total);
                setCurrentPageNo(updatedPageNo);
                setTotalPages(totalPagesCount);
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
            setResults({});
            setMessage("");
            setTotalResults(0);
            setCurrentPageNo(0);
            setTotalPages(0);
        } else {
            setQuery(query);
            setLoading(true);
            setMessage("");
            fetchSearchResults(20, query);
        }
    };


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


    const getPagesCount = (total, denominator) => {
        const divisible = total % denominator === 0;
        const valueToBeAdded = divisible ? 0 : 1;
        return Math.floor(total / denominator) + valueToBeAdded;
    };


    const handlePageClick = (type) => {
        // this.event.preventDefault();
        const updatedPageNo =
            'prev' === type
                ? currentPageNo - 1
                : currentPageNo + 1;
        if (!loading) {
            setLoading(true);
            setMessage("");
            fetchSearchResults(updatedPageNo, query);
        }
    };


    const showPrevLink = 1 < currentPageNo;
    const showNextLink = totalPages > currentPageNo;



    return (
        <>
            <div className="inline-container">
                <PageNavigation
                    loading={loading}
                    showPrevLink={showPrevLink}
                    showNextLink={showNextLink}
                    handlePrevClick={() => handlePageClick('prev')}
                    handleNextClick={() => handlePageClick('next')}
                />

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

            <PageNavigation
                loading={loading}
                showPrevLink={showPrevLink}
                showNextLink={showNextLink}
                handlePrevClick={() => handlePageClick('prev')}
                handleNextClick={() => handlePageClick('next')}
            />

        </>
    )
}

export default Search;

