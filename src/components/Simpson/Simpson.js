import React from 'react';

const Simpson =  ( {simpson} ) => {

    const {id, name, surname, age, info, photo} = simpson;

    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Surname: {surname}</div>
            <div>Age: {age}</div>
            <div>Info about{name} : {info}</div>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default Simpson;