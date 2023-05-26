import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {userService} from "../../services";
import {getUsers} from "../../redux/actions";
import Users from "../../components/Users/Users";

const UserPage = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => dispatch(getUsers(value)))
    }, [dispatch])

    return (
        <div>
            <Users/>
        </div>
    );
};

export default UserPage;