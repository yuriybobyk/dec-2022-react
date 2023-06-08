import React from 'react';
import {Button} from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    return (
        <div>
            <Button variant={'contained'} onClick={() => navigate('cars')}>Cars
                <DirectionsCarIcon/>
            </Button>
        </div>
    );
};

export default Header;
