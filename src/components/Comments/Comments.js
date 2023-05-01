import React, {useEffect, useState} from 'react';
import {commentService} from "../../api";
import Comment from "../Comment/Comment";

import CommentsForm from "../CommentsForm/CommentsForm";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        commentService.getAll().then(value => value.data).then(value => setComments([...value]))
    }, [])

    return (
        <div>
            <CommentsForm setComments={setComments}/>
            <hr/>
            {comments.map(comment =><Comment key={comment.id} comment={comment}/> )}
        </div>
    );
};

export default Comments;