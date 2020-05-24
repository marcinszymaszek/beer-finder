import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import Pagination from '../pagination/Pagination';
import Beers from '../beers/Beers';
import Form from '../form/Form';
import Loader from '../../loader.gif';

const Search = () => {

    const [query, setQuery] = useState('');
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [beersPerPage, setBeersPerPage] = useState(10);


    const fetchSearchBeers = (updatedPageNo = '', query) => {
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
            setBeers([]);
            setMessage("");
        } else {
            setQuery(query);
            setLoading(true);
            setMessage("");
            fetchSearchBeers(80, query);
        }
    };

    // Get current beers
    const indexOfLastBeer = currentPage * beersPerPage;
    const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
    const currentBeers = beers.slice(indexOfFirstBeer, indexOfLastBeer);

    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <>
            <div className="inline-container">
                <h1 className="app-title">Welcome to the Beer-finder app</h1>
                <Form handleOnInputChange={handleOnInputChange} query={query} />
            </div>
            <Beers currentBeers={currentBeers} />
            <Pagination beersPerPage={beersPerPage}
                totalBeers={beers.length}
                paginate={paginate}
            />

            {message && <p className="message">{message}</p>}

            <img src={Loader} className={`search-loading ${loading ? 'show' : 'hide'}`} alt="loader" />

        </>
    )
}

export default Search;

