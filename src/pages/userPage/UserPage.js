import React from 'react';
import Users from "../../components/Users/Users";
import UserForm from "../../components/UserForm/UserForm";

const UserPage = () => {
    return (
        <div>
            <UserForm/>
            <Users/>
        </div>
    );
};

export default UserPage;