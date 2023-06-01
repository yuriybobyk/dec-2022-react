import React from 'react';
import Comments from "../../components/Comments/Comments";
import CommentForm from "../../components/CommentForm/CommentForm";

const CommentPage = () => {
    return (
        <div>
            <CommentForm/>
            <Comments/>
        </div>
    );
};

export default CommentPage;