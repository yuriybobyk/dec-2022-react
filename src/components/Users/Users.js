import React, {useEffect, useState} from 'react';
import {userService} from "../../api";
import User from "../User/User";
import UserForm from "../UserForm/UserForm";

const Users = () => {

    const [users, setUsers] = useState([])



    useEffect(()=>{
        userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    },[])

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;