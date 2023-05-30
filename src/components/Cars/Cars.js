import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../../services/car.service";
import {carActions} from "../../redux";
import Car from "../Car/Car";

const Cars = () => {

    const dispatch = useDispatch();

    const {cars} = useSelector(state => state.cars);

    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => dispatch(carActions.getAll(value)))
    },[dispatch])

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;