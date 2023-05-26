import React from 'react';

const Post = ({post}) => {

    const {title, body} = post

    return (
        <div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export default Post;