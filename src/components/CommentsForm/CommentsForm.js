import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../api";

const CommentsForm = ({setComments}) => {

    const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm()

    const create = async (data) =>{
        await commentService.create(data).then(({data}) => setComments((prevState) => [...prevState, data]))
        reset()
    }


    return (
        <form onSubmit={handleSubmit(create)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Create Comment</button>
        </form>
    );
};

export default CommentsForm;