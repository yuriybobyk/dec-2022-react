import React from 'react';
import Cars from "../../components/Cars/Cars";
import CarForm from "../../components/CarForm/CarForm";

const CarPage = () => {
    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export default CarPage;