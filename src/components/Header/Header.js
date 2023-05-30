import React from 'react';
import {Button} from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import CommentIcon from '@mui/icons-material/Comment';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    return (
        <div>
            <Button variant={"contained"} onClick={() => navigate('users')}>Users
                <PeopleIcon/>
            </Button>
            <Button variant={"contained"} onClick={() => navigate('comments')}>Comments
                <CommentIcon/>
            </Button>
            <Button variant={'contained'} onClick={() => navigate('cars')}>Cars
                <DirectionsCarIcon/>
            </Button>
        </div>
    );
};

export default Header;