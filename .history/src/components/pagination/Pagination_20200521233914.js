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

        <nav>
            <ul className="pagination">
 
                    <li className="page-item">
                        <a href="!#" className="page-link">
                            hgfgh
                        </a>
                    </li>

            </ul>
        </nav>


    )
}


export default Pagination;
