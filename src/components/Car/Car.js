import React from 'react';
import {carsService} from "../../services";

const Car = ({car, setCarForUpdate, setAllCars }) => {

    const {id, brand, price, year} = car

    const deleteCar = async () =>{
        await carsService.deleteById(id);
        setAllCars(prev => !prev);

    }

    return (
        <div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=>setCarForUpdate(car)} >Update</button>
            <button onClick={()=>deleteCar()}>Delete</button>
        </div>
    );
};

export default Car;