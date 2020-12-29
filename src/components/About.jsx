import React, { useState, useEffect } from 'react'

export const About = () => {
    
    const [team, setTeam] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = async ()=>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json();
        setTeam(users);
    }

    return (
        <div>
            <h2>About us</h2>
            <ul>
                {
                    team.map(item =>(
                        <li key={item.id}>{item.name} - <a href={'mailto:' + item.email}>{item.email}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}
