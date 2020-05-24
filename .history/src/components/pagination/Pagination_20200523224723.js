import React from "react";


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
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default Pagination;