import React from 'react';

import './Post.css'

const Post = ({post, setPost}) => {

    const {id, title} = post

    return (
        <div className={'Post'}>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <button className={'btn'} onClick={()=> setPost(post)}>Post Details</button>
        </div>
    );
};

export default Post;