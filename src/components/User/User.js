import React from 'react';

const User = ({user}) => {

    const { name, username} = user

    return (
        <div>
            <div>Name: {name}</div>
            <div>UserName: {username}</div>
        </div>
    );
};

export default User;