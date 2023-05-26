import React from 'react';

const Comment = ({comment}) => {

    const {name, email, body} = comment;

    return (
        <div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{body}</div>
        </div>
    );
};

export default Comment;