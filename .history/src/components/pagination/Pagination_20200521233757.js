import React from "react";


const Pagination = ({ beersPerPage, totalBeers }) => {
    const beerNumbers = [];


    for (let i; i <= Math.ceil(totalBeers / beersPerPage); i++) {
        beerNumbers.push(i);
    }

    return (
        // <nav>
        //     <ul className="pagination">
        //         {beerNumbers.map(number => (
        //             <li key={number} className="page-item">
        //                 <a href="!#" className="page-link">
        //                     {number}
        //                 </a>
        //             </li>
        //         ))}
        //     </ul>
        // </nav>
        <div>dsadasds</div>
    )
}


export default Pagination;