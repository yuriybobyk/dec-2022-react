import React from 'react';

const Comment = ({comment}) => {

    const {id, name, body} = comment

    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Comment;