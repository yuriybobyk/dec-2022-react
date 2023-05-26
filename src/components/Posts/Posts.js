import React from 'react';
import {useSelector} from "react-redux";
import Post from "../Post/Post";

const Posts = () => {

    const {posts} = useSelector(state => state.postReducer);



    return (
        <div>
            {posts && posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;