import React from 'react';

const User = ({user}) => {

    const {name, username} = user

    return (
        <div>
            <div>{name}</div>
            <div>{username}</div>
        </div>
    );
};

export default User;