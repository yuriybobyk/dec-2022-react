import React from 'react';

const Character = ({character}) => {

    const {id, name, status, species, gender, image} = character

    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Status: {status}</div>
            <div>Species: {species}</div>
            <div>Gender: {gender}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;