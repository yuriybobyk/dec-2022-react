import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";


const Car = ({car}) => {

    const dispatch = useDispatch();

    const {id, brand, year, price} = car

    const deleteCar = async () => {
        await dispatch(carActions.deleteCar({id}))
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
