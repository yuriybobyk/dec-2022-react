import React from 'react';
import Cars from "../../components/Cars/Cars";
import CarForm from "../../components/CarForm/CarForm";
import {useSelector} from "react-redux";

const CarPage = () => {

    const {loading, error } = useSelector(state => state.cars)

    return (
        <div>
            <CarForm/>
            {loading && <h3>Loading...</h3>}
            {error && <h3>Error</h3>}
            <Cars/>
        </div>
    );
};

export default CarPage;
