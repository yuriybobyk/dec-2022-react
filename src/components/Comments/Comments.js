import React from 'react';
import {useSelector} from "react-redux";
import Comment from "../Comment/Comment";

const Comments = () => {

    const {comments} = useSelector(state => state.commentReducer)

    return (
        <div>

            {comments && comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export default Comments;