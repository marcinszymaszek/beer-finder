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
                    ? 'There are no more search results. Please try a new search.'
                    : '';
                setMessage(resultNotFoundMsg);
                setLoading(false);
                setResults(res.data);
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    setLoading(false);
                    setMessage('Failed to fetch results.Please check network');
                }
            });
    };

    const handleOnInputChange = (event) => {
        const query = event.target.value;
        if (!query) {
            setQuery(query);
            setResults({});
            setMessage("");
        } else {
            setQuery(query);
            setLoading(true);
            setMessage("");
            fetchSearchResults(1, query);
        }
    };


    const renderSearchResults = () => {

        if (Object.keys(results).length && results.length) {
            return (
                <div className="results-container">
                    {results.map((result) => {
                        return (
                            <a key={result.id} 
                            // href={url_of_details_page}
                            className="result-items">
                                <div className="image-wrapper">
                                    <img className="image" src={result.image_url} alt={result.name}/>
                                    <div>
                                    <h2>{result.name}</h2>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            );
        }
    };





    return (
        <div className="inline-container">
            <h1 className="app-title">Welcome to the Beer-finder app</h1>
            <div className="input-container">
                <label className="search-label" htmlFor="search-input">
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Beer name"
                        value={query}
                        onChange={event => handleOnInputChange(event)}
                    />
                    <i className="fa fa-search search-icon" />

                    {renderSearchResults()}
                
                </label>

{/*Error Message*/}
{ message && <p className="message">{message}</p> }

{/*Loader*/}
<img  src={Loader} className={`search-loading ${loading ? 'show' : 'hide' }`}  alt="loader"/>

            </div>
        </div>
    )
}

export default Search;


//ok ####################################################################################################


// import React, { useState, useEffect } from 'react';
// import './Search.css';
// import axios from 'axios';

// const Search = () => {

//     const [searchValue, setSearchValue] = useState('');
//     const [beers, setBeers] = useState([]);

//     const handleOnChange = event => {
//         setSearchValue(event.target.value);
//     };

//     const makeApiCall = searchInput => {

//         let searchUrl = `https://api.punkapi.com/v2/beers?beer_name=${searchInput}`;

//         axios.get(searchUrl).then(response => {
//             const beer = response.data;
//             setBeers(beer);

//         })
//             .catch(error => console.log(error));
//     };

//     const handleSearch = () => {
//         makeApiCall(searchValue);
//     };

//     return (
//         <div className="inline-container">
//             <div className="input-container">
//                 <input
//                     name="text"
//                     type="text"
//                     placeholder="Beer name"
//                     onChange={event => handleOnChange(event)}
//                     value={searchValue}
//                 />
//             </div>
//             <button onClick={handleSearch}>Search</button>

//             {beers ?
//                 (<div>
//                     {beers.map((beer, index) => (
//                         <div key={index}>
//                             <img src={beer.image_url} alt="beer-thumbnail" />
//                             <h2>{beer.name}</h2>
//                         </div>))}
//                 </div>)
//                 : (<p>Not found such beer, find another one..</p>)
//             }
//         </div>
//     )
// }

// export default Search;




