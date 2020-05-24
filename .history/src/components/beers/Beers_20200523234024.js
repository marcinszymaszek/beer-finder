import React from "react";


const Beers = ({ currentBeers }) => {
    
    const renderSearchBeers = () => {
        if (Object.keys(currentBeers).length && currentBeers.length) {
            return (
                <div className="image-container">
                    {currentBeers.map((beer) => {
                        return (
                            <div key={beer.id}>
                                <img className="beer-img" src={beer.image_url} alt={beer.name} />
                                <h2>{beer.name}</h2>
                            </div>
                        );
                    })}
                </div>
            );
        }
    };


    return (
        <>
            {renderSearchBeers()}
        </>
    )
}


export default Beers;
