import React from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    return (
        <div>
            <Button onClick={()=>navigate('users')} variant={"contained"}>USERS</Button>
            <Button onClick={()=>navigate('posts')} variant={"contained"}>POSTS</Button>
            <Button onClick={()=>navigate('comments')} variant={"contained"}>COMMENTS</Button>
        </div>
    );
};

export default Header;