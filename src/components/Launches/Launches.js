import React, {useEffect, useState} from 'react';
import {launchService} from "../../api";

import Launch from "../Launch/Launch";

const Launches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(()=>{
        launchService.getAll().then(value => value.data).then(value => setLaunches([...value]));
    })

    return (
        <div>
            {launches.filter(value => value.launch_year !== "2020").map(launch => <Launch key={launch.flight_number} laucnh={launch}/>)}
        </div>
    );
};

export default Launches;