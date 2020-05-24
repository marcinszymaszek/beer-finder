import React from "react";
import './Pagination.css';

const Pagination = ({ beersPerPage, totalBeers, paginate }) => {
    const beerNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBeers / beersPerPage); i++) {
        beerNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination" id="beer-list-pagination">
                {beerNumbers.map(number => (
                    <li key={number} className="page-item">
                        <div  onClick={() => {paginate(number)}} className="page-link" id="beer-pag-link">
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default Pagination;
