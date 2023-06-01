import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";
import {carService} from "../../services/car.service";

const Car = ({car}) => {

    const dispatch = useDispatch();

    const {id, brand, year, price} = car

    const deleteCar = async () => {
        await carService.deleteById(id)
        dispatch(carActions.changeTrigger())
    }

    return (
        <div>
            <div>{brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={deleteCar} >delete</button>
        </div>
    );
};

export default Car;