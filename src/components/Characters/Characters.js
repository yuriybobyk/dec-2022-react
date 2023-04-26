import React from 'react';
import Character from "../Character/Character";

const characters = [
    {
        "id": 37,
        "name": "Beth Sanchez",
        "status": "Alive",
        "species": "Human",
        "gender": "Female",
        "image": "https://rickandmortyapi.com/api/character/avatar/37.jpeg"
    },
    {
        "id": 100,
        "name": "Bubonic Plague",
        "status": "Dead",
        "species": "Disease",
        "gender": "unknown",
        "image": "https://rickandmortyapi.com/api/character/avatar/100.jpeg",
    },
    {
        "id": 190,
        "name": "Keara",
        "status": "Alive",
        "species": "Alien",
        "gender": "Female",
        "image": "https://rickandmortyapi.com/api/character/avatar/190.jpeg",
    },
    {
        "id": 276,
        "name": "Rat Boss",
        "status": "Dead",
        "species": "Animal",
        "gender": "unknown",
        "image": "https://rickandmortyapi.com/api/character/avatar/276.jpeg",
    },
    {
        "id": 382,
        "name": "Worldender",
        "status": "Dead",
        "species": "Alien",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/382.jpeg",
    },
    {
        "id": 658,
        "name": "Sonia Sotomayor",
        "status": "Alive",
        "species": "Human",
        "gender": "Female",
        "image": "https://rickandmortyapi.com/api/character/avatar/658.jpeg",
    }
]

const Characters = () => {
    return (
        <div>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export default Characters;