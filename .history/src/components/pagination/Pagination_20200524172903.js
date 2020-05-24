import React from "react";
import './Pagination.css';

const Pagination = ({ beersPerPage, totalBeers, paginate }) => {
    const beerNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBeers / beersPerPage); i++) {
        beerNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {beerNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a  href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default Pagination;
