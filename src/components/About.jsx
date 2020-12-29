import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export const About = () => {
    
    const [team, setTeam] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = async ()=>{
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
        const users = await data.json();
        setTeam(users.civilizations);
    }

    return (
        <div>
            <h2>About us</h2>
            <ul>
                {
                    team.map(item =>(
                        <li key={item.id}>
                            <Link to={`/About/${item.id}`}>
                                {item.name} - {item.expansion}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
