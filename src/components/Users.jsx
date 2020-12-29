import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export const Users = () => {
    
    const {id} = useParams();
    // console.log(id);

    const [village, setVillage] = useState({});

    useEffect(() => {
        const getVillage = async ()=>{
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
            const town = await data.json();
            setVillage(town);
        }
        getVillage();
    }, [id])


    return (
        <div>
            <h4>{village.name}</h4>
            <p>{village.civilization_bonus}</p>
        </div>
    )
}
