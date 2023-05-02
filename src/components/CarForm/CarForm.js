import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";


const CarForm = ({setAllCars, carForUpdate, setCarForUpdate  }) => {

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    })

    useEffect(()=>{
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])

    const submit = async (car)=>{
        const {data} = await carsService.create(car);
        setAllCars(prev => !prev);
        reset()
    }

    const update = async (car) =>{
        const {data} = await carsService.updateById(carForUpdate.id, car);
        setAllCars(prev => !prev);
        reset()
        setCarForUpdate(null)

    }

    return (
        <form onSubmit={handleSubmit(carForUpdate? update : submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <div>{errors.brand.message}</div>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <div>{errors.price.message}</div>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <div>{errors.year.message}</div>}
            <button disabled={!isValid}>{carForUpdate? 'Update' : 'Create'}</button>
        </form>
    );
};

export default CarForm;