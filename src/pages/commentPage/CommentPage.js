import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {commentService} from "../../services";
import {getComments} from "../../redux/actions";
import Comments from "../../components/Comments/Comments";

const CommentPage = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        commentService.getAll().then(value => value.data).then(value => dispatch(getComments(value)))
    },[dispatch])

    return (
        <div>
            <Comments/>
        </div>
    );
};

export default CommentPage;