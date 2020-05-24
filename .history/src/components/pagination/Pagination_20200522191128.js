import React from "react";


const Pagination = ({ currentPage, totalBeers }) => {
    const beerNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBeers / currentPage); i++) {
        beerNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {beerNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default Pagination;
