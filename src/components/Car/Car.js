import React from 'react';

const Car = ({car}) => {

    const {brand, year, price} = car

    return (
        <div>
            <div>{brand}</div>
            <div>{price}</div>
            <div>{year}</div>
        </div>
    );
};

export default Car;