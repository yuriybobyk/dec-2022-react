import React, {useEffect, useState} from 'react';
import {postService} from "../../api";
import Post from "../Post/Post";
import './Posts.css'

const Posts = () => {

    const [posts, setPosts] = useState([]);

    const [post, setPost] = useState(null)

    useEffect(()=>{
        postService.getAll().then(value => value.data).then(value => setPosts([...value]))
    },[])

    return (
        <div className={'Posts'}>

            {post && <h1>Post Details:
                <div className={'postDetails'}>
            <div>Post ID: {post.id}</div>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
                </div>
            </h1>}
            <h1>Posts:
                <div className={'insidePosts'}>
                {posts.map(post => <Post key={post.id} post={post} setPost={setPost}/>)}
                </div>
            </h1>
        </div>
    );
};

export default Posts;