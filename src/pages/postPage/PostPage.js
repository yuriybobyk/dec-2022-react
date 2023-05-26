import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {postService} from "../../services";
import {getPosts} from "../../redux/actions";
import Posts from "../../components/Posts/Posts";

const PostPage = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        postService.getAll().then(value => value.data).then(value => dispatch(getPosts(value)))
    },[dispatch])

    return (
        <div>
          <Posts/>
        </div>
    );
};

export default PostPage;