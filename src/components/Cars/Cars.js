import React, {useEffect, useState} from 'react';
import {carsService} from "../../services";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {

    const [cars, setCars] = useState([]);
    const [allCars, setAllCars] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);


    useEffect(()=>{
        carsService.getAll().then(value => value.data).then(value => setCars(value));
    }, [allCars])

    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate} />
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setAllCars={setAllCars} />)}
        </div>
    );
};

export default Cars;