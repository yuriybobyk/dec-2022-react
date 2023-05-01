import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../api";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators";


const UserForm = ({setUsers}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const create = async (data) => {
        await userService.create(data).then(({data}) => setUsers((prevState) => [...prevState, data]))
        reset();

    }


    return (
        <form onSubmit={handleSubmit(create)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <div>{errors.name.message}</div>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            {errors.username && <div>{errors.username.message}</div>}
            <button disabled={!isValid}>Create User</button>

        </form>
    );
};

export default UserForm;